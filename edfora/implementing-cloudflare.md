---
title : Cloudflare
description : Case for using cloudflare
tags : []
---

# Cloudflare

[[toc]]

!!! success Major features
!!!

### CDN
1. Multiple CDN locations availability in - __Bengaluru, Chennai, Hyderabad, Kolkata, Mumbai, Nagpur, New Delhi__
2. Unlimited bandwidth

### Analytics
Additional layer of analytics - get bandwidth usage data, user location e.t.c

### Firewall
1. Can add firewall events (JS Challenge/ CLose connection) on specified uri's
2. Security > DDoS mitigation

### Caching
1. Selectively purge cache
2. Caching level (query siring/no query string)
3. Browser cache settings (TTL)
4. Always online


### Workers
Intercept http requests, based on routes

### Page rules
1. Always https
2. Origin `cache-control`
3. Browser integrity check

### Speed > File Size Optimization
1.  Image resizing (convert images to WebP format, on demand)
2.  Brotli compression vs gzip [(source)](https://medium.com/oyotech/how-brotli-compression-gave-us-37-latency-improvement-14d41e50fee4)
   1. Javascript files compressed with Brotli are 14% smaller than gzip.
   2. HTML files are 21% smaller than gzip.
   3. CSS files are 17% smaller than gzip.
3.  Rocket loader (improves paint times by asynchronously loading your Javascripts)

### Cloudflare apps
1.  welcome bar
2.  flash cards
3.  countdown timers