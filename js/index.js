"use strict";

//Ex 2 Напишите функцию, которая возвращает минимальный элемент массива

let arr = [2 , 4 , 5 , 7 , 9 , 4 , 1 , 16 ];

let getMin = (arr) => {
    let arrLen = arr.length,
    minEl = arr[0];

    for (let i = 0; i < arrLen; i++) {
      if (minEl > arr[i]) {
        minEl = arr[i];
      }
    }
    return minEl;
    }

fMin = getMin(arr);
console.log(fMin);

//Напишите функцию, которая фильтрует масссив оставляя только парные числа 

let arr = [2 , 4 , 5 , 7, 9 , 4 , 1 , 16];

let result = arr.filter( elem => elem % 2 == 0);
    
console.log(result);

//Напишите функцию searchByName которая принимает параметром строку, и возвращает массив со всеми объектами, в имени которых эта строка содержится: searchByName

const people = [
    {name: 'Jonny Walker', birthDate: '1995-12-17'},
    {name: 'Andrew', birthDate: '2001-10-29'},
    {name: 'Viktor', birthDate: '1998-11-09'},
    {name: 'Andrew', birthDate: '2011-05-09'} 
]

console.log(people);


