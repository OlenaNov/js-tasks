// "use strict"

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);





// let students = 100;
// students += 50;
// console.log (students);





// const result = 108 + 223 - 2 * 5;
// console.log(result);




// const value = 27.8;

// const a = Math.floor(value); 
// const b = Math.ceil(value); 
// const c = Math.round(value); 

// console.log(a);
// console.log(b);
// console.log(c);




// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(message);




// let weight = '88,3';
// let height = '1,75';

// var corr = ',';
// var weightCorr = weight.replace(corr, '.');
// // console.log(weightCorr); 

// var heightCorr = height.replace(corr, '.');
// // console.log(heightCorr); 

// weightCorr = Number.parseFloat(weightCorr);
// heightCorr = Number.parseFloat(heightCorr);

// // console.log(weightCorr); 
// // console.log(heightCorr); 

// let pow = heightCorr**2;
// // let pow = Math.pow(heightCorr, 2);

// // console.log(pow); 

// const bmi = weightCorr / pow;

// // console.log(bmi); 

// const roudedBmi = bmi.toFixed(1);

// console.log(roudedBmi);   //28.8




// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);





// const totalMinutes = 70;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);





// let answer = prompt("What is the official name of Javascript?");

// if (answer === 'ECMAScript') {
//     alert = 'Correctly!';
// } else {
//     alert = 'Do not know? ECMAScript!';
// }



// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }






// const hours = 14;
// const minutes = 26;
// let result;


// // if (minutes === 0) {
// //   result = `${hours} h.`;
// // } else {
// //   result = `${hours} h. ${minutes} min.`;
// // }


// // result = minutes === 0 ? `${hours} h.` : `${hours} h. ${minutes} min.`;
// // console.log(result);


// switch (minutes) {
//   case 0:
//   result = `${hours} h.`;
//   break;

//   default:
//   result = `${hours} h. ${minutes} min.`;
// }
// console.log(result);





// let value = prompt('Enter a number!');

// if (value == 0) {
//   console.log('Null!');
// } else if (value > 0) {
//   console.log('Number positicve');
// } else {
//   console.log('Number negative');
// }




// const a = 120;
// const b = 180;

// // const max = a > 100 && b > 100;
// // // console.log(max);
// // if (max === true && a >= b) {
// //   console.log(a);
// // } else if (max === true && b > a) {
// //   console.log(b);
// // } else if (max === false) {
// //   console.log(b + 512);
// // }
// if (a > 100 && b > 100) {
//  if (a >= b) {
//   console.log(a);
//  } else {
//   console.log(b);
//  } 
// } else {
//   console.log(b + 512);
//  }

// // // a and b > 100
// // // console max
// // // if a and b < 100 
// // // console 512+b





// let link = 'https://my-site.com/about/';

// link = link.slice(-1) === '/' ? `${link}` : `${link}/`;

// console.log(link);




// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);




// let link = 'https://my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }
// console.log(link);




// let link = 'https://my-site.com/about';
// link = !link.endsWith('/') && link.includes('my-site') ? link += '/' : null;
// console.log(link);



// const hours = 25;
// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue')
// }





// const daysUntilDeadline = 3;
// if (daysUntilDeadline === 0) {
//     console.log('Today');
// } else if (daysUntilDeadline === 1) {
//     console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//     console.log('Day after tomorrow');
// } else if (daysUntilDeadline >= 3) {
//     console.log('Date in the future'); 
// } else {
//     console.log('Overdue'); 
// }






// const daysUntilDeadline = 2;
// switch (daysUntilDeadline) {
// case 0:
// console.log('Today');
// break;

// case 1:
// console.log('Tomorrow');
// break;

// case 2:
// console.log('Day after tomorrow');
// break;

// default:
// console.log('Date in the future'); 
// }





// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//     console.log(i);
//     }
// }





// let login = prompt('Enter login');
// let password;
// console.log(login);
// if (login === 'Admin') {
//     password = prompt('Password');
//     if (password === 'I am admin') {
//         console.log('Hello!')
//     } else {
//         console.log('Password not valid')
//     }
// } else if (!login) {
//     console.log('Canceled');
// } else {
//     console.log("I don't know you")
// }



// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);





// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }





// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 3) {
//       console.log("Нашли число 3, прерываем выполнение цикла");
//       break;
//     }
//   }
  
//   console.log("Лог после цикла");





// const number = 10;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log("четное i: ", i);
// }




// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }





// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"





// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }



// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// // console.log(card.length);
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total += cart[i];
// }

