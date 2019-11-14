
### Cloudflare
1. CDN locations + unlimited bandwidth
   1. Bengaluru
   2. Chennai
   3. Hyderabad
   4. Kolkata
   5. Mumbai
   6. Nagpur
   7. New Delhi
2. Analytics (additional layer of analytics - bandwidth usage, location)
3. Firewall (Can add firewall events (JS Challenge/ CLose connection) on specified uri's)
4. Security > DDoS mitigation
5. Caching
   1. Selectively purge cache
   2. Caching level (query siring/no query string)
   3. Browser cache settings (TTL)
   4. Always online
6. Workers <Badge text="Very powerful" type="success"/>
   1. Intercept http requests, based on routes
7. Page rules
   1. Always https
   2. Origin `cache-control`
   3. Browser integrity check
8. Speed > File Size Optimization
   1. Image resizing (convert images to WebP format, on demand)
   2. Brotli compression vs gzip [(source)](https://medium.com/oyotech/how-brotli-compression-gave-us-37-latency-improvement-14d41e50fee4)
      1. Javascript files compressed with Brotli are 14% smaller than gzip.
      2. HTML files are 21% smaller than gzip.
      3. CSS files are 17% smaller than gzip.
   3. Rocket loader (improves paint times by asynchronously loading your Javascripts)
9. Cloudflare apps
   1. welcome bar
   2. flash cards
   3. countdown timers