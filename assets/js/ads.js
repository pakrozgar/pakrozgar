/* ============================================================
   PakRozgar - ADVERTISEMENT SETTINGS
   *** YEHI WAHID FILE HAI JAHAN ADS LAGANE HAIN ***

   STEP 1: Google AdSense se approve ho jayein (adsense.google.com)
   STEP 2: AdSense se har slot ka ad code copy karein
   STEP 3: Neeche har slot ke code: "" mein apna ad code paste kar dein
   STEP 4: File save karein aur hosting par upload kar dein. Bas!

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
  // Apna AdSense publisher ID yahan likhein (ca-pub-XXXXXXXXXXXXXXXX)
  publisherId: "",

  // Har slot mein apna AdSense ad code paste karein:
  slots: {
    header:       "",
    infeed:       "",
    sidebar:      "",
    inarticle:    "",
    belowcontent: ""
  }
};

/* ---- neeche ka code na chedein ---- */
function renderAd(slotName) {
  const code = (AD_SETTINGS.slots && AD_SETTINGS.slots[slotName]) || "";
  if (code.trim()) {
    const d = document.createElement("div");
    d.className = "ad-slot ad-live";
    d.innerHTML = code;
    // AdSense ads ko push karna zaroori hai
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
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
});
