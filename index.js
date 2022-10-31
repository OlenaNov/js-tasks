"use strict"

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