// console.log('Total: ', total);





// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let number of numbers) {
//     console.log(number);
// if (number % 2 === 0) {
//     total += number;
//     console.log('Plus total: ', number);
//  }
// }
// console.log(total);




// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let number of numbers) {
//     console.log(number);
// if (number % 2 !== 0) {
//     console.log('Not total: ', number);
//     continue;
//  }
//     total += number;
// }
// console.log('Total: ', total);





// const logins = ['jfkghd', 'owcjy', 'bncvmre', 'geriga'];
// const loginToFind = 'owcjy';
// let message = `User ${loginToFind} is not found`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `User ${loginToFind} found`;
//         break;
//     } 
// }
//     console.log(message);





// const logins = ['jfkghd', 'owcjy', 'bncvmre', 'geriga'];
// const loginToFind = 'owcjy';
// let message = `User ${loginToFind} is not found`
// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `User ${loginToFind} found`;
//         break;
//     }
// }
// console.log(message);



// const logins = ['jfkghd', 'owcjy', 'bncvmre', 'geriga'];
// const loginToFind = 'owcjy';
// let message;

// for (const login of logins) {
//     login === loginToFind ? message = `User ${loginToFind} found` : message = `User ${loginToFind} not found`;
// }
// console.log(message);





// const logins = ['jfkghd', 'owcjy', 'bncvmre', 'geriga'];
// const loginToFind = 'owcjy';
// let message;

// logins.includes(loginToFind) 
// ? message = `User ${loginToFind} found` 
// : message = `User ${loginToFind} not found`;

// console.log(message);




// const logins = ['jfkghd', 'owcjy', 'bncvmre', 'geriga'];
// const findLogin = function (allLogins, loginToFind) {

//   for (const login of allLogins) {

//   if (login === loginToFind) {
//     return `User ${loginToFind} found`;
//       }
//   }
//   return `User ${loginToFind} not found`;
// }

//   console.log(findLogin(logins, 'gfsjrj'));
//   console.log(findLogin(logins, 'owcjy'));
//   console.log(findLogin(logins, 'uoorteg'));
//   console.log(findLogin(logins, 'geriga'));





// const logins = ['jfkghd', 'owcjy', 'bncvmre', 'geriga'];

// const findLogin = function (allLogins, loginToFind) {

// return  allLogins.includes(loginToFind) 
// ? `User ${loginToFind} found` 
// : `User ${loginToFind} not found`;

// }

//   console.log(findLogin(logins, 'gfsjrj'));
//   console.log(findLogin(logins, 'owcjy'));
//   console.log(findLogin(logins, 'uoorteg'));
//   console.log(findLogin(logins, 'geriga'));





// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let minNumber = numbers[0];

// for (let number of numbers) {
//     if (number < minNumber) {
//         minNumber = number;
//     }
// }
// console.log(minNumber);







// const findMinNumber = function (numbers) {
//   let minNumber = numbers[0];

//   for (let number of numbers) {
//       if (number < minNumber) {
//           minNumber = number;
//       }
//   }
//   return minNumber;
// };


// console.log(findMinNumber([51, 18, 13, 24, 7, 85, 19]));
// console.log(findMinNumber([51, 18, 13, 24, -2, 85, 19]));






// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let maxNumber = numbers[0];

// for (let number of numbers) {
//     if (number > maxNumber) {
//         maxNumber = number;
//     }
// }
// console.log(maxNumber);




// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ', ';
// }
// string = string.slice(0, string.length - 2);
// console.log(string);





// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(', ');
// console.log(string);




// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     invertedString += 
//     letter === letter.toLowerCase() 
//     ? letter.toUpperCase() 
//     : letter.toLowerCase();
// }
// console.log(invertedString);





//   const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//     ? letter.toUpperCase() 
//     : letter.toLowerCase();
// }

//   return invertedString;
// };

// console.log(changeCase('JavaScript'));


// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);




// const title = 'Top 10 benefits of React framework';
// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);




// const slugify = function (string) {

// return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of React framework'));






// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const arrayTotal = array1.concat(array2);
// console.table(arrayTotal);
// for (const number of arrayTotal) {
//     total += number;
// }
// console.log(total);




// const cards = [
//     'Card-1', 
//     'Card-2', 
//     'Card-3', 
//     'Card-4', 
//     'Card-5'
// ];
// console.table(cards);


// const cardToRemove = 'Card-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);


// const cardNew = 'Card-6';
// cards.splice(cards.length, 0, cardNew);
// console.table(cards);


