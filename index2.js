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


    



class Blogger {

constructor({ email, age, numbersOfPosts, topics  = {} }) {
        this.email = email;
        this.age = age;
        this.numbersOfPosts = numbersOfPosts;
        this.topics = topics;
    }

    getInfo() {
        return `User ${email} is ${age} years old and has ${numbersOfPosts} posts`;
    }

    updatePostCount(value) {
        this.numbersOfPosts += value;
    }

};



const mango = new Blogger({
    email: 'mango@mail.com', 
    age: 24, 
    numbersOfPosts: 20, 
    topics: ['tech', 'cooking'],
});

console.log(mango);