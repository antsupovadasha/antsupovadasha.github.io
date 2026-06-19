/* ===== Данные кейсов — меняй на свои ===== */
const CASES = [
  {
    title: "Tesla Landing Page",
    cover: "linear-gradient(135deg,#c9b8ff 0%,#9f86ff 45%,#6c5ce7 100%)",
    tags: [
      { label: "UI Design", type: "lilac" },
      { label: "Framer Development", type: "pink" },
      { label: "2025", type: "gray" },
    ],
    desc: "Лендинг для электромобиля: чистая сетка, крупная типографика и плавные переходы.",
    task: "Сделать посадочную страницу, которая продаёт продукт за один экран.",
    solution: "Минималистичная сетка, акцент на герое и анимации при скролле во Framer.",
    result: "Конверсия в заявку выросла, а страница собрала отклик в дизайн-комьюнити.",
  },
  {
    title: "Grok Dashboard",
    cover: "linear-gradient(135deg,#dfe7ef 0%,#b9c6d6 50%,#8aa0b8 100%)",
    tags: [
      { label: "Product Design", type: "lilac" },
      { label: "2024", type: "gray" },
    ],
    desc: "Интерфейс дашборда AI-чатбота: спокойные цвета, понятная иерархия данных.",
    task: "Спроектировать панель управления для продукта на основе ИИ.",
    solution: "Сгруппировала метрики по приоритету, добавила состояния и тёмную тему.",
    result: "Команда получила готовую дизайн-систему и быстрый онбординг новых экранов.",
  },
  {
    title: "Финтех-приложение",
    cover: "linear-gradient(135deg,#ffe3f1 0%,#ffc4e1 50%,#f59ac8 100%)",
    tags: [
      { label: "Mobile", type: "lilac" },
      { label: "UX Research", type: "pink" },
      { label: "2024", type: "gray" },
    ],
    desc: "Мобильный банк с фокусом на бюджет и привычки трат — мягкий и дружелюбный.",
    task: "Помочь пользователю видеть, куда уходят деньги, без перегруза.",
    solution: "Свела ключевые сценарии к трём экранам и добавила понятные подсказки.",
    result: "Тесты показали, что новые пользователи находят нужное в два раза быстрее.",
  },
  {
    title: "Бренд-айдентика студии",
    cover: "linear-gradient(135deg,#d9f0e3 0%,#aee0c6 50%,#7fcaa6 100%)",
    tags: [
      { label: "Branding", type: "lilac" },
      { label: "2023", type: "gray" },
    ],
    desc: "Логотип, палитра и гайдлайны для небольшой творческой студии.",
    task: "Создать узнаваемый и гибкий фирменный стиль.",
    solution: "Построила систему вокруг одного знака и собрала компактный брендбук.",
    result: "Стиль легко переносится с сайта на мерч и соцсети.",
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
