(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const L="tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L",d=document.getElementById("events"),f=document.getElementById("pagination");let y=0;async function l(o=0,n="",s="US"){d.innerHTML="Завантаження...",y=o;try{const a=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${o}&countryCode=${s}&keyword=${n}&apikey=${L}`,t=await(await fetch(a)).json();if(d.innerHTML="",!t._embedded){d.innerHTML=`
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;return}const r=t._embedded.events;for(let i=0;i<r.length;i++){const c=r[i],m=document.createElement("div");let u="";c.images&&c.images.length>0&&(u=c.images[0].url);let v="Не знайдено місце проведення";c._embedded&&c._embedded.venues&&(v=c._embedded.venues[0].name);const p=c.name,g=c.dates.start.localDate;m.innerHTML=`
        <div class="event-item" data-modal-events-open>
          <div class="event-img-decorate">
            <div class="event-img-box">
              <img class="event-img" src="${u}" alt="${p}">
            </div>
          </div>

          <div class="event-name">${p}</div>
          <div class="event-date">${g}</div>

          <div class="event-place-box">
            <div class="vector-place"></div>
            <div class="event-place">${v}</div>
          </div>
        </div>
      `,d.appendChild(m)}h(t.page.totalPages,n,s)}catch{d.innerHTML=`
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `}}function h(o,n,s){f.innerHTML="";const a=5;for(let e=0;e<o&&e<a;e++){const t=document.createElement("button");t.className="page-btn",t.textContent=e+1,e===y&&t.classList.add("active"),t.onclick=function(){l(e,n,s)},f.appendChild(t)}}l();const M=document.querySelector(".header__form"),b=document.querySelector("#search"),E=document.querySelector("#country");M.addEventListener("submit",async o=>{o.preventDefault();let n=b.value.trim()||"",s=E.value.trim().toUpperCase()||"US";await l(0,n,s)});(()=>{const o={openModalBtn:document.querySelector("[data-modal-events-open]"),closeModalBtn:document.querySelector("[data-modal-events-close]"),modal:document.querySelector("[data-modal-events]")};o.openModalBtn.addEventListener("click",openModal),o.closeModalBtn.addEventListener("click",closeModal),o.modal.addEventListener("click",n=>{n.target===o.modal&&closeModal()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&closeModal()})})();
//# sourceMappingURL=commonHelpers.js.map
