(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-events-open]'),
    closeModalBtn: document.querySelector('[data-modal-events-close]'),
    modal: document.querySelector('[data-modal-events]'),
  };

  document.getElementById('events').addEventListener('click', (e) => {
    if (e.target.closest('[data-modal-events-open]')) {
      toggleModal();
    }
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', e => {
    if (e.target === refs.modal) toggleModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();



const bigPicture = document.querySelector(".modal__picture");
const smallPicture = document.querySelector(".modal__pctr");
const infoAboutEvent = document.querySelector("#info");
const dateOfEvent = document.querySelector("#date");
const timeOfEvent = document.querySelector("#time");
const cityOfEvent = document.querySelector("#city");
const placeOfEvent = document.querySelector("#place");
const nameOfEvent = document.querySelector("#name");
const priceOfTicket = document.querySelector("#price");
const buyTicket = document.querySelector(".modal__btn");

export async function fillModal(event) {
  bigPicture.src = event.images[0].url;
  smallPicture.src = event.images[0].url;

  infoAboutEvent.textContent = event.description || "Немає інформації";

  nameOfEvent.textContent = event.name;

  dateOfEvent.textContent = event.dates.start.localDate;
  timeOfEvent.textContent = event.dates.start.localTime || "Час не вказано";

  cityOfEvent.textContent = event._embedded.venues[0].city.name || "Місто не вказано";
  placeOfEvent.textContent = event._embedded.venues[0].name || "Не знайдено місце проведення";

  buyTicket.href = event.url;

  if (event.priceRanges && event.priceRanges.length > 0) {
    const { min, max, currency } = event.priceRanges[0];
    priceOfTicket.textContent = `Standart ${min} - ${max} ${currency}`;
  } else {
    priceOfTicket.textContent = "Деталі на Ticketmaster";
  }
}
