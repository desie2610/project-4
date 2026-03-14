(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const h=document.querySelector(".header__form"),L=document.querySelector("#search"),M=document.querySelector("#country");let r="all",i="US";loadEvents(0,r,i);h.addEventListener("submit",async n=>{n.preventDefault(),r=L.value.trim()||"all",i=M.value.trim().toUpperCase()||"US",await loadEvents(0,r,i)});const b="tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L",d=document.getElementById("events"),p=document.getElementById("pagination");let f=0;async function y(n=0){d.innerHTML="Завантаження...",f=n;try{const o=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${n}&countryCode=US&apikey=${b}`,s=await(await fetch(o)).json();if(d.innerHTML="",!s._embedded){d.innerHTML=`
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;return}const e=s._embedded.events;for(let t=0;t<e.length;t++){const a=e[t],l=document.createElement("div");let m="";a.images&&a.images.length>0&&(m=a.images[0].url);let u="Не знайдено місце проведення";a._embedded&&a._embedded.venues&&(u=a._embedded.venues[0].name);const v=a.name,g=a.dates.start.localDate;l.innerHTML=`
        <div class="event-item" data-modal-events-open>
          <div class="event-img-decorate">
            <div class="event-img-box">
              <img class="event-img" src="${m}" alt="${v}">
            </div>
          </div>

          <div class="event-name">${v}</div>
          <div class="event-date">${g}</div>

          <div class="event-place-box">
            <div class="vector-place"></div>
            <div class="event-place">${u}</div>
          </div>
        </div>
      `,d.appendChild(l)}E(s.page.totalPages)}catch{d.innerHTML=`
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `}}function E(n){p.innerHTML="";const o=5;for(let c=0;c<n&&c<o;c++){const s=document.createElement("button");s.className="page-btn",s.textContent=c+1,c===f&&s.classList.add("active"),s.onclick=function(){y(c)},p.appendChild(s)}}y();(()=>{const n={openModalBtn:document.querySelector("[data-modal-events-open]"),closeModalBtn:document.querySelector("[data-modal-events-close]"),modal:document.querySelector("[data-modal-events]")};n.openModalBtn.addEventListener("click",openModal),n.closeModalBtn.addEventListener("click",closeModal),n.modal.addEventListener("click",o=>{o.target===n.modal&&closeModal()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&closeModal()})})();
//# sourceMappingURL=commonHelpers.js.map
