// const add = function (...args) {
//     console.log(args);
//     let total = 0;

// for (arg of args) {


//     total += arg;
// }

// return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));





// const filterNumber = function (array, ...args) {
//     // console.log('array: ', array);
//     // console.log('args: ', args);
//     const unicalElements = [];

//     for (element of array) {

//         if (args.includes(element)) {
//             unicalElements.push(element);
//             // console.log(`${element} is everywhere`);
//         }
//     }
//     return unicalElements;
// };

// console.log(filterNumber([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumber([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumber([100, 200, 300, 400, 500], 7, 12, 200, 64));





// function findLongestWord(string) {
//     // Change code below this line
//     const array = string.split(' ');
//     let longElement = array[0];

//     for (const element of array) {

//       if (longElement.length < element.length) {
//         longElement = element;
//       }
//     }
//   return longElement;
//     // Change code above this line
//   };

//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));






// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     // numbers.push(min);
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//     // Change code above this line
//     return numbers;
//   };

//   console.log(createArrayOfNumbers(1, 3));





// function filterArray(numbers, value) {
//     // Change code below this line
//     let newArray = [];
//  for (const number of numbers) {

//     if (number > value) {
//         newArray.push(number);
//     }
//  }
//  return newArray;
//    // Change code above this line
//  }

//  console.log(filterArray([1, 2, 3, 4, 5], 3));





// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit); // Change this line
//   };

//   console.log(checkFruit("plum"));
//   console.log(checkFruit("mandarin"));




// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let newArray = [];
//   for (let element of array1) {

//     if (array2.includes(element)) {
//         newArray.push(element);
//     }
//   }
  
//   return newArray;
//    // Change code above this line
//   };

//   console.log(getCommonElements([1, 2, 3], [2, 4]));
// //    возвращает [2]
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// //    возвращает [1, 2]





// function includes(array, value) {
//     // Change code below this line
//   for (let element of array) {

//     if (element === value) {
//         // console.log(true);
//         return console.log(true);
//         }
//   }
//           console.log(false);
//     // Change code above this line
//   };

// includes([1, 2, 3, 4, 5], 3);
// //   true
// includes([1, 2, 3, 4, 5], 17);
// //   false




// function includes(array, value) {
//     // Change code below this line

//   for (let element of array) {
  
//     if (element === value) {
//         return true;
//         }
//   }
//           return false;
//     // Change code above this line
//   };

// includes([1, 2, 3, 4, 5], 3);
// //   true
// includes([1, 2, 3, 4, 5], 17);
// //   false




// const cart = {
//     items: [],
//     getItems() {},
//     add(product) {},
//     remove(productName),
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// }

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'grape', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });







// function countProps(object) {
//     let propCount = 0;
//     let prop = [];
//     // Change code below this line
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//   console.log(key);
//     prop.push(key);
// }
//   }
//   console.log(prop);
//   propCount = prop.length;
//   console.log(propCount);
//     // Change code above this line
//     return propCount;
//   }
  
//   countProps({ name: "Mango", age: 2 });





// Перебери объект apartment используя метод Object.keys() 
// и цикл for...of. Запиши в переменную keys массив ключей 
// собственных свойств объекта apartment, и добавь в массив values 
// все значения его свойств.



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line

//   const keys = Object.keys(apartment);

//   for (let key of keys) {
//     values.push(apartment[key]);
//   }

//   console.log(values);





// Выполни рефакторинг функции countProps(object) используя
//  метод Object.keys() и, возможно, но необязательно, 
//  цикл for...of.


// function countProps(object) {
//     // Change code below this line
  
//     console.log(Object.keys(object).length);
//     // Change code above this line
//   }

//   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

  



// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
    
//     for (let value of Object.values(salaries)) {
//         totalSalary += value;
//     }

//     // Change code above this line
//     return totalSalary;
//   }





// Перебери массив объектов colors используя цикл for...of. 
// Добавь в массив hexColors значения свойств hex, 
// а в массив rgbColors значения свойств rgb из всех объектов 
// массива colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   };

// console.log(hexColors);
// console.log(rgbColors);




// Напиши функцию getProductPrice(productName) которая принимает 
// один параметр productName - название продукта. 
// Функция ищет объект продукта с таким именем (свойство name) 
// в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна 
// возвращать null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
  
//   for (let product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//         // console.log(product.price);
//         return product.price;
//     }
//   }
//   return null;
//     // Change code above this line
//   };

// getProductPrice("Radar"); 
// // возвращает 1300.
// getProductPrice("Grip"); 
// // возвращает 1200.
// getProductPrice("Scanner"); 
// // возвращает 2700.
// getProductPrice("Droid"); 
// // возвращает 400.
// getProductPrice("Engine"); 
// // возвращает null.





// Напиши функцию getAllPropValues(propName) которая принимает 
// один параметр propName - имя (ключ) свойства. Функция должна 
// вернуть массив всех значений свойства с таким именем из каждого 
// объекта в массиве products. Если в объектах нет свойства с таким 
// именем, функция должна вернуть пустой массив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line

//   const productsArray = [];
//     for (let product of products) {
//         // console.log(product);
//         // console.log(product[propName]);
//         if (product.hasOwnProperty(propName)){
//         productsArray.push(product[propName]);
//     }
//     }
//     console.log(productsArray);
//     return productsArray;
  
//     // Change code above this line
//   };

// getAllPropValues("name");
// //  возвращает ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity");
// //  возвращает [4, 3, 7, 9]
// getAllPropValues("price");
// //  возвращает [1300, 2700, 400, 1200]
// getAllPropValues("category");
// //  возвращает []





// Напиши функцию calculateTotalPrice(productName) которая принимает
//  один параметр productName - название товара. 
//  Функция должна вернуть общую стоимость (цена * количество) 
//  товара с таким именем из массива products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
//   for (let product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//         // console.log(product);
//         totalPrice = product.price * product.quantity;
//         console.log(totalPrice);
//         return totalPrice;
// } 
//   }
//         console.log(0);
//         return 0;
  
//     // Пиши код выше этой строки
//   }

// calculateTotalPrice("Blaster");
// // возвращает 0
// calculateTotalPrice("Radar");
// //  возвращает 5200
//  calculateTotalPrice("Droid");
// //  возвращает 2800
//  calculateTotalPrice("Grip");
// //  возвращает 10800
//  calculateTotalPrice("Scanner");
// //  возвращает 8100






// Пришел трёхдневный прогноз максимальных температур и мы считаем 
// среднюю температуру за три дня (meanTemperature). Замени 
// объявления переменных yesterday, today и tomorrow одной операцией
//  деструктуризации свойств объекта highTemperatures.


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const { yesterday, today, tomorrow } = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;




// В прогнозе максимальных температур также может быть необязательное 
// свойство icon - иконка погоды. Замени объявления переменных 
// yesterday, today, tomorrow и icon одной операцией деструктуризации 
// свойств объекта highTemperatures. Задай значение по умолчанию 
// для icon - строку 
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
  