// const cardNew = 'Card-6';
// cards.push(cardNew);
// console.table(cards);


// const cardNew = 'Card-New';
// cards.splice(cards.length -1, 0, cardNew);
// console.table(cards);


// cards.pop();
// console.table(cards);




// const calculateTotalPrice = function (items) {
//     console.log('items inside a function', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// };

// const r1 = calculateTotalPrice([1, 2, 3]);
// const r2 = calculateTotalPrice([5, 10, 15, 20]);
// const r3 = calculateTotalPrice([100, 200, 300]);

// console.log(`Total amount of purchases ${r1}`);
// console.log(`Total amount of purchases ${r2}`);
// console.log(`Total amount of purchases ${r3}`);



// function getExtremeElements(array) {
//     // Change code below this line
//     // lastElement = array.length - 2;
//     // console.log(lastElement);
//   array.splice(1, array.length - 2);
//   console.log(array);
//     // Change code above this line
//   }
  
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));




// function getExtremeElements(array) {
//     // Change code below this line
//     array.splice(1, array.length - 2);
//     return array;
  
//     // Change code above this line
//   }
//     console.log(getExtremeElements([1, 2, 3, 4, 5]));




// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter);
//     // Change code above this line
//     console.log(words);
//     return words;
//   }

//   splitMessage('JavaScript essentials', "");





// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
 
//     // message.split(" ");
//     // console.log(message.split(" "));
//     const total = message.split(" ").length * pricePerWord;
//     console.log(message);
//     console.log(total);
//     return total;
 
//     // Change code above this line
//  }

//  calculateEngravingPrice("JavaScript is in my blood", 10)





//  function slugify(title) {
//     // Change code below this line

//     let slug = title.toLowerCase().split(" ").join("-");
//     console.log(slug);
//     return slug;

//     // Change code above this line
//   }

//   slugify("Arrays for begginers");




// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, - 1);
// const lastThreeEls = fruits.slice(- 3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);




// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   const lengthNewArray = newArray.length;

//   if (lengthNewArray > maxLength) {
//     console.log(newArray.slice(0, maxLength));
//     return newArray.slice(0, maxLength);
//   } else {
//     console.log(newArray);
//     return newArray;
//   }
//     // Change code above this line
//   }

//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

//   makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);






// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//    for (let i = 0; i <= number; i += 1) {
//     total += i;
//     //  console.log(total);
//    }
//    return total;
//      // Change code above this line
//    }

//    calculateTotal(3);




// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     //   console.log(total);
//     //   console.log(i);
//     }
//     // Change code above this line
//     console.log(total);
//     return total;
//   }

//   calculateTotalPrice([12, 85, 37, 4]);






// const logItems = function (items) {
//   for (let item of items) {
//     console.log(item);
//   }
// };

// logItems ([7, 4, 5, 6]);
// logItems (['I', 'am', 'lucky', '!']);







































// function findLongestWord(string) {
//     // Change code below this line
//     const stringArray = string.split(" ");
//     console.log(stringArray);

//     let maxLengthWord = stringArray[0];
//     // console.log(maxLengthWord);

//     for (let stringArrayItem of stringArray) {
//     //    console.log(stringArrayItem.length);
//     //    console.log(maxLengthWord.length);

//       if (stringArrayItem.length > maxLengthWord.length) {
//         maxLengthWord = stringArrayItem;
//         return console.log(maxLengthWord);
//         // console.log(stringArrayItem);
//         // console.log(maxLengthWord);
//       } 
//     //   console.log(maxLengthWord);
//     //   return console.log(maxLengthWord);
//     }
  
//     // Change code above this line
//   }

//   findLongestWord("The quick brown fox jumped over the lazy dog");





// function findLongestWord(string) {
//     // Change code below this line
//     const stringArray = string.split(" ");
//     console.log(stringArray);

//     let maxLengthWord = stringArray[0];
//     // console.log(maxLengthWord);

//     for (let stringArrayItem of stringArray) {
//     //    console.log(stringArrayItem.length);
//     //    console.log(maxLengthWord.length);

//       if (stringArrayItem.length > maxLengthWord.length) {
//         maxLengthWord = stringArrayItem;
//         return console.log(maxLengthWord);
//         // console.log(stringArrayItem);
//         // console.log(maxLengthWord);
//       } 
//     //   console.log(maxLengthWord);
//       return console.log(maxLengthWord);
//     }
  
//     // Change code above this line
//   } 
// }
//     findLongestWord("The quick brown fox jumped over the lazy dog");
