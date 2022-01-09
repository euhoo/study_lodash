// работа с массивом, получение частей массива
// первый элемент массива
const head = _.head(arr);
// все кроме первого
const tail = _.tail(arr);
// последний
const last = _.last(arr);
// все, кроме последнего элемента
const initial = _.initial(arr);
const initialClassic = arr.slice(0, -1);


// работа с массивом, другое

//убирает все falsy значения из массива 0, false, undefined, null, ''
const arr2 = _.compact(arrWithFalsy);
// проверка на пустое значение
const isEmpty = _.isEmpty(undefined);
const isEmpty2 = _.isEmpty({});
const isEmpty3 = _.isEmpty([]);
const isEmpty4 = _.isEmpty('2');
// console.log(isEmpty4);

// console.log(arr2);
// console.log(initial);
// console.log(initialClassic);
