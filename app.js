
// let a = 5;
// let b = 10;
// let sum = a + b;
// console.log("Sum:", sum);

// let num = 7;

// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let str = "hello";
// let reversed = str.split('').reverse().join('');
// console.log(reversed);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

// for (let num = 2; num <= 20; num++) {
//   let isPrime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }


// for (let num = 2; num <= 20; num++) {
//   let isPrime = true;

//   // Check if the number is divisible by any number less than it
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   // Output whether the number is prime
//   if (isPrime) {
//     console.log(num + " is prime");
//   } else {
//     console.log(num + " is not prime");
//   }
// }



// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// // Example: Find factorial of 5
// let number = 5;
// console.log("Factorial of " + number + " is " + factorial(number));

// function factorial(n) {
//   if (n < 0) {
//     return "Factorial is not defined for negative numbers.";
//   }

//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));     // 120
// console.log(factorial(-2));    // Error message


// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// // Example usage:
// let number = 5;
// console.log("Factorial of " + number + " is: " + factorial(number));


// 8. Split the String

// let sentence = "Hello My Name is Java Script";
// let words = sentence.split(" ");
// console.log(words);

// // // 9.
// let sentence = "apple,banana,cherry,grape";
// let limitedSplit = sentence.split(",", 2);
// console.log(limitedSplit);

// // 10. Split using Regular Expression

// let sentence = "apple123banana456cherry789";
// let splitWords = sentence.split(/\d+/); // Split by one or more digits
// console.log(splitWords);

// let sentence = "apple123banana456cherry789"; // earlier one
// let newSentence = "something else";          // use a different name
// let sentence = "apple123banana456cherry789";
// sentence = "something else"; 

// let sentence = "apple123banana456cherry789";
// let words = sentence.split(/\d+/);
// console.log(words);

// // Later in the code
// sentence = "grape111kiwi222melon";
// let moreWords = sentence.split(/\d+/);
// console.log(moreWords);


// // 11.Split Using an Empty String
// let word = "hello";
// let letters = word.split("");
// console.log(letters);

// // // 12.
// let sentence = "apple,banana|cherry grape";
// let fruits = sentence.split(/[,| ]/); // Split by comma, pipe, or space
// console.log(fruits);

// 13.

// let fruits = ["apple", "banana", "cherry", "apple"];
// console.log(fruits[0]); // "apple"
// console.log(fruits.length); // 4


// // 1. push()
// let fruits1 = ["apple", "banana", "cherry"];
// fruits1.push("orange");
// console.log("Push:", fruits1); // ["apple", "banana", "cherry", "orange"]

// // 2. pop()
// let fruits2 = ["apple", "banana", "cherry"];
// let removedPop = fruits2.pop();
// console.log("Pop:", fruits2);         // ["apple", "banana"]
// console.log("Removed (pop):", removedPop); // "cherry"

// // 3. shift() – Removing the First Element
// let fruits3 = ["apple", "banana", "cherry"];
// let removedShift = fruits3.shift();
// console.log("Shift:", fruits3);         // ["banana", "cherry"]
// console.log("Removed (shift):", removedShift); // "apple"

// // 4. unshift() – Adding to Beginning
// let fruits4 = ["banana", "cherry"];
// let newLength = fruits4.unshift("apple");
// console.log("Unshift:", fruits4);      // ["apple", "banana", "cherry"]
// console.log("New length:", newLength); // 3

// fruits4.unshift("grape", "kiwi");
// console.log("Unshift multiple:", fruits4); // ["grape", "kiwi", "apple", "banana", "cherry"]

// // 5. splice() – Removing Elements
// let fruits5 = ["apple", "banana", "cherry", "date"];
// let removedSplice1 = fruits5.splice(1, 2);
// console.log("Splice remove:", fruits5);       // ["apple", "date"]
// console.log("Removed (splice):", removedSplice1); // ["banana", "cherry"]

// // 5. splice() – Adding Elements
// let fruits6 = ["apple", "banana", "cherry"];
// fruits6.splice(2, 0, "date", "elderberry");
// console.log("Splice add:", fruits6); // ["apple", "banana", "date", "elderberry", "cherry"]

// // 5. splice() – Replacing Elements
// let fruits7 = ["apple", "banana", "cherry"];
// fruits7.splice(1, 1, "blueberry", "blackberry");
// console.log("Splice replace:", fruits7); // ["apple", "blueberry", "blackberry", "cherry"]

// // 6. concat() – Merging Arrays
// let fruits8 = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let food = fruits8.concat(vegetables);
// console.log("Concat:", food); // ["apple", "banana", "carrot", "potato"]

// // 7. slice() – Creating Subarray
// let fruits9 = ["apple", "banana", "cherry", "date"];
// let newFruits = fruits9.slice(1, 3);
// console.log("Slice result:", newFruits); // ["banana", "cherry"]
// console.log("Original after slice:", fruits9); // unchanged

// // 8. indexOf() – Finding an Index
// let fruits10 = ["apple", "banana", "cherry"];
// let index = fruits10.indexOf("banana");
// console.log("Index of 'banana':", index); // 1

// // 9. forEach() – Iterating
// let fruits11 = ["apple", "banana", "cherry"];
// console.log("forEach output:");
// fruits11.forEach(function(fruit) {
//   console.log(fruit);
// });

// // 10. map() – Transforming
// let numbers = [1, 2, 3, 4];
// let squares = numbers.map(function(number) {
//   return number * number;
// });
// console.log("Squares (map):", squares); // [1, 4, 9, 16]

// // 11. filter() – Filtering
// let numbers1 = [1, 2, 3, 4, 5];
// let evenNumbers = numbers1.filter(function(number) {
//   return number % 2 === 0;
// });
// console.log("Even numbers (filter):", evenNumbers); // [2, 4]



// 1. Objects
let person = {
  name: "John",
  age: 30,
  isEmployed: true
};

console.log(person.name);      // "John"
console.log(person["age"]);    // 30


// 2. Maps
let map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
map.set('job', 'Developer');

console.log(map.get('name'));  // "Alice"
console.log(map.size);         // 3
map.delete('age');
console.log(map.has('age'));   // false

// 3. Sets
let uniqueNumbers = new Set([1, 2, 3, 4, 5, 1, 2]);

console.log(uniqueNumbers);      // Set(5) {1, 2, 3, 4, 5}
console.log(uniqueNumbers.size); // 5
console.log(uniqueNumbers.has(3)); // true
uniqueNumbers.add(6);             // Adds 6
console.log(uniqueNumbers);       // Set(6) {1, 2, 3, 4, 5, 6}
