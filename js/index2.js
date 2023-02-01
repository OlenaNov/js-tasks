//                MODULE 5

// class StringBuilder {
  
//   constructor (initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


    



// class Blogger {

// constructor({ email, age, numbersOfPosts, topics  = {} }) {
//         this.email = email;
//         this.age = age;
//         this.numbersOfPosts = numbersOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numbersOfPosts} posts`;
//     }

//     updatePostCount(value) {
//         this.numbersOfPosts += value;
//     }

// };

// const mango = new Blogger({
//     email: 'mango@mail.com', 
//     age: 24, 
//     numbersOfPosts: 20, 
//     topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(15);
// console.log(mango);



//                     TILDA TILDA TILDA

// class Storage {
//     constructor (items = []) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         // return this.items.includes(item) 
//         // ? this.items.splice(this.items.indexOf(item), 1) 
//         // : "Errore!"

        
//         const idx = this.items.indexOf(item);
//         if(!!~idx) {
//             this.items.splice(idx, 1)
//             console.log(idx);
//         }
//     }
// };

// const storage = new Storage (["apple", "lemon", "grape", "peach"]);

// // console.log(storage);
// // console.log(storage.getItems());
// storage.addItem("pear");
// storage.removeItem("grape");
// console.log(storage);





// class User {

//     #login;
//     #email;

//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get loginValue() {
//         return this.#login;
//     }

//     set loginValue(newLogin) {
//         this.#login = newLogin;
//     }

//     get emailValue() {
//         return this.#email;
//     }

//     set emailValue(newEmail) {
//         this.#email = newEmail;
//     }
// };

// const mango = new User({
//     login: 'Mango', 
//     email: 'mango@com',
// });

// console.log(mango);
// console.log(mango.loginValue);
// mango.loginValue = 'Poly';
// console.log(mango);