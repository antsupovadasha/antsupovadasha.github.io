// Переключение вкладок
const navLinks = document.querySelectorAll("[data-tab]");
const tabs = document.querySelectorAll(".tab");
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");

function showTab(name) {
  tabs.forEach((t) => t.classList.toggle("is-active", t.id === "tab-" + name));
  document.querySelectorAll(".nav-link").forEach((l) =>
    l.classList.toggle("is-active", l.dataset.tab === name)
  );
  nav.classList.remove("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showTab(link.dataset.tab);
  });
});

// Бургер-меню на телефоне
burger.addEventListener("click", () => nav.classList.toggle("is-open"));

// Раскрытие карточек кейсов по клику на обложку
document.querySelectorAll("[data-toggle]").forEach((cover) => {
  cover.addEventListener("click", () => {
    cover.closest(".card").classList.toggle("is-open");
  });
});

// Текущий год в подвале
document.getElementById("year").textContent = new Date().getFullYear();
