/* PakRozgar - rendering engine */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

const CATS = ["All", "Government", "Private", "Bank", "Teaching", "Health", "Police", "Army", "IT", "WAPDA"];

function fmtDate(d) {
  if (!d) return "-";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
function daysLeft(lastDate) {
  const diff = Math.ceil((new Date(lastDate + "T00:00:00") - new Date()) / 864e5);
  return diff;
}
function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

function jobCard(j) {
  const dl = daysLeft(j.lastDate);
  const urgent = dl <= 10 ? `<span class="tag hot">Last date: ${fmtDate(j.lastDate)}</span>` : `<span class="last-date">Last date: ${fmtDate(j.lastDate)}</span>`;
  return `<article class="job-card">
    <div class="job-badge">${esc(j.department.charAt(0))}</div>
    <div class="job-info">
      <h3><a href="job.html?id=${j.id}">${esc(j.title)}</a></h3>
      <div>
        <span class="tag">${esc(j.category)}</span>
        ${j.featured ? '<span class="tag hot">Featured</span>' : ""}
        <span class="tag">${esc(j.city)}</span>
      </div>
      <div class="job-meta">
        <span><b>Department:</b> ${esc(j.department)}</span>
        <span><b>Qualification:</b> ${esc(j.qualification)}</span>
        <span><b>Vacancies:</b> ${esc(j.vacancies)}</span>
      </div>
      <p class="job-desc">${esc(j.shortDesc)}</p>
      <div class="job-foot">${urgent}<a class="btn" href="job.html?id=${j.id}">View Details</a></div>
    </div>
  </article>`;
}

function renderChips(active, onPick) {
  const box = $("#chips");
  box.innerHTML = CATS.map(c =>
    `<button class="chip${c === active ? " active" : ""}" data-cat="${c}">${c}</button>`).join("");
  $$(".chip", box).forEach(b => b.onclick = () => onPick(b.dataset.cat));
}

function renderJobs(list, targetId, adAfter) {
  const box = $("#" + targetId);
  if (!list.length) { box.innerHTML = '<div class="empty">No jobs found. Try another search.</div>'; return; }
  let html = "";
  list.forEach((j, i) => {
    html += jobCard(j);
    if (adAfter && i === adAfter - 1) html += '<div data-ad="infeed"></div>';
  });
  box.innerHTML = html;
  // re-run ad placeholders for injected slots
  $$('[data-ad]', box).forEach(el => el.replaceWith(renderAd(el.getAttribute("data-ad"))));
}

function getFiltered(cat, q) {
  q = (q || "").toLowerCase();
  return JOBS.filter(j => {
    const okCat = cat === "All" || j.category === cat || j.subcategory === cat;
    const okQ = !q || (j.title + " " + j.department + " " + j.city + " " + j.qualification).toLowerCase().includes(q);
    return okCat && okQ;
  }).sort((a, b) => b.id - a.id);
}

/* ---------- home page ---------- */
function initHome() {
  let cat = "All", q = "";
  const apply = () => renderJobs(getFiltered(cat, q), "job-list", 3);
  const bindChips = () => renderChips(cat, c => { cat = c; bindChips(); apply(); });
  bindChips();
  $("#search-input").addEventListener("input", e => { q = e.target.value; apply(); });
  $("#search-btn").onclick = () => { q = $("#search-input").value; apply(); };
  apply();
  // sidebar latest
  const latest = [...JOBS].sort((a, b) => b.id - a.id).slice(0, 5);
  $("#latest-list").innerHTML = latest.map(j =>
    `<li><a href="job.html?id=${j.id}">${esc(j.title)}</a><br><small>${fmtDate(j.postedDate)}</small></li>`).join("");
}

/* ---------- job detail page ---------- */
function initDetail() {
  const id = parseInt(new URLSearchParams(location.search).get("id"));
  const j = JOBS.find(x => x.id === id) || [...JOBS].sort((a, b) => b.id - a.id)[0];
  document.title = j.title + " - PakRozgar";
  const dl = daysLeft(j.lastDate);
  $("#detail").innerHTML = `
    <div class="job-detail">
      <div><span class="tag">${esc(j.category)}</span><span class="tag">${esc(j.city)}, ${esc(j.province)}</span>${j.featured ? '<span class="tag hot">Featured</span>' : ""}</div>
      <h1>${esc(j.title)}</h1>
      <p style="color:#666;font-size:14px">Posted: ${fmtDate(j.postedDate)} &nbsp;|&nbsp; Source: ${esc(j.source)} &nbsp;|&nbsp; <b style="color:${dl <= 10 ? "#c0392b" : "#0b6b3a"}">Last date: ${fmtDate(j.lastDate)}${dl >= 0 ? ` (${dl} days left)` : " (closed)"}</b></p>
      <div data-ad="inarticle"></div>
      <table class="detail-table">
        <tr><td>Department</td><td>${esc(j.department)}</td></tr>
        <tr><td>Location</td><td>${esc(j.city)}, ${esc(j.province)}</td></tr>
        <tr><td>Qualification</td><td>${esc(j.qualification)}</td></tr>
        <tr><td>Experience</td><td>${esc(j.experience)}</td></tr>
        <tr><td>Age Limit</td><td>${esc(j.ageLimit)}</td></tr>
        <tr><td>Vacancies</td><td>${esc(j.vacancies)}</td></tr>
        <tr><td>Salary / Scale</td><td>${esc(j.salary)}</td></tr>
        <tr><td>Last Date</td><td><b>${fmtDate(j.lastDate)}</b></td></tr>
      </table>
      <div class="apply-box"><h3>How to Apply</h3><ol>${j.howToApply.map(s => `<li>${esc(s)}</li>`).join("")}</ol></div>
      ${j.description}
      <div data-ad="belowcontent"></div>
      <p style="margin-top:16px"><a class="btn" href="index.html">&larr; Back to all jobs</a></p>
    </div>`;
  $$('#detail [data-ad]').forEach(el => el.replaceWith(renderAd(el.getAttribute("data-ad"))));
  // related
  const rel = JOBS.filter(x => x.id !== j.id && (x.category === j.category || x.city === j.city)).slice(0, 3);
  $("#related-list").innerHTML = (rel.length ? rel : [...JOBS].sort((a, b) => b.id - a.id).slice(0, 3))
    .map(x => `<div style="margin-bottom:10px"><a href="job.html?id=${x.id}"><b>${esc(x.title)}</b></a><br><small>${esc(x.department)} - ${fmtDate(x.lastDate)}</small></div>`).join("");
  // SEO: JSON-LD JobPosting
  const ld = {
    "@context": "https://schema.org", "@type": "JobPosting",
    "title": j.title, "description": j.shortDesc,
    "datePosted": j.postedDate, "validThrough": j.lastDate,
    "employmentType": "FULL_TIME",
    "hiringOrganization": { "@type": "Organization", "name": j.department },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": j.city, "addressCountry": "PK" } }
  };
  const s = document.createElement("script"); s.type = "application/ld+json";
  s.textContent = JSON.stringify(ld); document.head.appendChild(s);
}

document.addEventListener("DOMContentLoaded", function () {
  if ($("#job-list")) initHome();
  if ($("#detail")) initDetail();
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
});
