# WebpackHomework

Навчальний проєкт демонструє:
- імпорт XML через `xml-loader`;
- імпорт CSV через `csv-loader`;
- використання jQuery;
- підключення локального шрифту через CSS `@font-face` та Webpack asset/resource.

## Запуск
1. Встановіть Node.js.
2. У терміналі відкрийте папку проєкту.
3. Виконайте `npm install`.
4. Виконайте `npm start`.
5. Відкрийте адресу `http://localhost:8080`, якщо браузер не відкрився автоматично.

## Production build
Виконайте `npm run build`. Готові файли будуть у папці `dist`.

## Примітка
Під час запуску Webpack компілює CSS, XML, CSV і файл шрифту. У браузері видно окремі таблиці з XML та CSV і кнопку, що перевіряє jQuery.
