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
