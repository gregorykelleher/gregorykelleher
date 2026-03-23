---
title: Scripps (Part 2) - The Numbers
date: 16:49 03/18/2026
highlight:
    theme: monokai
taxonomy:
    category: blog
    tag: [investing, broadcasting, scripps, thesis, security, analysis]
---

In [Part 1](/blog/broadcasting-pt1), I laid out the catalyst (the 2026 U.S. midterm elections), the broadcasting industry's structural backdrop, and E.W. Scripps' operational positioning - its local station footprint, ION's must-carry reach, the OTA/sports pivot, and the secular headwinds it's running against. The operational story is decent. But none of it matters if the capital structure can't survive long enough for it to play out.

![scripps.svg](scripps.svg)

===

### Capital Structure

Scripps acquired ION in January 2021 for ~$2.65B. I imagine the strategic logic was sound at the time. ION had must-carry status, 99% household reach and low-cost programming, making it the ideal complement to Scripps' local station portfolio.

But the price was too steep. How do I know? Because Scripps itself has effectively conceded as much, writing down roughly a third of the acquisition's goodwill in FY2023. What remains still only clears its impairment test by ~5% (up from a razor-thin 1.3% in FY2024); a 50bp increase in the discount rate would erase that headroom entirely. The debt taken on to fund the acquisition is the reason Scripps' equity trades where it does today.

#### Debt

So the question is pretty straightforward. Is this company set to default, is the market pricing the leverage correctly, or is it overreacting?

| Instrument | Principal | Rate | Maturity |
|---|---|---|---|
| AR Securitisation Facility | $361M | 7.29% | Apr 2028 |
| Tranche B-2 Term Loan | $281M | Variable (9.60%) | Jun 2028 |
| Senior Unsecured Notes (2029) | $523M | 3.875% | Jan 2029 |
| Tranche B-3 Term Loan | $338M | Variable (7.20%) | Nov 2029 |
| Senior Secured 2nd-Lien Notes | $750M | 9.875% | Aug 2030 |
| Senior Unsecured Notes (2031) | $392M | 5.375% | Jan 2031 |
| **Total Debt** | **$2,731M** | | |

That's $2.7B of debt against a market cap of just $349M; the equity is a thin sliver sitting beneath a mountain of senior claims.

#### What the Bond Market Says

The equity market is screaming distress. But what do the people who actually lent Scripps money think?

Their debt's fair value has improved from 81.1% of par at the end of FY2024 to 94.0% by December 2025, which is a significant repricing of credit risk in just twelve months:

| Bond | Coupon | Maturity | S&P | Price (% par) | YTM | Redeemed |
|---|---|---|---|---|---|---|
| Senior Secured 2nd-Lien | 9.875% | Aug 2030 | CCC+ | 102.90 | 9.08% | 0% |
| Senior Unsecured | 3.875% | Jan 2029 | B | 92.95 | 6.51% | 4.8% |
| Senior Unsecured | 5.375% | Jan 2031 | CCC- | 74.65 | 12.39% | 21.6% |

The secured notes trading above par is the clearest signal. Lenders with first claim on the assets are comfortable enough to pay a premium. The 2029 unsecured notes have recovered from ~82 at the 2022 trough to ~93 today; stressed but manageable, not distressed. The 2031s at ~75 cents are the caution flag though. The credit market isn't confident the longest-dated unsecured creditors will be fully repaid, although Scripps has made sure to redeem over a fifth of that issue; its weakest paper.

Think about what these prices actually mean. The 2029 unsecured notes at 93 cents on the dollar are pricing survival through January 2029 as near-certain. Why would you pay 93 for paper yielding 6.5% if you expected a default before maturity? Meanwhile, the equity at $3.97 is pricing near-zero terminal value; the market is essentially saying that once the debt is serviced, there's almost nothing left for common shareholders.

Both can't be right. Either the bond market is mispricing credit risk (unlikely, given it correctly repriced from 81% to 94% of par in twelve months while the equity barely moved), or the equity market is over-extrapolating structural decline into a business that its own creditors expect to survive.

Historically, when bonds and equity disagree on solvency, the bond market tends to be the smarter read; credit analysts are paid to model cash flows, not narratives.

Finally, Scripps restructured its accounts receivable securitisation facility in April 2025. Previously, this was an off-balance-sheet arrangement ($450M, accounted for as a 'true sale' under ASC 860), which meant $450M of economic debt was invisible in reported leverage and operating cash flow was inflated by the facility's proceeds. The new $361M facility is now on-balance-sheet as collateralised financing. In other words, receivables stay on the books, borrowings show as liabilities, and cash flows are correctly classified through financing activities. This is a welcome improvement in transparency.

#### Maturity & Coverage

The saving grace is the maturity profile. The April 2025 refinancing extended the runway, with no major maturities until April 2028 (AR facility) and June 2028 (B-2 term loan). That gives Scripps two full political cycles (2026 midterm, 2028 presidential) to generate cash before the refinancing wall arrives.

Having said that, cash on hand is a pitiful $28M. That's frightening for a company buried in $2.7B of debt.

| Metric | Value | Derivation |
|---|---|---|
| Total Debt | $2,731M | $28M ST + $2,586M LT + $117M capital leases |
| Less: Cash | ($28M) | |
| Net Debt | $2,703M | |
| Normalised EBITDA (2-yr avg) | $451M | GAAP: ($567M + $335M) / 2, i.e. (OpInc + D&A) |
| **Net Leverage** | **6.0x** | $2,703M / $451M - 1.2 turns above management's 4.8x |

