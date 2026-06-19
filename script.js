/* ===== Данные кейсов — меняй на свои ===== */
const CASES = [
  {
    title: "Онлайн-игра с Claude Code",
    link: "https://www.behance.net/antsupovadaria",
    cover: "linear-gradient(135deg,#c9b8ff 0%,#9f86ff 45%,#6c5ce7 100%)",
    tags: [
      { label: "UX/UI", type: "lilac" },
      { label: "AI", type: "pink" },
      { label: "2026", type: "gray" },
    ],
    desc: "Интерфейс онлайн-игры, собранной вместе с Claude Code: игровой флоу и понятный UI.",
    task: "Спроектировать интерфейс игры и связать дизайн с разработкой на Claude Code.",
    solution: "Продумала игровые экраны, состояния и единый визуальный язык.",
    result: "Получился живой прототип, который легко расширять новыми механиками.",
  },
  {
    title: "Dashboard & UX",
    link: "https://www.behance.net/antsupovadaria",
    cover: "linear-gradient(135deg,#dfe7ef 0%,#b9c6d6 50%,#8aa0b8 100%)",
    tags: [
      { label: "Product Design", type: "lilac" },
      { label: "Dashboard", type: "pink" },
      { label: "2026", type: "gray" },
    ],
    desc: "Аналитический дашборд: спокойные цвета, чёткая иерархия данных и читаемость.",
    task: "Собрать панель с метриками так, чтобы важное было видно сразу.",
    solution: "Сгруппировала данные по приоритету, проработала состояния и сетку.",
    result: "Пользователь находит ключевые показатели без лишних кликов.",
  },
  {
    title: "Food delivery — мобильное приложение iOS",
    link: "https://www.behance.net/antsupovadaria",
    cover: "linear-gradient(135deg,#ffe3f1 0%,#ffc4e1 50%,#f59ac8 100%)",
    tags: [
      { label: "Mobile iOS", type: "lilac" },
      { label: "UX/UI", type: "pink" },
      { label: "2024", type: "gray" },
    ],
    desc: "Приложение доставки еды: быстрый заказ, аппетитные карточки и удобная корзина.",
    task: "Упростить путь от выбора блюда до оформления заказа.",
    solution: "Свела ключевые сценарии к нескольким экранам и продумала навигацию.",
    result: "Заказ оформляется в пару касаний, интерфейс ощущается лёгким.",
  },
  {
    title: "OZON — система рекомендаций",
    link: "https://www.behance.net/antsupovadaria",
    cover: "linear-gradient(135deg,#d9f0e3 0%,#aee0c6 50%,#7fcaa6 100%)",
    tags: [
      { label: "Mobile", type: "lilac" },
      { label: "UX/UI", type: "pink" },
      { label: "2024", type: "gray" },
    ],
    desc: "UX/UI системы рекомендаций для мобильного приложения маркетплейса.",
    task: "Показать релевантные товары так, чтобы это помогало, а не мешало.",
    solution: "Спроектировала блоки рекомендаций и их логику в карточке и ленте.",
    result: "Рекомендации органично вписались в привычный путь покупателя.",
  },
  {
    title: "Онлайн-кинотеатр",
    link: "https://www.behance.net/antsupovadaria",
    cover: "linear-gradient(135deg,#ffe0c2 0%,#ffbf8f 50%,#f59b5c 100%)",
    tags: [
      { label: "UI/UX", type: "lilac" },
      { label: "2023", type: "gray" },
    ],
    desc: "Интерфейс онлайн-кинотеатра: тёмная тема, акцент на постерах и подборках.",
    task: "Помочь зрителю быстро найти, что посмотреть.",
    solution: "Выстроила афишу, подборки и страницу фильма в едином ритме.",
    result: "Контент стал заметнее, а выбор фильма — приятнее.",
  },
];

/* ===== Рендер карточек ===== */
const cardsEl = document.getElementById("cards");
cardsEl.innerHTML = CASES.map((c, i) => `
  <button class="card" data-case="${i}">
    <div class="chips">
      ${c.tags.map((t) => `<span class="chip is-${t.type}">${t.label}</span>`).join("")}
    </div>
    <div class="card-cover" style="background:${c.cover}"></div>
    <div class="card-body">
      <h3 class="card-title">${c.title}</h3>
      <p class="card-desc">${c.desc}</p>
    </div>
  </button>
`).join("");

/* ===== Рендер подробного кейса ===== */
const caseEl = document.getElementById("case");
function renderCase(i) {
  const c = CASES[i];
  caseEl.innerHTML = `
    <div class="chips">
      ${c.tags.map((t) => `<span class="chip is-${t.type}">${t.label}</span>`).join("")}
    </div>
    <h1 class="case-title">${c.title}</h1>
    <p class="hero-lead">${c.desc}</p>
    <div class="case-cover" style="background:${c.cover}"></div>
    <div class="case-section">
      <h3>Задача</h3>
      <p class="muted">${c.task}</p>
    </div>
    <div class="case-section">
      <h3>Решение</h3>
      <p class="muted">${c.solution}</p>
    </div>
    <div class="case-section">
      <h3>Результат</h3>
      <p class="muted">${c.result}</p>
    </div>
    ${c.link ? `<a class="case-link" href="${c.link}" target="_blank" rel="noopener">Смотреть на Behance ↗</a>` : ""}
  `;
}

/* ===== Переключение вкладок ===== */
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

document.querySelectorAll("[data-tab]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showTab(link.dataset.tab);
  });
});

/* ===== Открытие кейса ===== */
cardsEl.addEventListener("click", (e) => {
  const card = e.target.closest("[data-case]");
  if (!card) return;
  renderCase(Number(card.dataset.case));
  // вкладка кейса активна, но в меню подсвечиваем «Кейсы»
  tabs.forEach((t) => t.classList.toggle("is-active", t.id === "tab-case"));
  document.querySelectorAll(".nav-link").forEach((l) =>
    l.classList.toggle("is-active", l.dataset.tab === "cases")
  );
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("back").addEventListener("click", () => showTab("cases"));

/* ===== Бургер-меню ===== */
burger.addEventListener("click", () => nav.classList.toggle("is-open"));

/* ===== Год в подвале ===== */
document.getElementById("year").textContent = new Date().getFullYear();
