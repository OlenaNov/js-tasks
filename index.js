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



const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
// console.log(card.length);
for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i]);

    total += cart[i];
}

console.log('Total: ', total);