Off-year interest coverage is tight but critically above water:

| Period | EBIT | Cash Interest | Coverage |
|---|---|---|---|
| FY2024 (election year) | $412M | $196M | 2.10x |
| FY2025 (off-year) | $184M | $168M | 1.09x |
| Normalised (2-yr avg) | $298M | $182M | 1.64x |

The income statement interest figure of $221M (FY2025) looks worse still at 0.83x, but it includes $44.5M of one-time financing transaction costs from the April and August 2025 refinancings that won't recur. Cash interest paid of $168M is what Scripps actually owes each year once the one-off refinancing costs are stripped out.

!!! That said, management guides $180-190M for FY2026 as the higher coupon on the new second-lien notes feeds through. Thin, but not broken.

#### Covenant Headroom

The coverage ratios tell you whether Scripps can afford to pay its interest bills. But there's a separate, arguably more important question. Can the lenders _force_ a crisis even if Scripps is paying on time? That's what covenants govern, and the two pictures look very different.

The only maintenance covenant sits on the $208M revolving credit facility. First lien net leverage must stay below 3.50x (stepping down to 3.25x after September 2026). Here's the thing though, this covenant is only tested if the revolver is actually drawn. It isn't. The term loans and notes, $2.6B of the $2.7B debt stack, carry no maintenance covenants at all.

Even if Scripps did draw the revolver, the headroom is wide. First lien debt (the two term loans) total $619M against $331M EBITDA, putting first lien leverage at 1.87x. Nearly two full turns inside the 3.50x limit.

So the lenders on the bulk of the debt have no mechanism to force a default based on leverage, and the one facility that does have a trigger is undrawn with plenty of headroom. Combining that with no maturities until April 2028, a near-term liquidity crisis just isn't what the capital structure is illustrating to me.

#### Berkshire's Squeeze - Death by Compounding

Then there's the preferred stock. This is where things turn from manageable to genuinely hostile for anyone holding common equity.

Berkshire Hathaway holds a Series A Preferred with a $600M face value, carrying a 9% cumulative coupon ($54M/year). Scripps hasn't paid a single dividend on it since issuance. They've just been letting it pile up in the background.

The accumulated unpaid dividends stood at $117M as of December 2025, bringing the total preferred obligation to a whopping $717M, _and_ it grows by $54M every year it goes unpaid.

The structural consequences of this are severe:

1. **No common dividends** are permitted while the preferred is outstanding
2. **No share buybacks** are permitted
3. **The obligation compounds** - in 5 years, the preferred will have ballooned to ~$870M ($600M face + $270M accumulated)
4. **Any acquirer** must pay Berkshire $717M+ before common shareholders see a cent

In effect, the preferred is a rising strike price on the equity. Every year Scripps doesn't address it, $54M of value that would otherwise accrue to common shareholders gets absorbed by Berkshire instead. It's the functional equivalent of time decay on a call option. So even if the business improves, the common equity erodes unless the improvement outpaces the compounding.

The preferred became callable on January 7, 2026. Scripps now has the right to redeem it at face value plus accumulated dividends. It hasn't moved. At 6x net leverage, it simply can't raise the ~$717M needed to retire it.

Redemption really only becomes realistic once leverage falls to maybe ~3x and the company can issue cheaper debt to replace a 9% compounding obligation with fixed-rate borrowing. I'd hazard that to be a FY2029/2030 event at the earliest. Until then, common shareholders are locked out of capital returns.

That said, it's worth noting who's on the other side of this. Berkshire's $600M preferred was part of the financing package for the ION acquisition itself; they helped underwrite the very deal that created this leverage in the first place.

Buffett's preferred deals (think Goldman 2008, Bank of America 2011, Occidental 2019 etc.) all follow a pattern: he backs companies he expects to survive and pay. A 9% cumulative coupon is only valuable if the issuer stays solvent. That's not a guarantee, but the most famously conservative capital allocator in history sizing this bet is itself a signal.

#### Net Common Overhang

| Claim | Amount |
|-------|--------|
| Long-term debt | $2,586M |
| Short-term debt | $28M |
| Capital lease obligations | $117M |
| Preferred stock obligation | $717M |
| Less: Cash | ($28M) |
| **Net Common Overhang** | **$3,420M** |

One important fact to point out is that the $717M preferred obligation doesn't appear in any of Scripps' reported leverage ratios. Under GAAP, preferred stock is classified as equity, not debt. It actually sits in the equity section of the balance sheet. Management's reported 4.8x net leverage excludes it entirely.

But economically-speaking, the preferred behaves like debt in every way that matters. Fixed 9% coupon. Accumulating unpaid obligations. Senior to common equity in liquidation. The only reason it isn't called debt is because of an accounting classification.

Include it, as the table above does, and the all-in overhang jumps to $3,420M, roughly 9.8x the market cap. Common equity holders face $3.4 billion in claims above them.

It's also worth noting that this overhang is moving in two directions at once. On one hand, Scripps is actively paying down debt as discussed. It's already redeemed 21.6% of its weakest paper (the 2031 unsecured notes) and is generating cash from station sales ($123M from WFTX + WRTV).

