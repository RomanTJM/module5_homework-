// Задание 3.
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = "Hello"
function reverseStr(str) {
   return str.split("").reverse().join("");
}
console.log(reverseStr(str))