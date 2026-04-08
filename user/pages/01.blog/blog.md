---
title:
blog_url: blog
menu: Blog

sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 7
    pagination: true

feed:
    title: 'Gregory Kelleher'
    description: 'Posts on programming, infrastructure, and assorted experiments by Gregory Kelleher.'
    limit: 10

pagination: true
---