On the other hand, the preferred grows by $54M every year it goes unpaid, steadily adding to the pile. The net overhang only shrinks if debt paydown exceeds the preferred accrual, and in off-years with $7M of FCF, it clearly doesn't. Worse, the off-year trend is deteriorating: FY2021 produced $176M of FCF, FY2023 dropped to $52M, and FY2025 came in at just $7M. Each successive off-year generates less cash to work with. The race is between active deleveraging and passive compounding.

#### Off-Balance-Sheet Obligations

Beyond the debt itself, Scripps carries $329M in non-cancellable sports programming commitments (+52% YoY), part of $1,298M in total programming obligations. These aren't technically debt, but they're fixed cash claims that compete with debt service for the same pool of operating cash flow.

The sports content is pulling its weight, with 700bps of margin expansion in Scripps Networks in Q4, hitting 32% segment margins. However, Scripps doesn't separately disclose what it earns from sports versus what it spends on rights, so whether the $329M more than pays for itself remains an open question.

#### The INYO Re-Acquisition

One near-term positive that's not yet reflected in the numbers. In February 2026, Scripps exercised its call options to re-acquire all 23 ION stations it had divested to INYO Broadcast Holdings at the time of the ION acquisition, for approximately $54M. As discussed in Part 1, this collapses a regulatory workaround. INYO was a pass-through middleman that Scripps was forced to create for the sake of FCC compliance. The stations never stopped carrying ION content at any point.

The margin impact is straightforward. Scripps had valued the INYO affiliation arrangement at $422M ($317M carrying value remaining), amortised at ~$21M/yr. Buying the stations back for $54M eliminates whatever fees Scripps was paying INYO, brings the stations' direct economics in-house, and eventually replaces a ~$21M/yr amortisation charge with one based on the $54M purchase price. It's immediately accretive to Networks margins, and the $54M cash outflow is modest relative to the value recaptured.

### The Transformation Plan

In February 2026, Scripps announced a Transformation Plan targeting $125-150M of annualised EBITDA improvement by 2028, phased as follows:

| Timeline | Target |
|---|---|
| In-year 2026 | $20-30M |
| Run-rate entering 2027 | $60-75M |
| Full realisation by 2028 | $125-150M |

Management is seemingly stepping up. The credibility question matters here, and to be fair, the track record lends some confidence. The 2023 cost programme delivered its $40M target in full. The Scripps News scale-back ($35M savings from shutting down its national news broadcast) is on track. And Scripps Networks' margin expansion of 700bps in FY2025 beat management's own guidance of 400-600bps.

But the plan itself is remarkably light on detail. Across the 10-K, the 8-K and the earnings release, the entire description amounts to one sentence on repeat:

> _"cost savings and revenue growth initiatives that will leverage technology including AI and automation to increase the yield on existing businesses."_

No breakdown between cost savings and revenue growth. No specifics on what 'AI and automation' means in practice. No detail on what processes are being automated, what headcount implications follow, or what upfront investment is required.

What we _can_ do is reverse-engineer from the MD&A where prior savings actually came from. The picture is almost entirely headcount reduction:

- Scripps Networks slashed employee compensation by $34.1M (-28%), driven by shutting down the Scripps News national news broadcast and other restructuring
- Local Media cut employee compensation by $16.6M (-3.8%) through restructuring and lower bonuses
- Networks cut syndicated programming by $18.9M and carriage affiliation fees by $10.9M

These are real savings, but they're largely one-time. You can't fire the same people twice, and the easy cuts are already behind them. Going from $40M of prior restructuring to $125-150M is 3-4x the magnitude of anything Scripps has attempted before.

There's also a tension within the numbers. While one hand is cutting costs, the other is spending. Local Media programming expense _increased_ $24.2M in FY2025, driven by the same sports rights deals (WNBA, Lightning, Mammoth/Coyotes) that produced the $329M in non-cancellable commitments. The margin expansion story and the cost-cutting story are pulling in opposite directions within the same financial statements.

Conservatively crediting 50-60% delivery (~$62-90M) is probably the prudent base case.

There's also a compensation angle. CEO Symson's largest pay component is a $10M cash award tied to annualised EBITDA growth of $125-150M, which coincidentally is the same metric the plan targets, and whose adjustments management defines.

There is a stock price hurdle too. To unlock the maximum 150% payout ($15M), the stock must hit a rolling 30-day average of $10 at some point during the performance period. But the base payout of up to $10M depends solely on EBITDA growth, with no stock price check. The hurdle constrains the top end, not the bulk of the award.

That doesn't mean the plan is hollow. But the vagueness of the disclosure, the scale relative to precedent, and the compensation structure all mean the reported progress deserves scrutiny.

### The Tax Tailwind

There's one more piece worth understanding here, because it directly affects how much cash Scripps actually gets to keep.

The US tax code caps how much interest a company can deduct each year at 30% of its EBITDA. In off-years, Scripps' interest expense ($221M) far exceeds this cap (~$101M, i.e. 30% of $337M EBITDA).

The gap, roughly $120M of disallowed interest in FY2025 alone, cannot be deducted right now, but it doesn't just disappear either. Instead it rolls forward as a deferred tax asset, accumulating on the shelf until the company earns enough to use it.

By the end of FY2025, Scripps had $79.3M of these banked tax shields sitting on the shelf, built up from ~$378M of cumulative disallowed interest. On top of that, it has $62M in federal and $322M in state net operating losses (expiring through 2044). Essentially past losses that can also be used to reduce future tax bills.

