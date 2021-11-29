const title = "Калькулятор верстки";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 5;
const rollback = 10;
const fullPrice = 100000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  `Стоимость верстки экранов${screenPrice}рублейи Стоимость разработки сайта${fullPrice}рублей`
);
console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback / 100));
