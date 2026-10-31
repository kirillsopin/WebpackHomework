import $ from "jquery";
import "./style.css";
import xmlProducts from "./data/products.xml";
import csvProducts from "./data/products.csv";

function normalizeXml(data) {
  // xml-loader returns the parsed XML document as an object.
  const source = data && data.products ? data.products.product : [];
  const list = Array.isArray(source) ? source : [source];
  return list.filter(Boolean).map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    price: item.price
  }));
}

function renderTable(rows) {
  if (!rows.length) return "<p>Немає даних для відображення.</p>";
  return `
    <table>
      <thead><tr><th>ID</th><th>Назва</th><th>Категорія</th><th>Ціна, грн</th></tr></thead>
      <tbody>
        ${rows.map((item) => `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${Number(item.price).toLocaleString("uk-UA")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>`;
}

const xmlRows = normalizeXml(xmlProducts);
const csvRows = Array.isArray(csvProducts) ? csvProducts : [];

$("#app").html(`
  <header class="header">
    <h1>Webpack: робота з різними типами файлів</h1>
    <p>XML · CSV · jQuery · CSS fonts</p>
  </header>
  <main class="container">
    <div class="status">Проєкт завантажено. Дані XML і CSV імпортовано через Webpack.</div>
    <div class="grid">
      <section class="card">
        <h2>Дані з XML</h2>
        <div id="xml-table">${renderTable(xmlRows)}</div>
      </section>
      <section class="card">
        <h2>Дані з CSV</h2>
        <div id="csv-table">${renderTable(csvRows)}</div>
      </section>
      <section class="card">
        <h2>Перевірка jQuery</h2>
        <p>Кнопка нижче змінює повідомлення за допомогою jQuery.</p>
        <button id="jquery-button">Перевірити jQuery</button>
        <div id="message">Очікування дії...</div>
      </section>
      <section class="card">
        <h2>Підтримка шрифтів</h2>
        <p>Цей текст використовує локальний файл DejaVuSans.ttf, підключений через CSS @font-face та оброблений Webpack.</p>
      </section>
    </div>
  </main>
  <footer class="footer">Навчальний проєкт Webpack</footer>
`);

$("#jquery-button").on("click", function () {
  $("#message").text("jQuery працює! Обробник натискання виконано успішно.");
});