To see how this plays out, it helps to estimate what FY2026 EBITDA might look like. There are several tailwinds stacking up.

For starters, Scripps' 11 NBC affiliates get an early-year boost from the Winter Olympics (February) and Super Bowl LX, both airing on NBC, driving elevated local advertising and viewership ahead of the political cycle kicking in. Then the 2026 FIFA World Cup (hosted across the U.S., June-July, airing on Fox) provides a summer bridge through Scripps' four Fox affiliates before political spending peaks in Q3/Q4.

Finally there's the main event. AdImpact projects $10.8B of total political ad spending this cycle, with broadcast TV capturing 49% (~$5.3B). Based on Scripps' ~2.3% share of the 2022 cycle and its presence in four of five toss-up gubernatorial states (Arizona, Michigan, Nevada, Wisconsin), a reasonable estimate for SSP political revenue is $220-260M. At ~85% incremental margin, that's roughly $187-221M of EBITDA contribution. Layer that onto the FY2025 base then:

```
FY2026E EBITDA = $337M base + ~$213M political (midpoint) + $25M transformation + $20M distribution renewals ≈ $595M
```

Now, back to the tax shields. In election years, when political revenue pushes EBITDA up to ~$595M, the 30% cap rises to ~$179M - well above the annual interest bill. That headroom lets Scripps deduct all of its current interest _and_ start pulling from the shelf. Every dollar pulled reduces taxable income by $1, saving $0.21 in cash taxes. If Scripps works through the full $79.3M shelf, that's $79.3M of tax bills it never has to pay, and cash that flows directly to debt paydown instead.

In short, the tax code punishes Scripps in off-years and rewards it in on-years. It's a built-in asymmetry that amplifies the political cycle's cash flow benefit. The same cyclicality that creates the investment opportunity also unlocks the tax shields to accelerate deleveraging. A feedback loop, if you will.

### The P&L Illusion - D&A vs. Maintenance Capex

There's a reason I've been leaning on EBITDA throughout this analysis rather than reported net income, and it's worth making explicit. Scripps posted a net loss of -$101M in FY2025. On that basis, one would likely deduce that the business is hemorrhaging cash.

Critically, the income statement includes $150.8M of Depreciation & Amortisation, which breaks down as follows:

| Component | FY2025 | What It Represents |
|---|---|---|
| Depreciation (PP&E) | $58.9M | Wear-and-tear on towers, transmitters, buildings, equipment |
| Amortisation of intangible assets | $92.0M | Write-down of ION acquisition intangibles (network affiliations, customer relationships) |
| **Total D&A** | **$150.8M** | |
| Actual capex (cash spent) | $43.3M | Real money spent replacing/maintaining physical assets |
| **D&A minus Capex** | **$107.5M** | Non-cash charge with no corresponding cash outflow |

Of the $150.8M, $92M is ION purchase price amortisation; network affiliation relationships and customer lists from 2021 that GAAP expenses annually but require no cash to maintain. The remaining $59M depreciation covers real physical assets; capex of $43-54M (FY2025 actual to 2-year average) is properly close to true maintenance.

| | Amount |
|---|---|
| EBITDA | $335M |
| Less: maintenance capex (~2yr avg) | ($54M) |
| Less: cash interest paid | ($168M) |
| **Pre-tax cash after maintenance and debt service** | **~$113M** |

That's $113M of real cash versus reported net income of -$101M. Debt-service capacity is significantly better than the P&L suggests, and it's why I feel EV/EBITDA is the appropriate valuation lens to use here.

!!! On the flip side, that phantom amortisation exists purely because Scripps overpaid for ION. This loaded $1,918M of goodwill onto $1,246M of book equity. And Scripps Networks' $1,052M of goodwill cleared its impairment test by just ~5%. Even just a 50bp discount rate increase would erase that headroom. FY2023's $952M writedown is precedent to this. If another such impairment were to occur, it wouldn't trigger covenants or consume cash, but it could easily push book equity negative.

### Valuation

To properly value the equity, you need an enterprise value that reflects the full claim stack, not just the debt the company chooses to report.

| Component | Amount | Source |
|---|---|---|
| Market cap (common equity) | $349M | Price $3.97 x ~88M shares |
| + Net debt | $2,703M | $2,731M total debt - $28M cash |
| + Preferred stock obligation | $717M | $600M face + $117M accumulated dividends |
| **All-In Enterprise Value** | **$3,769M** | |

For comparison, using management's reported net debt of $2,617M (which excludes the preferred entirely) gives an EV of $2,966M. The $803M gap between the two is the preferred obligation plus the capital leases, which are real economic claims that management's figure quietly omits.

So at just $349M, the common equity represents a mere 9.3% of the all-in enterprise value. 91 cents of every dollar of enterprise 'value' belongs to someone other than common shareholders. Owning Scripps equity is not the same as owning a piece of the business; it's owning the thin residual sliver that's left after $3.4B of claims have been satisfied.

This has a direct consequence for volatility. When equity is this small a fraction of EV, it behaves like a leveraged bet on the underlying business. A 10% improvement in enterprise value doesn't produce a 10% gain in the stock. It roughly doubles it, because the debt and preferred are fixed claims. The same maths works in reverse too; a 10% decline in EV could wipe out most of the equity.

