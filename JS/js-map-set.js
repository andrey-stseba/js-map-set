"use strict";
/***************        Map                 *********************/
// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.

const arr1 = [1, "map"];
const arr2 = [2, "set"];

const mapTest = new Map([arr1, arr2]);
//console.log(mapTest);

// Получите список ключей и значений отдельно.
const listKeysMapTest = mapTest.keys();
//console.log('список ключей: ', listKeysMapTest);

const listValuesMapTest = mapTest.values();
//console.log('список значений: ', listValuesMapTest )

// Получите текущее количество элементов.

console.log("текущее количество элементов в mapTest: ", mapTest.size);

// Добавьте и удалите элемент

mapTest.set(3, "symbol");
//console.log('текущее количество элементов в mapTest: ', mapTest.size)
mapTest.delete(3);
//console.log('текущее количество элементов в mapTest: ', mapTest.size)

// Произведите поиск по ключу

const searchKey3 = mapTest.has(3);
//console.log('поиск по ключу 3:', searchKey3);
const searchKey2 = mapTest.has(2);
//console.log('поиск по ключу 2:', searchKey2);

/*****************    Set   *********************************/

// Создайте коллекцию Set с начальными значениями 1,2,3.
const setTest = new Set([1, 2, 3]);
//console.log(setTest)

// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.

setTest.has(3);
//console.log('наличие элемента со значением 3:', setTest.has(3));
setTest.has(4);
//console.log('наличие элемента со значением 4:', setTest.has(4));

// Добавите еще несколько элементов.

setTest.add(5);
setTest.add(6);

// С помощью цикла for-of переберите ее значения и выведите в консоль.

for (const currentValues of setTest) {
  console.log("Значения колекции setTest:", currentValues);
}
// Найдите сумму этих значений.

function isSumSetTestValues() {
  let result = 0;
  for (const currentValues1 of setTest) {
    result += currentValues1;
  }
  return result;
}

//console.log(isSumSetTestValues());

// Удалите элемент 2.

setTest.delete(2);
//console.log(setTest)

// Очистите всю коллекцию.

setTest.clear();
//console.log(setTest)

/* *************MyArray*****************************************/

// * Сделать MyArray итерируемым.

class MyArray {
  constructor(length = 0) {
    this.length = length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  }
  shift() {
    if (this.length === 0) {
      return;
    }
    const fistItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.length];
    return fistItem;
  }

  [Symbol.iterator]() {
    let i = 0;
    const maxValue = this.length - 1;
    return {
      next: () => {
        if (i > maxValue) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: i++,
          done: false,
        };
      },
    };
  }
}
const myArr = new MyArray();
myArr.push(1, 2, 3, 4, 5, 6);
console.log(myArr);

for (const value of myArr) {
  console.log("Значения класса MyArray:", myArr[value]);
}
