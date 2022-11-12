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





function includes(array, value) {
    // Change code below this line
  for (let element of array) {

    if (element === value) {
        // console.log(true);
        return console.log(includes());
        } 
        // console.log(false);
    }
    // Change code above this line
  };

includes([1, 2, 3, 4, 5], 3);
//   true
includes([1, 2, 3, 4, 5], 17);
//   false



// bhjghjgnmmjnhjbghvfhbfvgf
