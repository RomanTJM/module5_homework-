// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let myMap = new Map();
myMap.set("winter", "cold");
myMap.set("spring", "sunny");
myMap.set("summer", "heat");
myMap.set("autumn", "fire");

myMap.forEach((values, keys) => {
      console.log(`Season - ${keys}, Weather - ${values}`);
   })