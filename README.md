# PakRozgar - Pakistan Job Portal Website

**Rozgar ki khabar, sab se pehle.**

A complete, mobile-first job portal website ready to deploy on any web hosting.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: search, categories, latest jobs |
| `job.html` | Job detail page (opens as job.html?id=3) |
| `admin.html` | **Add new job posts** - fill form, copy code, paste in jobs.js |
| `about.html`, `contact.html`, `privacy.html`, `disclaimer.html` | Required pages (Google AdSense approval needs these) |
| `assets/js/jobs.js` | **All job posts live here** - add 1-3 daily |
| `assets/js/ads.js` | **AdSense codes go here - ONE file only** |
| `assets/js/app.js` | Search, filters, rendering |
| `assets/css/style.css` | Full design |
| `sitemap.xml` | For Google Search Console |

## Daily Posting (2 minutes)

**Option A - Admin form (easiest):**
1. Open `admin.html` in browser
2. Fill the job form → click **Generate** → **Copy Code**
3. Open `assets/js/jobs.js`, paste at the top of the list (after `const JOBS = [`), set the next `id`
4. Save, upload `jobs.js` to hosting. Done!

**Option B - WhatsApp:** Just send the job ad text/screenshot on WhatsApp - Muse will add it.

## Adding Ads (Earning)

1. Get approved at **adsense.google.com** (needs ~20-30 posts + the About/Contact/Privacy pages - all included)
2. Copy your ad codes from AdSense
3. Open `assets/js/ads.js` - paste each code in its slot (`header`, `infeed`, `sidebar`, `inarticle`, `belowcontent`)
4. Upload `ads.js`. Ads appear across the whole site automatically.

Ad positions: below navigation (header) | between job cards (in-feed) | sticky sidebar | inside job article (highest earning) | below content.

## Deploy (go live)

**Cheapest path (~Rs. 500/month):**
1. Buy hosting + domain at Hostinger (or any host)
2. Upload ALL files to `public_html/` (keep folder structure)
3. Done - site is live. No database needed!

**Then:**
- Submit `sitemap.xml` in Google Search Console
- Share new posts on Facebook/WhatsApp for initial traffic
- Apply for AdSense after 20-30 posts

## Earning tips
- Post daily at the same time (Google loves fresh content)
- Always include: last date, qualification, how to apply (these rank on Google)
- Share each post on Facebook job groups
- In-article ad slot earns the most - never remove it
