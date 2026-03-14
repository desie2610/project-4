const API_KEY = "tkmMLNmH6ORb9UhzGdYC2YZyBTGuvM6L";

const eventsContainer = document.getElementById("events");
const paginationContainer = document.getElementById("pagination");

let currentPage = 0;

export async function loadEvents(page = 0, searchKeyword = "", countryCode = "US") {

  eventsContainer.innerHTML = "Завантаження...";
  currentPage = page;

  try {

    const url =  `https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${page}&countryCode=${countryCode}&keyword=${searchKeyword}&apikey=${API_KEY}`

    const response = await fetch(url);
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

    const events = data._embedded.events;

    for (let i = 0; i < events.length; i++) {

      const event = events[i];

      const card = document.createElement("div");

      let image = "";

      if (event.images && event.images.length > 0) {
        image = event.images[0].url;
      }

      let venue = "Не знайдено місце проведення";

      if (event._embedded && event._embedded.venues) {
        venue = event._embedded.venues[0].name;
      }

      const title = event.name;
      const date = event.dates.start.localDate;

      card.innerHTML = `
        <div class="event-item" data-modal-events-open>
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

    }

    renderPagination(data.page.totalPages, searchKeyword, countryCode);

  } catch (error) {

    eventsContainer.innerHTML = `
      <div class="event-empty">
        <p class="event-empty-text">Помилка завантаження</p>
      </div>
    `;

  }

}

function renderPagination(totalPages, searchKeyword, countryCode) {

  paginationContainer.innerHTML = "";

  const maxButtons = 5;

  for (let i = 0; i < totalPages && i < maxButtons; i++) {

    const btn = document.createElement("button");

    btn.className = "page-btn";
    btn.textContent = i + 1;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = function () {
      loadEvents(i, searchKeyword, countryCode);
    };

    paginationContainer.appendChild(btn);

  }

}

loadEvents();
