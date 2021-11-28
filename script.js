let title = "Калькулятор верстки";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 5;
let rollback = 10;
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов" +
    " " +
    screenPrice +
    " " +
    "рублей" +
    " " +
    "и" +
    " " +
    "Стоимость разработки сайта" +
    " " +
    fullPrice +
    " " +
    "рублей"
);
screens = screens.toLowerCase();
let mass = screens.split(" ");
console.log(mass);
console.log(fullPrice * (rollback / 100));
