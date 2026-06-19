# Сайт-визитка Dasha Designer

Статический сайт-визитка на чистом HTML/CSS/JS. Готов к публикации на GitHub Pages.

## Файлы
- `index.html` — страница со всеми вкладками (Обо мне, Мои проекты, Работы, Контакты)
- `styles.css` — оформление
- `script.js` — переключение вкладок и меню

## Как опубликовать на GitHub Pages (адрес dashadesigner.github.io)

1. Зарегистрируй аккаунт на https://github.com с именем пользователя **dashadesigner**
   (имя аккаунта = первая часть адреса сайта).
2. Создай новый репозиторий с названием **dashadesigner.github.io**
   (Repositories → New). Сделай его **Public**.
3. Загрузи в репозиторий файлы `index.html`, `styles.css`, `script.js`
   (кнопка **Add file → Upload files**, перетащи все три файла, затем **Commit changes**).
4. Зайди в **Settings → Pages**. В разделе *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main** / папка **/(root)** → **Save**
5. Через 1–2 минуты сайт откроется по адресу: **https://dashadesigner.github.io**

Официальная инструкция: https://docs.github.com/ru/pages/quickstart

## Что заменить на своё
- **Фото**: положи `avatar.jpg` рядом с index.html и поменяй `src` у фото в блоке «Обо мне».
- **Тексты**: замени абзацы-заглушки на свои.
- **Кейсы**: в разделе «Мои проекты» поменяй заголовки, текст и картинки. Чтобы добавить кейс — скопируй блок `<article class="case">`.
- **Работы**: замени картинки в галерее на свои файлы (`work1.jpg` и т.д.).
- **Ссылки**: в разделе «Контакты» поменяй `username` на свои профили в Telegram, Behance, Dribbble.
