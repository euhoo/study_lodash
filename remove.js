/* удаление элементов из коллекции */

// without не мутирует исходный массив
const res5 = _.without(arr, 1, 2);
// console.log(res5);

// pull мутирует исзодный массив
const arrClone = [...arr];
_.pull(arrClone, 1, 2)
// console.log(arr);
// console.log(arrClone);

// для работы с коллекцией сложного типа использовать remove или reject
// remove  -  аналог filter, но МУТИРУЕТ исходный массив
// reject не мутирует исходный массив
const resFilter22 = _.reject(usersFilter, ['name', 'name1']);
// console.log(resFilter22);
