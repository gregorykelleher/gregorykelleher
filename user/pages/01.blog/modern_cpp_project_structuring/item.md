---
title: Modern C++ Project Structuring
date: 14:31 15/12/2023
highlight:
    theme: monokai
taxonomy:
    category: blog
    tag: [interview, practice, c++, ctest, conan, cmake, programming]
---

For no particular reason whatsoever, I recently found myself dusting off an old repository, [InterviewPracticeQuestions](https://github.com/gregorykelleher/interview_practice_questions) and thought it a good exercise to restructure it along the latest C++ and CMake principles.

![bug](bug.svg)

===

### Preamble

I don't intend on writing a prescriptive argument on the absolute best possible configuration for a prospective new project. Rather, I just wanted to share some loose advice that I've collected, and demonstrate its application in context. As part of this walkthrough, there are three major components to this project that I'd like to focus upon in detail: **CMake**, **Conan** and **CTest**.

#### CMake

Anyone who's worked in C++ for long enough is painfully aware of the intractability that legacy C++ projects can so often exhibit. Time and time again, the culprit is brittle CMake that resists any meaningful change.

CMake is complex and difficult, which succinctly explains why it so often goes awry. That said, Modern CMake has come a long way in addressing these criticisms and provides entirely new features and paradigms for writing efficient, readable and maintainable CMake.

This article isn't an exposition on _how_ to write Modern CMake per se, but as I delve deeper, I hope to highlight CMake best practices and how I've sought to incorporate them into my project's build system.

#### Conan

[Conan](https://conan.io/) is a package manager for C/C++ projects. Just as `pip` installs third-party dependencies for Python projects, Conan does the very same for C/C++. Anecdotally, I haven't encountered it used seriously in many production environments yet, but with the latest release, I hope it'll gain traction going forward.

I've incorporated Conan into this project to highlight its use case for managing and installing external dependencies such as [Google Test](https://github.com/google/googletest).

!!! _The recent major release of Conan V2 is a complete re-architecture that differs significantly from previous versions. It simplifies the API and improves overall usability, however most online documentation at the time of writing still targets V1, and is at best out-of-date, or at worst, incompatible. Thankfully, the Conan V2 examples [here](https://github.com/conan-io/examples2) have proven to be very informative_

#### CTest

Despite being part and parcel of the CMake distribution, CTest is surprisingly often overlooked. It's a convenient test runner to execute test suites, but that limited definition downplays its utility in facilitating more complex test orchestration.

Unfortunately, this project is far too simplistic to illustrate the full capabilities of CTest, but perhaps I'll explore them further in a later article.

### Project Structuring

The overall structure I chose for the project is customary. It consists of the usual `conanfile.py`, `CMakeLists.txt` and `README.md` at the root of the project. There is a `cmake` subdirectory to abstract away all my CMake helper scripts, a `test` subdirectory for my test binaries, and finally the `src` directory containing the project's source code:

```plaintext
.
├── conanfile.py
├── CMakeLists.txt
├── CMakeUserPresets.json
├── README.md
├── cmake
│   ├── CompilerWarnings.cmake
│   ├── GenerateAndInstallConfig.cmake
│   ├── InterviewPracticeQuestionsConfig.cmake.in
│   ├── ProjectOptions.cmake
│   ├── StandardProjectSettings.cmake
│   └── StaticAnalysers.cmake
├── src
│   ├── anagram
│   │   ├── CMakeLists.txt
│   │   ├── anagram.cpp
│   │   └── include
│   │       └── anagram.hpp
└── test
    ├── CMakeLists.txt
    └── anagram
        ├── CMakeLists.txt
        └── anagram_test.cpp
```

Within `src` I envision to have numerous subdirectories for each individual software component, which in turn will be wrapped up as a CMake target. I've chosen then to closely encapsulate any associated headers within their respective subdirectories, rather than abstract all headers into a root `include` directory.

This isn't a classical approach, but I have little reason to share these headers across any other libraries or targets in the project, so it makes little sense to fragment my code without good reason.

### Root CMakeLists.txt

As the root `CMakeLists.txt` is the first port of call for a new user, first impressions count. It defines the project's fundamentals, its metadata and any high-level configuration. I like to keep this file succinct and targeted. Anything falling outside of its purview can be abstracted away elsewhere (namely the `cmake` subdirectory).

My `CMakeLists.txt` includes three CMake files:

```makefile
# Set standard project settings
include(cmake/StandardProjectSettings.cmake)

# set project options
include(cmake/ProjectOptions.cmake)

# set static analysers
include(cmake/StaticAnalysers.cmake)
```

### StandardProjectSettings.cmake

This file is straightforward for the most part. The first portion of the file concerns itself with defining the default built type to `Release` and specifying the output directories for executables and libraries respectively. What's more interesting is what follows.

For the purposes of compilation caching, I decided upon integrating the `ccache` tool:

```makefile
# Include CCache for compilation caching if available
find_program(CCACHE_PROGRAM ccache)
if(CCACHE_PROGRAM)
    message("using ccache")
    set(CMAKE_CXX_COMPILER_LAUNCHER "${CCACHE_PROGRAM}")
else()
    message("ccache not available")
endif()
```

The intention of using `ccache` is in speeding up the build time by caching compilation results; skipping re-compilation when a cached object file already matches the inputs.

Further along, I also include interprocedural optimisation (IPO) if the compiler supports it:

```makefile
# Include Interprocedural Optimisation
include(CheckIPOSupported)

# Enable Interprocedural Optimisation if available
check_ipo_supported(RESULT result OUTPUT output)
if(result)
    message("using interprocedural optimisation")
    set(CMAKE_INTERPROCEDURAL_OPTIMIZATION TRUE)
else()
    message(STATUS "IPO not available: ${output}")
endif()
```

IPO is a collection of compiler optimisation techniques used to improve performance on a project-wide basis. It optimises code using a variety of approaches, such as inlining functions, dead code elimination (DCE), reducing redundancy, reordering routines for better locality, etc.

Next up I include another file, `GenerateAndInstallConfig.cmake`, which does exactly what it says on the tin. Its purpose is to generate and install the standard package configuration files for the project by leveraging the `CMakePackageConfigHelpers` module. Creating such files ensures the project can be seamlessly integrated as a dependency in external projects via the `find_package()` command:

```makefile
# Include package configuration helper module
include(CMakePackageConfigHelpers)
```

The first code block generates the package configuration file (i.e. `InterviewPracticeQuestionsConfig.cmake`) based on the input template file (i.e. `InterviewPracticeQuestionsConfig.cmake.in`) I have defined in my `cmake` subdirectory:

```makefile
# Generate package config files
configure_package_config_file(
    "${PROJECT_SOURCE_DIR}/cmake/${PROJECT_NAME}Config.cmake.in"
    "${PROJECT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
    INSTALL_DESTINATION
        ${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}
)
```

This 'blueprint' `InterviewPracticeQuestionsConfig.cmake.in` file contains the following:

```makefile
@PACKAGE_INIT@

include("${CMAKE_CURRENT_LIST_DIR}/@PROJECT_NAME@Targets.cmake")

set(@PROJECT_NAME@_VERSION @PROJECT_VERSION@)
check_required_components("@PROJECT_NAME@")
```

Note that in the `configure_package_config_file()` step then, the placeholders in the above template file will be initialised with actual project-specific information during the CMake configuration step.

The second code block will then generate the `InterviewPracticeQuestionsConfigVersion.cmake` file that includes the versioning information for the package:

```makefile
# Generate package version file
write_basic_package_version_file(
    "${PROJECT_NAME}ConfigVersion.cmake"
    VERSION ${PROJECT_VERSION}
    COMPATIBILITY AnyNewerVersion
    ARCH_INDEPENDENT
)
```

And last but not least, the final code block is concerned with installing the above configuration files to their specified destinations:

```makefile
# Install package config files
install(FILES "${PROJECT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
                "${PROJECT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}
    COMPONENT config
)
```

Finally, I configure CPack - the packaging tool provided by CMake. Since I've already defined installation rules in the build tree (i.e. `INSTALL_*` for my targets), the project has packaging support via CPack inherently.

When CPack is invoked then, it will find these installation directives specified in the project, and automatically generate the distribution packages required.

All I have to do is set some variables with some basic metadata for CPack support:

```makefile
# Configure CPack
set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
set(CPACK_RESOURCE_FILE_README ${CMAKE_CURRENT_SOURCE_DIR}/README.md)
set(CPACK_SOURCE_IGNORE_FILES
    /.git
    /.vscode
    /.*build.*
    /\\\\.gitignore
    /\\\\.DS_Store
)
include(CPack)
```

### ProjectOptions.cmake

The `ProjectOptions.cmake` is a very neat little CMake file that defines an `INTERFACE` library called `ProjectOptions`:

```makefile
# Create an interface library for project options
add_library(ProjectOptions INTERFACE)
```

While the `PUBLIC` and `PRIVATE` keywords are easily understood, the `INTERFACE` keyword can oftentimes leave people reaching for the documentation. Put simply, it's just a library that doesn't produce any build artefacts (e.g. object files or binaries). Rather its purpose is to define its own properties that other targets can link against and consume.

The `ProjectOptions` library here is a very good example of this use-case in action. Within my `ProjectOptions` library, I'm encapsulating all the specific options for my project that I'd like to propagate across all my project's targets. So whenever a target within `src` links to `ProjectOptions` it will inherit these properties.

In conclusion then, it's a very simple and clean mechanism to share a consistent set of global properties to all project targets.

I follow on then by calling a function called `set_project_warnings()` defined in `CompilerWarnings.cmake` to associate compiler warnings with the `ProjectOptions` library:

```makefile
# Enable compiler warnings
include(cmake/CompilerWarnings.cmake)
set_project_warnings(ProjectOptions)
```

### StaticAnalysers.cmake

And finally, this is another simple CMake file that adds the common static analysis tools, `clang-tidy` and `cppcheck` to the project:

```makefile
# Include clang-tidy if available
find_program(CLANGTIDY clang-tidy)
if(CLANGTIDY)
    message("using clang-tidy")
    set(CMAKE_CXX_CLANG_TIDY ${CLANGTIDY})
else()
    message(STATUS "clang-tidy not available")
endif()

# Include cppcheck if available
find_program(CPPCHECK cppcheck)
if(CPPCHECK)
    message("using cppcheck")
    set(CMAKE_CXX_CPPCHECK ${CPPCHECK})
else()
    message(STATUS "cppcheck not available")
endif()
```

Note that `CMAKE_CXX_CLANG_TIDY` and `CMAKE_CXX_CPPCHECK` are set globally here, which means they'll run on every C++ target in the build, including third-party dependencies pulled in via Conan.

For a project this size that's fine, but in a larger codebase you'd want to attach these as per-target properties instead (e.g. `set_target_properties(Anagram PROPERTIES CXX_CLANG_TIDY "${CLANGTIDY}")`) to avoid noise from code you don't control.

### Source Code

As I introduced in the beginning, I'm encapsulating individual software components within subdirectories under `src` that define their own named target. To take the `anagram` target as an example, its `CMakeLists.txt` file is defined as follows:

```makefile
# Create anagram library
add_library(Anagram anagram.cpp)

# Add include directories for building and installing anagram
target_include_directories(Anagram PUBLIC  
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>  
    $<INSTALL_INTERFACE:include>
)

# add project options
target_link_libraries(Anagram PRIVATE ProjectOptions)

# Include module for GNU standard installation directories
include(GNUInstallDirs)

# Install library and executable and export as a set
install(TARGETS
    Anagram
    EXPORT AnagramExportSet
)

# Install the export set
install(EXPORT AnagramExportSet
    FILE AnagramTargets.cmake
    NAMESPACE Anagram::
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/Anagram
)
```

This looks much like the CMake we've already seen. It defines the `Anagram` library and links to the `ProjectOptions` interface library described earlier.

The `target_include_directories()` command may look slightly unusual to some, as it configures the include directories for the `Anagram` target for both the build _and_ installation processes:

```makefile
# Add include directories for building and installing anagram
target_include_directories(Anagram PUBLIC  
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)
```

The syntax is a little obscure, but not too difficult to decipher. During build time, the `Anagram` target will include files from the build interface (i.e. the `${CMAKE_CURRENT_SOURCE_DIR}/include` subdirectory). During installation, the headers from the local `include` subdirectory will be placed in the installation include directory. This ensures they're accessible in other projects when consuming `Anagram` as an installed library.

Another CMake nugget that might be unfamiliar is the inclusion of the `GNUInstallDirs` module:

```makefile
# Include module for GNU standard installation directories
include(GNUInstallDirs)
```

This is quite helpful as it predefines variables specifying the installation directories following the GNU standards.

So rather than explicitly listing destinations in a manual fashion like this:

```makefile
install(TARGETS Anagram EXPORT AnagramExportSet
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR} # For executables
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR} # For shared libraries
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR} # For static libraries
)
```

Instead with `GNUInstallDirs` it will implicitly choose the appropriate destinations conforming to the GNU standard convention:

```makefile
# Include module for GNU standard installation directories
include(GNUInstallDirs)

# Install library and executable and export as a set
install(TARGETS
    Anagram
    # note no need to explicitly list any destination paths here
    EXPORT AnagramExportSet
)
```

In short then, it's simply a more robust and consistent method of ensuring that all artefacts and files are installed in commonly accepted locations.

### Test Code

So with all the configuration and build stuff out of the way, it should now be possible to write some unit tests to validate the codebase.

As is conventional, I have a `test` subdirectory at the base of the project to contain all tests. The base `CMakeLists.txt` for the `test` subdirectory is straightforward:

```makefile
# Locate Google Test
find_package(GTest REQUIRED)

# Include Google Test module
include(GoogleTest)

# Add tests
add_subdirectory(anagram)
...
```

The `find_package(GTest REQUIRED)` and `include(GoogleTest)` can appear tautological at first glance, but they serve different purposes.

For starters, the `find_package(GTest REQUIRED)` command is used to locate and configure the GTest package, making it available to the project. The `include(GoogleTest)` directive then is used to include the CMake `GoogleTest` module, which in turn contains additional function definitions for the Google Test infrastructure.

One such definition is the new `gtest_discover_tests()` command that's introduced by this module. Typically, new tests would previously have been registered using `add_test()` or `gtest_add_tests()`.

The latest `gtest_discover_tests()` differs slightly from `gtest_add_tests()` in that it automatically discovers tests using CTest by requesting the compiled test binaries to enumerate their tests. This strategy is more robust and offers improved handling of parameterised tests. Since test discovery occurs at build time, it also removes the need for CMake to be re-run when tests are changed.

The use of `gtest_discover_tests()` is evident in `test/anagram/CMakeLists.txt` for example:

```makefile
# Create test executable
add_executable(anagram_test anagram_test.cpp)

# Link test executable to dependent libraries
target_link_libraries(anagram_test
    PRIVATE
        GTest::gtest_main
        ProjectOptions
        Anagram
)

# Enable test discovery
gtest_discover_tests(anagram_test)
```

Note from above that I'm linking my test binary against the `GTest::gtest_main` library too; the CMake target imported from the Google Test framework. This is a convenient mechanism to include the main function that initialises the testing environment and executes the tests.

Now, with test cases defined in `anagram_test.cpp` and things compiled, it's possible to list all available tests using `ctest --show-only` like so:

```bash
Test project /Users/gregorykelleher/Documents/interview_practice_questions/build
  Test #1: ExtractWordsTest.HandlesEmptyString
  Test #2: ExtractWordsTest.HandlesSingleWord
  Test #3: ExtractWordsTest.HandlesMultipleWords
  Test #4: ExtractWordsTest.HandlesRepeatedLetters
  Test #5: FindAnagramTest.HandlesEmptyInputs
  Test #6: FindAnagramTest.NoAnagramsInEmptyVector
  Test #7: FindAnagramTest.NoAnagramsInVector
  Test #8: FindAnagramTest.OneAnagramInVector

Total Tests: 8
```

!!! _It's also possible to run tests in parallel using `ctest -j N` where `N` is the desired number of threads_

### Conan

Underpinning this entire project is the `Conan` package manager. It's responsible for including and installing all of the above dependencies, such as GTest, CMake, CCache and CppCheck. All of this configuration is described in the root `conanfile.py` recipe as follows:

```python
"""Conan package definition for Interview Practice Questions"""

from conan import ConanFile
from conan.tools.cmake import CMake, CMakeToolchain, CMakeDeps, cmake_layout
from conan.tools.build import check_min_cppstd

class InterviewPracticeQuestions(ConanFile):

    name = "interview_practice_questions"
    version = "1.0"
    label = "interview practice questions package"

    settings = "os", "arch", "compiler", "build_type"

    exports_sources = "CMakeLists.txt", "cmake/*", "src/*", "test/*"

    def build_requirements(self):
        self.tool_requires("cmake/[>=3.27.0]")
        self.tool_requires("ccache/[>=4.8.3]")
        self.tool_requires("cppcheck/[>=2.12.1]")
        self.test_requires("gtest/[>=1.14.0]")

    def validate(self):
        check_min_cppstd(self, "20")

    def layout(self):
        cmake_layout(self)

    def generate(self):
        CMakeToolchain(self).generate()
        CMakeDeps(self).generate()

    def build(self):
        cmake = CMake(self)
        cmake.configure()
        cmake.build()

    def package(self):
        cmake = CMake(self)
        cmake.install()
```

Since this is a CMake project of course, I'm including the necessary modules I need at the top of the `conanfile.py` file:

#### CMakeDeps

Responsible for generating the CMake config files for all required dependencies of the package. In other words, it enables the use of the CMake `find_package()` command to locate required dependency packages.

#### CMakeToolchain

Generates a toolchain file for CMake that contains build information for CMake. This toolchain file can then be used in the command line invocation of CMake with `-DCMAKE_TOOLCHAIN_FILE=conan_toolchain.cmake`.

#### CMake

Build helper tool used by Conan to invoke CMake, passing whatever arguments specified such as the toolchain file, build type file and any definitions set in the recipe.

#### Conan Invocation

To invoke `conan` and install the dependencies outlined in the `conanfile.py` it's simply a matter of executing:

```bash
conan install . --output-folder=build --build=missing
```

This command will resolve the dependencies listed, fetch the specified packages and create the necessary build configurations, outputting everything to the `build` subdirectory.

Now everything is prepared to initiate a CMake build within the build tree using the generated Conan toolchain file:

```bash
cd build
cmake ..  -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=build/Release/generators/conan_toolchain.cmake
cmake --build . --config Release
```

It's really as easy as that. Conan is a game-changer when it comes to setting up projects and their dependencies in this fashion.

### Conclusion

That's a lot of ground to cover for what is, at heart, a single-library project with a handful of unit tests. The learning curve is real; CMake's generator expressions alone are enough to send someone back to hand-written Makefiles. But the upfront cost buys you something concrete; a project where adding a new library is a copy-paste of one `CMakeLists.txt`, dependencies are declared in one place, and tests run with a single `ctest` invocation.

If nothing else, I hope this walkthrough makes the individual pieces less intimidating. None of them are particularly complex in isolation - the difficulty is in knowing they exist and how they fit together.