For a business heading into a constitutionally guaranteed revenue surge (the 2026 midterms), this leverage amplification is exactly what creates the asymmetry. The downside is bounded by the fact that the business is already priced for near-zero terminal value. The upside is amplified by political revenue hitting at ~85% margins, flowing through a capital structure where the equity captures every incremental dollar once fixed claims are covered.

#### EV/EBITDA

The multiple you get depends entirely on which EBITDA you use, and for a cyclical business like this, the choice matters enormously:

| EBITDA Basis | Value | EV/EBITDA ($3,769M) | What It Reflects |
|---|---|---|---|
| FY2025 GAAP (off-year) | $335M | 11.2x | Trough earnings, zero political revenue |
| FY2025 Adjusted (off-year) | $331M | 11.4x | Management's preferred measure |
| Normalised 2-yr avg (GAAP) | $451M | 8.4x | Smooths out the political cycle |
| FY2024 GAAP (on-year) | $567M | 6.6x | Last election year |
| FY2026E (on-year) | ~$595M | 6.3x | Midterm year estimate |

At 8.4x normalised, the enterprise itself isn't obviously cheap; that's a fair-to-full multiple for a business with declining secular trends and heavy leverage. The apparent cheapness in the equity (3.5x P/FCF) is purely a leverage effect. The equity is a thin residual claim, so small movements in EV produce outsized swings in per-share value.

To illustrate, each 1-turn change in the EV/EBITDA multiple (i.e. ~$451M of enterprise value) translates to roughly ~$5 per share. That's the leverage amplification at work; it's what makes the equity look like a screaming buy on a P/FCF basis but only a middling value on an enterprise basis.

### Insider Buying

Between the 3rd and 10th March 2026, twenty insiders bought ~1.83M shares of SSP in open-market purchases totalling ~$7.95M. All within eight calendar days, at prices ranging from $3.69 to $4.64.

The largest individual buyers being:

| Buyer | Shares | Avg Price | Total |
|---|---|---|---|
| Klenzing Margaret Scripps | ~480K | $4.38 | ~$2.1M |
| Granado Corina S. | ~470K | $4.08 | ~$1.9M |
| Brickner Rebecca Scripps | ~270K | $4.37 | ~$1.2M |
| Sanchez Mary Ann S. | ~221K | $4.50 | ~$994K |
| CEO Adam Symson | 26,910 | $3.69 | $99K |

On the surface, this looks like one of the strongest insider conviction signals you could ask for. But it deserves honest decomposition.

Of the twenty buyers, seventeen are Scripps family descendants classified as 10% owners. Two are directors who are also family members. Their informational edge is at the governance level; board strategy, the rationale behind the Sinclair rejection, and high-level direction. But they don't have day-to-day visibility into ad backlog, transformation execution, or the political revenue pipeline. Only one buyer does: CEO Adam Symson.

The family holds ~93% of Common Voting shares and controls two-thirds of the board regardless of stock price. Their motivations may extend beyond pure valuation; legacy (the company has been in the family since 1878), optics after publicly rejecting Sinclair's $7/share offer in November 2025, or coordinated trust activity. Twenty members of the same family, likely advised by shared counsel, acting in the same week is probably one decision expressed twenty times, not necessarily twenty independent assessments.

The CEO's $99K is the cleanest signal. Symson has full operational visibility and chose to buy at $3.69 with his own money. But $99K is modest; roughly 2% of typical CEO compensation at this level. Compare Sinclair's David Smith, who deployed $2.5M buying SBGI stock. If Symson had deeper conviction, I'd imagine $500K-$1M would've been proportionate.

The Sinclair bid deserves a closer look on its own merits. In November 2025, Sinclair proposed acquiring Scripps at $7/share, a 76% premium to today's price. The board rejected it and adopted a poison pill. That rejection is itself a signal. A controlling family with 93% of the vote looked at a near-double and said no, preferring to bet on their own operational trajectory instead. Whether that reflects genuine conviction in the Transformation Plan or an emotional inability to sell the family name at a distressed price is an open question, but either way, they're backing the standalone path with real money.

Separately, the bid tells you something about asset value. Sinclair is the largest TV station owner in America, with deep industry knowledge and full visibility into broadcasting economics. When a strategic buyer with that level of expertise offers $7 for a stock trading at $4, they're seeing value in the underlying assets (spectrum, ION's must-carry reach, station footprints in battleground states) that the equity market is not crediting. The $7 wasn't charity; Sinclair would have captured synergies on top, meaning the standalone asset value they were pricing was likely higher still.

