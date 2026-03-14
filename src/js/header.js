import { loadEvents } from "./events.js";

const formRef = document.querySelector(".header__form");
const searchInput = document.querySelector("#search");
const countryInput = document.querySelector("#country");

formRef.addEventListener("submit", async (event) => {
  event.preventDefault();
  let searchKeyword = searchInput.value.trim() || "";
  let countryCode = countryInput.value.trim().toUpperCase() || "US";
  
  await loadEvents(0, searchKeyword, countryCode);
});