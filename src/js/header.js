const formRef = document.querySelector(".header__form");
const searchInput = document.querySelector("#search");
const countryInput = document.querySelector("#country");

let searchKeyword = "all";
let countryCode = "US";

loadEvents(0, searchKeyword, countryCode);

formRef.addEventListener("submit", async (event) => {
  event.preventDefault();
  searchKeyword = searchInput.value.trim() || "all";
  countryCode = countryInput.value.trim().toUpperCase() || "US";
  
  await loadEvents(0, searchKeyword, countryCode);
});