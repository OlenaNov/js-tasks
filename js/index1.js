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
  
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;




// Мы получили прогноз погоды на два дня, с минимальными и 
// максимальными температурами, а также необязательными иконками. 
// Замени объявления всех переменных одной операцией деструктуризации
//  свойств объекта forecast. Задай значение по умолчанию для иконок,
//   переменных todayIcon и tomorrowIcon - строку 
//   "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
//   const { 
//     today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }, 
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", },
//  } = forecast;





// Напиши функцию makeTask(data) которая принимает один параметр 
// data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть 
// новый объект задачи, 
// не изменяя напрямую параметр data. В новом объекте должно быть 
// свойство completed, 
// значение которого хранится в одноимённой 
// локальной переменной.

// В параметре data гарантированно будет только свойство text, 
// а остальные два, category и priority, могут отсутствовать. 
// Тогда, в новом объекте задачи, в свойствах category и priority 
// должны быть значения по умолчанию, хранящиеся в одноимённых 
// локальных переменных.

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//   return {
//     completed: completed, 
//     category: category, 
//     priority: priority,
//     ...data, 
// };
// // console.log(newData);
//     // Change code above this line
//   };

//   makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// //   возвращает 
// // { category: "Homemade", priority: "Low", text: "Take out the trash",
// //  completed: false }

// makeTask({ category: "Finance", text: "Take interest" }) 
// // возвращает { category: "Finance", priority: "Normal", 
// // text: "Take interest", completed: false }






// function add(...args) {
//     let result = 0;
//     for (let arg of args) {
//       result += arg;
//     };
//     // console.log(result)
//     return result;
//   };
  
//   add(12, 4, 11, 48);
// //    возвращает 75






// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if (arg > firstNumber) {
//       total += arg;
//         };
//     };
//     console.log(total);
//     return total;
//     // Change code above this line
//   }

//   addOverNum(50, 15, 27);
// //    возвращает 0
//     addOverNum(10, 12, 4, 11, 48, 10, 8);
//     //  возвращает 71





// // Change code below this line
// function findMatches(numbers, ...args) {
//     const matches = []; // Don't change this line
//     // console.log(numbers);
//     // console.log(args);
//     for (let number of numbers) {
//         if (args.includes(number)) {
//             matches.push(number);
//         };
//     }
//     // Change code above this line
//     console.log(matches);
//     return matches;
//   };

//   findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// //    возвращает [24, 9, 41]





// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams", "Red sunset", "Sands of dune"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//     if (this.books.indexOf(bookName) >= 0) {
//     this.books.splice(this.books.indexOf(bookName), 1);
//       return `Deleting book ${bookName}`;
//       };
//     },
//     updateBook(oldName, newName) {
//       if (this.books.includes(oldName)) {
//               // console.log(oldName);
//               this.books.splice(this.books.indexOf(oldName), 1, newName);
//               // console.log(this.books);
//               console.log(`Updating book ${oldName} to ${newName}`);
//               return `Updating book ${oldName} to ${newName}`;
//       }
//     },
//     // Change code above this line
//   };

// // bookShelf.removeBook("Red sunset");
//   //  возвращает строку "Deleting book Red sunset"
  
// bookShelf.updateBook("Sands of dune", "Dune");
//   //  возвращает строку "Updating book Sands of dune to Dune"





// // potions массив объектов со следующими свойствами

// // {
// //   name: "Dragon breath",
// //   price: 700
// // }

// // не с массивом строк, а с массивом объектов.

// // getPotions()-метод для получения всех зелий.Возвращает значение 
// // свойства potions.

// // addPotion(newPotion) - добавляет зелье newPotion (уже объект) 
// // в массив в свойстве potions, но только если такого зелья еще нет 
// // в инвентаре. В противном случае возвращается строка.

// // removePotion(potionName) - удаляет объект зелья с именем
// //  potionName из массива в свойстве potions.

// // updatePotionName(oldName, newName) - обновляет свойство name 
// // объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
  
//   getPotions() {
//     // console.log(this.potions);
//     return this.potions;
//   },
  
//   addPotion(newPotion) {

//     for (let potion of this.potions) {

//       if (potion.name === newPotion.name) {
//         console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }; 
//     }; 
//     // console.log(this.potions);
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//           // console.log(potionName);
//     for (let potion of this.potions) {
//       console.log(potion.name);

//       if (potion.name === potionName) {
//         console.log(this.potions);
//         const potionIndex =  this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         // return;
//       };
//     };
//     console.log(this.potions);
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     // console.log(this.potions);

//     for (let potion of this.potions) {

//       if (potion.name === oldName) {
//         // const potionIndex =  this.potions.indexOf(potion);
//         // this.potions.splice(potionIndex, 1, newName);
//         // return;
//         potion.name = newName;
//         // console.log(this.potions);
//       };
//     };
//     // console.log(`Potion ${oldName} is not in inventory!`);
//     return `Potion ${oldName} is not in inventory!`;
//   },

// };

// // atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// // `, возвращает строку `'Error! Potion Stone skin is already in your inventory!'`.
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// // `, возвращает строку 
// // `'Error! Potion Dragon breath is already in your inventory!'`.


// // atTheOldToad.getPotions();
// // для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// // atTheOldToad.addPotion({ name: "Stone skin", price: 520 });
// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// // // , в массиве potions последним элементом будет этот объект

// // atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// // // , в массиве potions последним элементом будет этот объект
// // // Если добавляемое зелье уже есть в массиве potions, метод 
// // // addPotion возвращает строку с текстом из исходного кода

// // // Если добавляемое зелье уже есть в массиве potions, 
// // // метод addPotion не добавляет в него передаваемый обьект
// // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// // // , массив potions не изменяется

// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// // // , массив potions не изменяется

// // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// // // , возвращает строку 
// // // "Error! Potion Dragon breath is already in your inventory!"


// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// // // , возвращает строку 
// // // "Error! Potion Stone skin is already in your inventory!"

// // atTheOldToad.removePotion("Dragon breath")
// // // , в свойстве potions будет массив 
// // // [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// // atTheOldToad.removePotion("Speed potion")
// // // , в свойстве potions будет массив 
// // // [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// // atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// // // , в свойстве potions будет массив 
// // // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

// // atTheOldToad.updatePotionName("Stone skn", "Invulnerability potion")
// // , в свойстве potions будет массив 
// // // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]






// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       for (let pizza of this.pizzas) {
//         // console.log(pizza);
//             if (pizza === pizzaName) {
                
//                 return makePizza(pizzaName);
//             }
//       };
//       return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);

//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
  




// function changeEven(numbers, value) {
//     // Change code below this lin
//     let newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number += value);
//     } else {
//     newArray.push(number);
// }
//   });
//   console.log(newArray);
//   return newArray;

//     // Change code above this line
//   };


// changeEven([1, 2, 3, 4, 5], 10);
// // ` возвращает новый массив `[1, 12, 3, 14, 5]`
// changeEven([2, 8, 3, 7, 4, 6], 10);
// // ` возвращает новый массив `[12, 18, 3, 7, 14, 16]`
// changeEven([17, 24, 68, 31, 42], 100);
// // ` возвращает новый массив `[17, 124, 168, 31, 142]`
// changeEven([44, 13, 81, 92, 36, 54], 100);
// // ` возвращает новый массив `[144, 13, 81, 192, 136, 154]`
// // Вызов функции со случайными, но валидными аргументами, 
// // возвращает правильное значение.Результатом вызова функции 
// // changeEven([22,9,7,23,7,21,17], 7 )) будет
// //  [29,9,7,23,7,21,17]





// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// // let arrayplanetsLengths = [];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);






// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users => {
//     console.log(getUserNames);
//     return users.map(user => user.name);
//   };






// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genere, index, array) => 
//   array.indexOf(genere)  === index);
//   console.log(allGenres);
//   console.log(uniqueGenres);





// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];



// const getUsersWithEyeColor = (users, color) => {
//   let arrayNames = [];
//  users.filter(user => {
//    if (user.eyeColor === color) {
//      arrayNames.push(user.name);
//    }
//  });
//  console.log(arrayNames);
//  return arrayNames;
// };

// const getUsersWithEyeColor = (users, color) => {
//   const EyeColor = users.filter(({eyeColor}) => eyeColor === color).map(({name}) => name)
//   console.log(EyeColor);
// };


// const getUsersWithEyeColor = (users, color) => 
// users.filter(({eyeColor}) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue"));

// `color` это `'blue'`, функция возвращает массив объектов 
//  `Moore Hensley`, `Sharlene Bush` и `Carey Barr`

// `color` это `'green'`
// `Ross Vazquez` и `Elma Head`

// `color` это `'brown'`
// `Blackburn Dotson` и `Sheree Anthony`







const users  = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
];

// const getUsersWithFriend = (users, friendName) => { 
//   users.map((user) => 
//   user.friends.filter(friend => {
//     if(friend === friendName) {
//       // console.log(user);
//       return user;
//     }
//     }));
//   };

// const getUsersWithFriend = (users, friendName) => { 
//   const usersFriend = users.filter(({friends}) => 
//     friends.includes(friendName));
//     console.log(usersFriend);
//     return usersFriend;
// };

// getUsersWithFriend(users, "Briana Decker");






// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends).filter((friend, idx, arr) => 
//   arr.indexOf(friend) === idx);
// console.log(allFriends);
// };

// getFriends(users);





// const getActiveUsers = (users) => {
//   const get = users.filter(user => user.isActive);
//   console.log(get);
// };

// getActiveUsers(users);





// const getUserWithEmail = (users, email) => {
//   users.find(({email: emailUser}) => emailUser === email);
// };

// getUserWithEmail(users, "shereeanthony@kog.com");




// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);





// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((total, user) => 
//   total + user.balance, 0);
//  console.log(totalBalance);
//   return totalBalance;
// };

// calculateTotalBalance(users);




// const getTotalFriendCount = users => {
//   const totalFriend = users.reduce((total, user) => 
//   total + user.friends.length, 0);
//    console.log(totalFriend);
//  return totalFriend;
// };

// getTotalFriendCount(users);





// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//  a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//  b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) =>
//  a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) =>
//  b.rating - a.rating);

//  console.log(sortedByAuthorName);
//  console.log(sortedByReversedAuthorName);
//  console.log(sortedByAscendingRating);
//  console.log(sortedByDescentingRating);






// const getNamesSortedByFriendCount = users => {
//   const sortedNames = [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//  .map(({name}) => name);
//  console.log(sortedNames);
//  return sortedNames;
// };

// getNamesSortedByFriendCount(users);