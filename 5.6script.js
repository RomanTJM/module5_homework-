// Задание 6.
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

[1,1,1,1,1].every((item,index,arr)=>{
    return item == arr[0]
    })