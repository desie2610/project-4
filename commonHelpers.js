(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-events-open]"),closeModalBtn:document.querySelector("[data-modal-events-close]"),modal:document.querySelector("[data-modal-events]")};document.getElementById("events").addEventListener("click",c=>{c.target.closest("[data-modal-events-open]")&&o()}),e.closeModalBtn.addEventListener("click",o),e.modal.addEventListener("click",c=>{c.target===e.modal&&o()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&!e.modal.classList.contains("is-hidden")&&o()});function o(){e.modal.classList.toggle("is-hidden")}})();const L=document.querySelector(".modal__picture"),b=document.querySelector(".modal__pctr"),E=document.querySelector("#info"),S=document.querySelector("#date"),q=document.querySelector("#time"),C=document.querySelector("#city"),_=document.querySelector("#place"),x=document.querySelector("#name"),f=document.querySelector("#price"),M=document.querySelector(".modal__btn");async function O(e){if(L.src=e.images[0].url,b.src=e.images[0].url,E.textContent=e.description||"Немає інформації",x.textContent=e.name,S.textContent=e.dates.start.localDate,q.textContent=e.dates.start.localTime||"Час не вказано",C.textContent=e._embedded.venues[0].city.name||"Місто не вказано",_.textContent=e._embedded.venues[0].name||"Не знайдено місце проведення",M.href=e.url,e.priceRanges&&e.priceRanges.length>0){const{min:o,max:c,currency:s}=e.priceRanges[0];f.textContent=`Standart ${o} - ${c} ${s}`}else f.textContent="Деталі на Ticketmaster"}const $="tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L",i=document.getElementById("events"),y=document.getElementById("pagination");let g=0;async function m(e=0,o="",c="US"){i.innerHTML="Завантаження...",g=e;try{const s=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${e}&countryCode=${c}&keyword=${o}&apikey=${$}`,n=await(await fetch(s)).json();if(i.innerHTML="",!n._embedded){i.innerHTML=`
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;return}const a=n._embedded.events;for(let d=0;d<a.length;d++){const r=a[d],l=document.createElement("div");let u="";r.images&&r.images.length>0&&(u=r.images[0].url);let v="Не знайдено місце проведення";r._embedded&&r._embedded.venues&&(v=r._embedded.venues[0].name);const p=r.name,h=r.dates.start.localDate;l.innerHTML=`
        <div class="event-item" data-modal-events-open>
          <div class="event-img-decorate">
            <div class="event-img-box">
              <img class="event-img" src="${u}" alt="${p}">
            </div>
          </div>

          <div class="event-name">${p}</div>
          <div class="event-date">${h}</div>

          <div class="event-place-box">
            <div class="vector-place"></div>
            <div class="event-place">${v}</div>
          </div>
        </div>
      `,i.appendChild(l),l.addEventListener("click",()=>{O(r)})}T(n.page.totalPages,o,c)}catch{i.innerHTML=`
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `}}function T(e,o,c){y.innerHTML="";const s=5;for(let t=0;t<e&&t<s;t++){const n=document.createElement("button");n.className="page-btn",n.textContent=t+1,t===g&&n.classList.add("active"),n.onclick=function(){m(t,o,c)},y.appendChild(n)}}m();const P=document.querySelector(".header__form"),k=document.querySelector("#search"),B=document.querySelector("#country");P.addEventListener("submit",async e=>{e.preventDefault();let o=k.value.trim()||"",c=B.value.trim().toUpperCase()||"US";await m(0,o,c)});
//# sourceMappingURL=commonHelpers.js.map
