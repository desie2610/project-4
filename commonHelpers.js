(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const h=document.querySelector(".header__form"),L=document.querySelector("#search"),b=document.querySelector("#country");let i="all",d="US";loadEvents(0,i,d);h.addEventListener("submit",async s=>{s.preventDefault(),i=L.value.trim()||"all",d=b.value.trim().toUpperCase()||"US",await loadEvents(0,i,d)});const M="tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L",r=document.getElementById("events"),p=document.getElementById("pagination");let f=0;async function y(s=0){r.innerHTML="Завантаження...",f=s;try{const a=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${s}&countryCode=US&apikey=${M}`,n=await(await fetch(a)).json();if(r.innerHTML="",!n._embedded){r.innerHTML=`
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;return}const e=n._embedded.events;for(let t=0;t<e.length;t++){const o=e[t],l=document.createElement("div");let u="";o.images&&o.images.length>0&&(u=o.images[0].url);let m="Не знайдено місце проведення";o._embedded&&o._embedded.venues&&(m=o._embedded.venues[0].name);const v=o.name,g=o.dates.start.localDate;l.innerHTML=`
        <div class="event-item" data-modal-events-open>
          <div class="event-img-decorate">
            <div class="event-img-box">
              <img class="event-img" src="${u}" alt="${v}">
            </div>
          </div>

          <div class="event-name">${v}</div>
          <div class="event-date">${g}</div>

          <div class="event-place-box">
            <div class="vector-place"></div>
            <div class="event-place">${m}</div>
          </div>
        </div>
      `,r.appendChild(l)}E(n.page.totalPages)}catch{r.innerHTML=`
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `}}function E(s){p.innerHTML="";const a=5;for(let c=0;c<s&&c<a;c++){const n=document.createElement("button");n.className="page-btn",n.textContent=c+1,c===f&&n.classList.add("active"),n.onclick=function(){y(c)},p.appendChild(n)}}y();(()=>{const s={openModalBtn:document.querySelector("[data-modal-events-open]"),closeModalBtn:document.querySelector("[data-modal-events-close]"),modal:document.querySelector("[data-modal-events]")};s.openModalBtn.addEventListener("click",a),s.closeModalBtn.addEventListener("click",a);function a(){s.modal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
