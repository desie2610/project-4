(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S=document.querySelector(".header__form"),B=document.querySelector("#search"),P=document.querySelector("#country");let i="all",d="US";loadEvents(0,i,d);S.addEventListener("submit",async n=>{n.preventDefault(),i=B.value.trim()||"all",d=P.value.trim().toUpperCase()||"US",await loadEvents(0,i,d)});const q="tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L",r=document.getElementById("events"),h=document.getElementById("pagination");let L=0;async function b(n=0,o,s){r.innerHTML="Завантаження...",L=n;try{const e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${n}&countryCode=${s}&keyword=${o}&apikey=${q}`)).json();if(r.innerHTML="",!e._embedded){r.innerHTML=`
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;return}e._embedded.events.forEach(t=>{var u,m,v,p,f,y,g;const c=document.createElement("div");c.className="event-item";const M=(m=(u=t.images)==null?void 0:u.find(C=>C.ratio==="4_3"))==null?void 0:m.url;(p=(v=t.images)==null?void 0:v[0])==null||p.url;const l=t.name,E=t.dates.start.localDate,$=((g=(y=(f=t._embedded)==null?void 0:f.venues)==null?void 0:y[0])==null?void 0:g.name)||"Не знайдено місце проведення";c.innerHTML=`
      <div class="box">
        <div class="event-img-decorate">
          <div class="event-img-box">
            <img class="event-img" src="${M}" alt="${l}">
          </div>
        </div>

        <div class="event-name">${l}</div>
        <div class="event-date">${E}</div>

        <div class="event-place-box">
          <div class="vector-place"></div>
          <div class="event-place">${$}</div>
        </div>
         </div>
      `,r.appendChild(c)}),x(e.page.totalPages)}catch{r.innerHTML=`
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `}}function x(n){h.innerHTML="";const o=5;for(let s=0;s<n&&s<o;s++){const a=document.createElement("button");a.className="page-btn",a.textContent=s+1,s===L&&a.classList.add("active"),a.onclick=()=>b(s),h.appendChild(a)}}b();(()=>{const n={openModalBtn:document.querySelector("[data-modal-events-open]"),closeModalBtn:document.querySelector("[data-modal-events-close]"),modal:document.querySelector("[data-modal-events]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
