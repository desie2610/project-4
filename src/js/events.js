const API_KEY = "tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L";
const eventsContainer = document.getElementById("events");
const paginationContainer = document.getElementById("pagination");

let currentPage = 0;

async function loadEvents(page = 0) {
  eventsContainer.innerHTML = "Завантаження...";
  currentPage = page;

  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${page}&countryCode=US&apikey=${API_KEY}`
    );

    const data = await response.json();
    eventsContainer.innerHTML = "";

    if (!data._embedded) {
      eventsContainer.innerHTML = `
        <div class="event-empty">
          <p class="event-empty-text">Подій не знайдено</p>
        </div>
      `;
      return;
    }

    data._embedded.events.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-item";

      const image =
        event.images?.find(img => img.ratio === "4_3")?.url 
        event.images?.[0]?.url 
        "";

      const title = event.name;
      const date = event.dates.start.localDate;
      const venue = event._embedded?.venues?.[0]?.name || "Не знайдено місце проведення";

      card.innerHTML = `
      <div class="box">
        <div class="event-img-decorate">
          <div class="event-img-box">
            <img class="event-img" src="${image}" alt="${title}">
          </div>
        </div>

        <div class="event-name">${title}</div>
        <div class="event-date">${date}</div>

        <div class="event-place-box">
          <div class="vector-place"></div>
          <div class="event-place">${venue}</div>
        </div>
         </div>
      `;

      eventsContainer.appendChild(card);
    });

    renderPagination(data.page.totalPages);

  } catch (error) {
    eventsContainer.innerHTML = `
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `;
  }
}

function renderPagination(totalPages) {
  paginationContainer.innerHTML = "";

  const maxButtons = 5;

  for (let i = 0; i < totalPages && i < maxButtons; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.textContent = i + 1;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => loadEvents(i);
    paginationContainer.appendChild(btn);
  }
}

loadEvents();