(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const b="tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L",c=document.getElementById("events"),f=document.getElementById("pagination");let g=0;async function y(i=0){c.innerHTML="Завантаження...",g=i;try{const s=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${i}&countryCode=US&apikey=${b}`)).json();if(c.innerHTML="",!s._embedded){c.innerHTML=`
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;return}s._embedded.events.forEach(t=>{var r,d,l,m,u,v,p;const e=document.createElement("div");e.className="event-item";const n=(d=(r=t.images)==null?void 0:r.find(M=>M.ratio==="4_3"))==null?void 0:d.url;(m=(l=t.images)==null?void 0:l[0])==null||m.url;const a=t.name,L=t.dates.start.localDate,h=((p=(v=(u=t._embedded)==null?void 0:u.venues)==null?void 0:v[0])==null?void 0:p.name)||"Не знайдено місце проведення";e.innerHTML=`
      <div class="box">
        <div class="event-img-decorate">
          <div class="event-img-box">
            <img class="event-img" src="${n}" alt="${a}">
          </div>
        </div>

        <div class="event-name">${a}</div>
        <div class="event-date">${L}</div>

        <div class="event-place-box">
          <div class="vector-place"></div>
          <div class="event-place">${h}</div>
        </div>
         </div>
      `,c.appendChild(e)}),E(s.page.totalPages)}catch{c.innerHTML=`
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `}}function E(i){f.innerHTML="";const o=5;for(let s=0;s<i&&s<o;s++){const t=document.createElement("button");t.className="page-btn",t.textContent=s+1,s===g&&t.classList.add("active"),t.onclick=()=>y(s),f.appendChild(t)}}y();(()=>{const i={openModalBtn:document.querySelector("[data-modal-events-open]"),closeModalBtn:document.querySelector("[data-modal-events-close]"),modal:document.querySelector("[data-modal-events]")};i.openModalBtn.addEventListener("click",o),i.closeModalBtn.addEventListener("click",o);function o(){i.modal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
