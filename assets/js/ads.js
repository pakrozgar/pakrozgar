/* ============================================================
   PakRozgar - ADVERTISEMENT SETTINGS
   *** YEHI WAHID FILE HAI JAHAN ADS LAGANE HAIN ***

   Google AdSense YA Adsterra - dono ke codes yahan paste karein.

   Adsterra dashboard -> "Websites" -> apni website -> ad unit banayein:
   - BANNERS (300x250, 728x90, 160x600...): unka code neeche "slots"
     mein paste karein - jahan chahiye (header, infeed, sidebar,
     inarticle, belowcontent)
   - SOCIAL BAR ya POPUNDER: unka code "sitewide" mein paste karein -
     ye poori site par khud chalenge, koi jagah nahi gherenge

   STEP 1: Ad network (Adsterra / AdSense) se ad unit ka code copy karein
   STEP 2: Neeche code: "" ke darmiyan poora code paste kar dein
   STEP 3: File save karke git commit + push kar dein (daily jobs wali tarah)
   Bas! Ads site par live ho jayenge.

   Jab tak code paste nahi karte, wahan khubsurat "Advertisement"
   placeholder nazar aayega taake aapko pata chale ad kahan lagega.

   Slots:
   - header        : navigation ke neeche (sab se zyada views)
   - infeed        : job cards ke darmiyan (homepage)
   - sidebar       : desktop par side mein chipka rehta hai
   - inarticle     : job detail page ke andar (sab se zyada earning)
   - belowcontent  : page ke neeche
   ============================================================ */

const AD_SETTINGS = {
  // AdSense publisher ID (ca-pub-XXXXXXXXXXXXXXXX) - sirf AdSense ke liye
  publisherId: "",

  // Site-wide scripts: Adsterra Social Bar / Popunder ka POORA <script> code yahan
  sitewide: "",

  // Har slot mein apna ad code paste karein (AdSense YA Adsterra banner):
  slots: {
    header:       "",
    infeed:       "",
    sidebar:      "",
    inarticle:    "",
    belowcontent: ""
  }
};

/* ---- neeche ka code na chedein ---- */

/* AdSense library ek dafa load karein (sirf jab AdSense code ho) */
function ensureAdsenseLib() {
  if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  if (AD_SETTINGS.publisherId) s.setAttribute("data-ad-client", AD_SETTINGS.publisherId);
  document.head.appendChild(s);
}

/* Adsterra jaisi script-based codes ko "sandbox" iframe mein chalate hain.
   Wajah: inke <script> tags document.write istemal karte hain - agar seedha
   page mein lagayein to poora page saaf ho sakta hai. Iframe mein ye mehfooz
   chalte hain aur site ka design bhi kharab nahi hota. */
function injectSandbox(container, code) {
  const f = document.createElement("iframe");
  f.setAttribute("title", "Advertisement");
  f.setAttribute("scrolling", "no");
  f.style.cssText = "border:0;width:100%;height:250px;display:block;overflow:hidden";
  container.appendChild(f);
  try {
    const doc = f.contentDocument || (f.contentWindow && f.contentWindow.document);
    doc.open();
    doc.write('<!DOCTYPE html><html><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1"></head>' +
      '<body style="margin:0;padding:0">' + code + '</body></html>');
    doc.close();
  } catch (e) { /* ad network error - page mehfooz rahega */ }
  f.addEventListener("load", function () {
    try {
      const h = f.contentDocument.body.scrollHeight;
      if (h && h > 40) f.style.height = h + "px";
    } catch (e) {}
  });
}

/* Slot mein ad lagana: AdSense seedha, baqi networks sandbox mein */
function injectAdCode(container, code) {
  if (/adsbygoogle|ca-pub/i.test(code)) {
    ensureAdsenseLib();
    container.innerHTML = code;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  } else {
    injectSandbox(container, code);
  }
}

/* Site-wide scripts (Social Bar / Popunder): inhein page-level chalna
   hota hai, is liye seedha body mein lagate hain (sandbox mein NAHI) */
function injectSitewide(code) {
  const holder = document.createElement("div");
  holder.style.display = "none";
  const tpl = document.createElement("template");
  tpl.innerHTML = code.trim();
  Array.prototype.forEach.call(tpl.content.childNodes, function (node) {
    if (node.tagName === "SCRIPT") {
      const s = document.createElement("script");
      Array.prototype.forEach.call(node.attributes, function (a) {
        s.setAttribute(a.name, a.value);
      });
      s.text = node.textContent;
      holder.appendChild(s);
    } else {
      holder.appendChild(node.cloneNode(true));
    }
  });
  document.body.appendChild(holder);
}

function renderAd(slotName) {
  const code = (AD_SETTINGS.slots && AD_SETTINGS.slots[slotName]) || "";
  if (code.trim()) {
    const d = document.createElement("div");
    d.className = "ad-slot ad-live";
    injectAdCode(d, code);
    return d;
  }
  const d = document.createElement("div");
  d.className = "ad-slot ad-placeholder";
  d.innerHTML = "<span>Advertisement</span><small>Ad slot: " + slotName + " - ads.js mein code paste karein</small>";
  return d;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-ad]").forEach(function (el) {
    el.replaceWith(renderAd(el.getAttribute("data-ad")));
  });
  if ((AD_SETTINGS.sitewide || "").trim()) {
    injectSitewide(AD_SETTINGS.sitewide);
  }
});
