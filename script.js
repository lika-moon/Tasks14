// В данных задачах вам может понадобиться использовать методы: reduce, findIndex, indexOf, 
// includes, concat, isArray, lastIndexOf, every, object.keys

// ------------------------Задачи с использованием reduce

// 1.	Подсчет суммы всех чисел в массиве. Напишите функцию, которая использует метод reduce 
// для подсчета суммы всех чисел в массиве.
const numbers = [1, 2, 3, 4, 5];
let numberSum = numbers.reduce(function (sum, elem) {
  return sum + elem;
}, 0);
console.log(numberSum);

// 2.	Подсчет среднего значения чисел в массиве. Используйте reduce для вычисления среднего 
// значения элементов массива.
const nums = [10, 20, 30, 40, 50];
function average(nums) {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(nums));

// 3.	Подсчет количества вхождений каждого элемента в массиве. Создайте функцию, которая 
// возвращает объект, где ключи - это уникальные элементы массива, а значения - количество 
// их вхождений, используя reduce.
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruits = items.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(fruits);

// 4.	Поиск максимального числа в массиве. Используйте reduce для нахождения максимального 
// числа в массиве чисел.
const numb = [5, 34, 78, 2, 45];
const max = numb.reduce((max, num) => (max > num ? max : num));
console.log(max);

// 5.	Объединение массивов объектов по ключу. Напишите функцию, которая объединяет массив
//  объектов по заданному ключу, используя reduce.
const people = [
  { name: "Alice", age: 25, job: "Developer" },
  { name: "Bob", age: 30, job: "Designer" },
  { name: "Alice", location: "London" }
];

function ObjectsByKey(people, key) {
  return people.reduce((result, obj) => {
      const keyValue = obj[key];
 
      if (!result[keyValue]) {
          result[keyValue] = {};
      }

      Object.assign(result[keyValue], obj);

      return result;
  }, {});
}
console.log(ObjectsByKey(people, 'name'));

// 6.	Подсчет общего количества определенного свойства в массиве объектов. Используйте reduce
//  для подсчета общего количества определенного свойства (например, age) в массиве объектов.
const peopl = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let groupByAge = peopl.reduce((acc, it) =>
  ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
  {});
console.log(groupByAge)
// 7.	Удаление дубликатов из массива. Используйте reduce для создания массива, который 
// содержит только уникальные значения изначального массива.
const number = [1, 2, 3, 4, 5, 1, 2, 3];

const uniqueNumbers = number.reduce((acc, currentNumber) => {
  if (!acc.includes(currentNumber)) {
      acc.push(currentNumber);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

// 8.	Плоское представление вложенных массивов. Напишите функцию, которая использует
// reduce для "выпрямления" массива массивов в одномерный массив. (Здесь пригодится
// рекурсионный вызов функции)

const nestedArrays = [1, [2, 3], [4, [5, 6]], 7];

const flatArr = (arr) => {
  return arr.reduce((acc, element) => {
      return acc.concat(Array.isArray(element) ? flatArr(element) : element);
  }, []);
};
console.log(flatArr(nestedArrays))

// 9.	Создание объекта из массива ключей и массива значений. Используйте reduce для
// создания объекта, где ключи и значения формируются из двух разных массивов.
const keys = ['id', 'name', 'age'];
const values = [1, 'Alice', 25];


const objKeyValue = keys.reduce((acc, key, index) =>{
    acc[key] = values[index] 
    return acc
},{})
 console.log(objKeyValue)

// -------------------- Задачи с использованием findIndex и indexOf


// 1.	Поиск первого четного числа. Напишите функцию, которая использует findIndex для
// поиска первого четного числа в массиве.
const numberses = [1, 3, 5, 8, 10];

function findnumb (element) {
  return element %2 === 0
}
console.log(numberses.findIndex(findnumb))
// 2.	Определение, содержит ли массив определенный элемент. Используйте indexOf для
// проверки, содержит ли массив заданный элемент.
const fruit = ['apple', 'banana', 'orange'];
const element = 'banana';

console.log(fruit.indexOf(element))

// 3.	Поиск индекса объекта по заданному свойству. Создайте функцию, использующую findIndex,
//  чтобы найти индекс объекта в массиве объектов по определенному свойству (например, по id).
const peoples = [
{ id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const prop = 'id';
const value = 2;

const findId = (peoples, prop, value) => {
 return peoples.findIndex(obj =>  obj[prop] === value)
}
console.log(findId(peoples, prop, value))

const idIndex = findId(peoples, prop, value)
console.log(idIndex)
// 4.	Определение, все ли элементы уникальны в массиве. Используйте комбинацию findIndex и
// indexOf для проверки, все ли элементы в массиве уникальны.
const numbe = [1, 2, 3, 4, 5, 1];

const arrUnique = (arr) => {
  return arr.findIndex((element, index) => arr.indexOf(element) !== index) === -1;
};
console.log(arrUnique(numbe))

// 5.	Поиск последнего вхождения элемента в массиве. Используйте indexOf с параметром
// fromIndex, чтобы найти последнее вхождение элемента в массиве.

 // fromIndex - позволяет указать позицию, с которой начать поиск элемента в массиве
const letters = ['a', 'b', 'c', 'a', 'b', 'c', 'a'];
const elements = 'a';
console.log(letters.indexOf( elements,  5))

// 6.	Нахождение индекса первого числа, большего заданного. Создайте функцию с использованием
//  findIndex, чтобы найти индекс первого числа в массиве, которое больше заданного значения.
const mass = [3, 5, 7, 9, 10];
const num = 6;
console.log(mass.findIndex(elem => elem > num));

function findmassnumb (element) {
  return element > num
}
console.log(mass.findIndex(findmassnumb));

// 1.	Поиск индекса первого элемента, который удовлетворяет условию. Используйте findIndex для
// поиска индекса первого элемента в массиве, который удовлетворяет заданному условию (например,
// является строкой определенной длины).
const strings = ['hello', 'world', 'example', 'words'];
const length = 7;
console.log(strings.findIndex( elem => elem.length === length))

// 2.	Удаление всех вхождений заданного элемента из массива. Используйте indexOf в цикле, чтобы
//  найти и удалить все вхождения определенного элемента из массива.
const array = [1, 2, 3, 2, 4, 2, 5];
const elementes = 2;

const removeItem = (arr, element) => {
  const result = [];
for ( let i = 0; i < arr.length; i++) {
  if(arr[i] !== element) { 
    result.push(arr[i]);
  }
}
return result;
}
console.log(removeItem(array, elementes))


// 3.	Поиск индекса элемента в массиве объектов по нескольким свойствам. Создайте функцию,
// которая использует findIndex, чтобы найти индекс объекта в массиве, соответствующего нескольким
//  заданным свойствам.
const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2005 },
  { make: 'Honda', model: 'Civic', year: 2004 },
  { make: 'Ford', model: 'Fusion', year: 2008 }
];
const props = { make: 'Honda', model: 'Civic' };

const findProps = (cars, props) => {
  return cars.findIndex(elem => 
    elem.make === props.make && elem.model === props.model)
}
console.log(findProps(cars, props));