That said, the cluster is still meaningful. The family rejected $7/share six months ago and is now buying at $3.69-$4.64, which is either rational (they genuinely believe the company is worth substantially more) or psychological (having rejected $7, they can't accept that the stock is fairly priced at $4). Both explanations are consistent with the data.

If you held me to it, I'd probably weight the insider signal at roughly half its headline strength. The CEO's participation is the load-bearing element; the family volume provides confirmation, not independent validation. It doesn't override the aforementioned capital structure risks on its own, but it does make things more interesting at the very least.

### Institutional Ownership

The insider buying paints one picture. The institutional flow paints a different one.

Q4 2025 13F filings show a broad institutional exodus. Turns out that 110 funds reduced positions versus just 10 that increased (11:1 sell-to-buy ratio), total 13F shares dropped 31% in a single quarter, and hedge fund call option positions went from 222,900 contracts to literally zero. The put/call ratio among 13F filers swung from 0.08 to 2.53 in a single quarter. Part of this is mechanical. Many institutional mandates prohibit holding stocks below $5, which triggers forced selling regardless of fundamentals once the price breaches that threshold.

The top shareholders are mostly passive. The usual BlackRock, Vanguard, Schwab, Dimensional, Geode and State Street together hold ~22% of float on autopilot because SSP is in a small-cap index, not because someone made an active call. The quant shops (D.E. Shaw, Schonfeld, Acadian) are all reducing. And the handful of new Q4 positions are negligible. The largest sitting at just 0.18% of that fund's portfolio.

#### The 13D Filings

But the most significant data isn't in the 13Fs at all. It's in the SC 13D/A filings.

A 13D filing (as opposed to a passive 13G) is what you file when you own 5%+ of a company _and want to reserve the right to influence it_. It's the SEC's way of flagging activist intent. Three parties currently have active 13D/As on SSP.

| Filer | Shares | ~% Outstanding | Filed | Direction |
|---|---|---|---|---|
| Scripps, Eaton M. (family) | 12,645,425 | ~14.4% | 13/03/26 | Holding (governance control) |
| Sinclair, Inc. | 7,625,401 | ~9.9% | 16/01/26 | Increasing (8.2% → 9.9%) |
| GAMCO Investors (Gabelli) | 4,383,703 | ~5.7% | 02/02/26 | Increasing (5.1% → 5.7%) |

That's ~24.6M shares, roughly 28% of shares outstanding, held by three parties who've explicitly reserved activist rights. Crucially, the two non-family holders are both _increasing_, not winding down.

Sinclair went from ~8.2% to 9.9% of Class A shares _after_ their $7/share bid was rejected. Their Amendment No. 4 says they've "continued to express willingness to engage" on a combination, while Scripps "has refused invitations to speak" and prefers the standalone plan. Their last proposal was a 240% premium over the unadjusted share price.

This doesn't strike me as the behaviour of someone who's moved on; it's a strategic buyer keeping the door open while quietly accumulating more stock, either as leverage for a future bid or because the standalone asset value justifies the position regardless.

GAMCO (Mario Gabelli's shop) spent ~$1.66M buying additional shares in January 2026, accumulating at $3.34-$3.90 per share. And Gabelli has gone beyond positioning; he's launched a proxy contest. GAMCO has nominated three alternative directors for election at the May 4, 2026 annual meeting, in direct opposition to the board's recommended slate. This follows a 2018 proxy contest where Gabelli nominated three candidates (including former Media General CEO Vincent Sadusky), rejected the board's offer of one seat, and ultimately lost the vote when the stock was at ~$9.31. He's back for round two, with a larger stake and a lower cost basis.

There's a structural ceiling on what this contest can achieve, though. Scripps maintains a dual-class capital structure: Class A shares (76.9M outstanding) elect just three directors (the greater of three or one-third of the board). The family's Common Voting Stock (11.9M shares) elects the remaining nine and votes on everything else. So even if Gabelli sweeps all three Class A seats on May 4, the family retains supermajority board control regardless.

This is an influence play, not a takeover play. Presumably seeking board-level visibility, a voice in strategy discussions, and public pressure on management to deliver on the transformation plan. But coming from one of the most recognised activist value investors in America, at a stock trading under $4, it's still about as specific a signal as the institutional data gets.

#### Separating the Signal from the Noise

The headline 13F numbers look damaging, but most of it is noise. The 110 reducers are overwhelmingly index rebalancers and quant shops responding to bad momentum and factor scores.

They'd honestly sell regardless of the underlying thesis. It doesn't help that only two sell-side analysts still cover SSP; there's almost no institutional research to counterbalance the mechanical selling. The new Q4 positions are rounding errors at 0.00-0.02% of portfolio.

The signal is elsewhere. Three parties with deep domain knowledge, activist rights, and real money at stake are all independently increasing their positions at the bottom:

- **Sinclair** (9.9%, increasing) knows exactly what these assets are worth because they operate identical ones. They're not buying SSP because an algorithm told them to. As discussed in Part 1, the spectrum and station footprint have strategic value that is embedded in the operating cash flows. Sinclair's willingness to bid $7 and continue accumulating suggests they see that embedded value as significantly underpriced at $4.
- **Gabelli** (5.7%, increasing + proxy contest) is spending legal fees to run a board contest at a stock under $4. Proxy contests aren't cheap. You don't do that unless you believe the gap between price and value is wide enough to justify the effort.
- **The family** (14.4%, buying at $4) rejected $7 six months ago and are now putting personal money in at half that price. Whatever their motivations, they have governance-level information and they're backing the standalone path.

Together that's 28% of shares outstanding held by informed, concentrated holders, while the systematic money heads for the exits because the factor scores look terrible.

What makes this more interesting than the typical neglected name is the activist pressure. Gabelli's board contest and Sinclair's persistent merger overtures create a floor of sorts. If the standalone plan underdelivers, there are parties already positioned and motivated to force a different outcome.

### Peer Comparison

Scripps' broadcasting peers are Nexstar (NXST), Gray Media (GTN), and Sinclair (SBGI). Comparing them on headline numbers is misleading. Each company, as it turns out, cooks the books differently.

Gray Media is the closest comparable. On paper, GTN looks meaningfully cheaper and stronger:

| | GTN | SSP |
|---|---|---|
| Normalised EV/EBITDA | 7.6x | 8.3x |
| Off-year EBITDA interest coverage | 1.41x | 1.09x |
| Cash | $368M | $28M |
| Preferred | $650M flat (paid current) | $717M and growing ~$54M/yr |

But those numbers required substantial adjustment. Gray keeps a $400M AR securitisation facility off-balance-sheet; when it expanded by $100M in FY2025, that showed up as operating cash flow, inflating reported FCF from ~$81M to $181M. Scripps moved its own AR facility on-balance-sheet in April 2025.

More critically, GTN reports 5.80x leverage using an 8-quarter blended denominator that mixes election-year FY2024 EBITDA into the off-year figure. On single-year FY2025 EBITDA alone:

> $5,447M net debt / $670M FY2025 EBITDA = **8.1x leverage** above the 7.00x covenant max.

Sinclair has its own problems. There's a litany of red flags like the family-controlled "sidecar" shell companies used to circumvent FCC ownership caps ($48M fine in 2020), a $10.6B sports network acquisition (Diamond Sports) that went bankrupt in 2023 wiping out the equity, and the same 8-quarter leverage denominator trick. Nexstar is the cleanest (BB+ rated, 3.6x leverage), but at $7B market cap there's no asymmetric upside to talk about.

The covenant structures tell you who's actually in danger:

| | GTN | SBGI | SSP |
|---|---|---|---|
| Notes have maintenance covenants | Yes | No | No |
| Maintenance covenant scope | All debt | Revolver only (if >35% drawn) | Revolver only ($208M, undrawn) |
| EBITDA denominator | 8-quarter blended | 8-quarter blended | Not disclosed in 10-K |
| Single-year EBITDA consequence | 8.1x vs 7.0x. Max already breached | Untested (revolver undrawn) | Irrelevant. No maintenance test |

GTN's 8-quarter blending is load-bearing: without it, the company is in technical default. For Sinclair and Scripps, the covenant only governs an undrawn revolver.

The one comparison that cuts through the fog is the bond market. Both GTN and SSP have unsecured 5.375% notes maturing in 2031:

| Bond | Price | YTM |
|---|---|---|
| GTN 5.375% Nov 2031 (unsecured) | 78.19 | 10.54% |
| SSP 5.375% Jan 2031 (unsecured) | 74.65 | 12.39% |

The credit market prices GTN as the stronger credit, and it probably is. But both sets of bonds are priced for survival, not default. Of the junk-rated group, SSP's accounting is arguably the most transparent, which feels like an odd thing to say about the weakest credit.

So why pick SSP over the cheaper, stronger peers? Because the numbers aren't the thesis. SSP has differentiated catalysts that the others simply don't have:

- $7.95M of insider buying versus zero at GTN
- A $7/share strategic bid from Sinclair with no equivalent for Gray
- An active proxy contest from Gabelli creating external accountability
- A Transformation Plan representing actual structural change versus GTN's strategy of riding the cycle

Those catalysts don't make SSP the safer bet, but they make it at least the more interesting one.

## Contrarian Assessment

> _"The easiest person to fool is yourself"_

It's best at this point to step back, evaluate the thesis, and make clear what kind of play is worth making.

It should be obvious by now that this is not an intrinsic value investment in E.W. Scripps, à la Graham. On a normalised basis, at any reasonable multiple for this credit quality, the common equity is worth somewhere between nothing and $5:

> At 6x normalised EBITDA: $454M × 6 = $2,724M EV − $2,703M net debt − $731M preferred = **-$710M**
>
> At 7x with $100M Transformation savings: ($454M + $100M) × 7 − $2,703M − $731M = $444M = **$5.05/share**

A traditional value investor would grind to a halt on this alone. The equity has absolutely no margin of safety on a buy-and-hold basis.

Seven things must go right simultaneously (Transformation delivery, political revenue, refinancing, no secular acceleration, retransmission growth, Berkshire patience, no recession in the wrong year), and being wrong on any single one of them could mean permanent capital loss.

And then there's the self-reinforcing feedback loop that doesn't show up in any single metric: high leverage forces high interest costs, which forces cost cuts, which risks product degradation, which erodes revenue, which lowers EBITDA, which raises leverage further.

Each step is rational in isolation but collectively they form a spiral. I've already described pieces of this throughout, e.g. the $50.7M of compensation cuts, the tension between cost savings and sports rights spending, the off-year FCF deterioration from $176M to $52M to $7M across successive cycles. The only escape valves are the episodic political windfalls large enough to break the cycle through debt paydown, a new revenue stream like EdgeBeam that isn't subject to the same secular decline, or M&A that recapitalises the business. If none arrive in sufficient magnitude before the spiral tightens, the equity goes to zero even if the underlying assets retain significant value, purely because that value accrues to debtholders through restructuring, not to equity.

Which is exactly what happened to Tribune Media, Cumulus and iHeartMedia. All had similar capital structures. The businesses survived fine. The equity never did.

In my books, I'd label this an informed speculative bet on projected near-term potential. A defined-catalyst, defined-duration trade with range-bounded entry and exit. The distinction matters because the margin of safety for a 6-12 month trade is different from the margin of safety for a 5-year hold.

### What Makes the Near-Term Trade Different

For the long-term equity thesis, I've already covered the main risks throughout this post:

* Off-year coverage of 1.09x
* The compounding preferred
* Secular headwinds
* The refinancing wall
* The GAAP-to-Adjusted gap

All of the above are existential. It's safe to say that any one of these could compound into permanent loss over a multi-year horizon.

For a near-term political cycle trade, however, the simple fact is that fewer things need to go right.

**1. The company survives the next 12 months**

The secured bonds at 103 and the 2029 unsecured at 93 say it does. No major maturities until April 2028. The credit market has already answered this question for us.

**2. The midterm happens.**

It does. This is constitutionally guaranteed. $225-275M of political revenue at ~85% margin arrives in H2 2026.

**3. The market re-rates on reported numbers, not anticipated ones**

Right now the Bloomberg terminal is flat out displaying $7M FCF, 1.09x coverage, $331M EBITDA. The worst numbers in the peer group.

The market knows the midterms are coming, but it tends to re-rate when the reported figures actually improve. By Q3 2026, those screens will show $570M+ EBITDA and leverage compressing from ~6x to ~3.5x. That's a narrative shift from "distressed" to "manageable".

That's not zero risk. A macro shock could easily prevent or delay re-rating. Or equally the stock could front-run the political revenue and stall before the cash arrives. But it's a narrower set of requirements than the long-term thesis demands, and the first two are near-certain.

### What the Market Is Pricing In

In my mind, the market is answering the easy question, _"Is Scripps profitable right now?"_ Nope, it lost $101M.

The harder question is, _"What is the normalised earning power across the political cycle, and does the company survive long enough to collect it?"._

At $3.97, the stock is priced on the off-year trough as though it were the new normal: terminal decline, buried in debt, no cash returns, equity as a residual stub worth 9.2% of enterprise value.

### What the Market May Be Missing

We've already verified that the bond market has repriced, and the equity hasn't. Debt fair value has recovered from 81% to 94% of par in twelve months. The secured notes trade above par. If the credit market is right that Scripps survives through 2029-2030, the equity must be worth more than what it's trading for today.

The informed money agrees. Every party with deep domain knowledge, Sinclair (strategic acquirer, bid $7, owns 9.9%), Gabelli (activist, 5.7%, running a proxy contest), the Scripps family ($7.95M deployed), is buying while the broad market sells.

They may not be making the same trade as I've described so far, but they're all independently concluding that the assets are mispriced at these levels.

### Margin of Error

The leverage cuts both ways. Equity at 9.2% of enterprise value means a 20% EBITDA improvement could triple the stock. It also means a 15% decline could zero it. That amplification is what makes this a speculative play, but it's also what creates the asymmetry.

The margin of safety here isn't in the balance sheet. It's in the trade structure.

| Parameter | Level | Rationale |
|---|---|---|
| Entry | $3.50-$4.50 | Inside the insider buying range, near the CEO's $3.69 purchase |
| Exit | $6.50-$7.00 (sell half), trail rest | Into Q3/Q4 2026 earnings when political revenue peaks; recover cost basis first |
| Duration | 6-12 months | Short enough that refinancing wall, secular decline, and preferred compounding don't compound |
| Sizing | 1-2% of portfolio | Catalyst trade, not a conviction hold |
| Stop | Below $2.50 | If the thesis breaks, cut and move on |

The permanent loss probability over a 5-year hold is 15-25%. Over a 12-month political cycle trade, it's meaningfully lower. The midterm revenue is structural, the company survives through 2028 per the credit market, and the entry is inside the range where insiders are deploying real money.

That doesn't make it safe. It makes it an informed bet with defined parameters, asymmetric upside, and a clear exit signal.

### Conclusion

I initiated this post with a simple claim. None of the operational story matters if the capital structure cannot survive long enough for it to play out. Having now walked through the debt stack, the bond market's repricing, the covenant headroom, the preferred's quiet compounding, and the cash flow arithmetic of a midterm year, I think the answer to conclude on, is that it can. Barely, conditionally, and with no room for error. But it can.

That's an unsatisfying conclusion but an honest one, and deliberately so. Scripps is not a company I can point to and say with any conviction that it's worth such-and-such.

The range of outcomes is too broad, the leverage too extreme, and the margin of safety too absent for that kind of certainty. What I _can_ say is that the market is pricing the equity on the worst quarter of the worst year of a constitutionally cyclical business, while the people closest to the assets: a strategic acquirer, an activist with a proxy contest, and a founding family that turned down a 76% premium, are all buying at these levels.

When the bond market and the equity market disagree on solvency, one of them is wrong. History would suggest to me that it's usually the equity.

The shorter horizon I envisioned for a near-term play dramatically reduces the number of things that can go wrong, but it also reduces the number of things that can go right. It can't factor in the spectrum optionality, the transformation plan, or the long-term survival of the company. You're getting paid specifically for the market's tendency to underprice the magnitude and margin profile of political revenue in broadcaster stocks during off-peak periods, and then to reprice it as the numbers come through.

The edge in this trade, if it exists, is not analytical at all; everyone can see the upcoming political cycle. The edge, in my view, is behavioural. It's the willingness to buy a stock with CCC-rated bonds, $2.7B of debt, in a structurally declining industry, hold it through volatile months, and sell into strength before the narrative turns. Most, I believe, aren't willing to do that. The ones who can are compensated for the discomfort, not the insight.

Whether that's enough to act on is a question of temperament and sizing, not of analysis. I've done my best to work out the numbers as honestly as I can, including the ones that argue against me. The rest is a matter of watching the midterm cycle play out and having the discipline to leave when the cash has spoken, one way or the other.