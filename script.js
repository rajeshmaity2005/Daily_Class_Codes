
// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)


// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
// function sayHello(){
//     console.log("Hello JavaScript");
// }

// sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.
// function add(a, b){
//     return a+b;
// }
// let sum = add(1, 3);
// console.log(sum);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
// function greeting(guest="Guest"){
//     console.log(`Hello ${guest}`);
// }
// greeting("Rajesh");

// 4. Use rest parameters to make a function that adds unlimited numbers.
// function addUnlimited(...nums) {
//     let sum = 0;
//     nums.forEach(function (val) {
//         sum = sum + val;
//     });
//     console.log(sum)
// }
// addUnlimited(1, 2, 3, 4, 5, 6, 7, 8, 9, 5);

// function addUnlimited(...nums){
//     let sum = 0;
//     for (let i = 0;i<nums.length;i++){
//         sum+=nums[i];
//     }
//     console.log(sum);
// }
// addUnlimited(1, 2, 3, 4, 5);

// function addUnlimited(...nums) {
//     let ans = nums.reduce(function (acc, val) {
//         return acc + val;
//     }, 0);
//     console.log(ans);
// }
// addUnlimited(1, 2, 3);

// 5. Create an IIFE that prints `"I run instantly!"`.
// (function(){
//     console.log("I run instantly!")
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.
// function parent(){
//     let a = 12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// parent();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// let arr= ["apple","guava","grapes","mango","banana"];
// arr.push("Graves");
// arr.shift("Graves");

// 8. Use a `for` loop to print all elements of an array.
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
// let obj = {
//     name: "Rajesh",
//     age: 21,
//     city: "Kendrapara",
// };
// for (let key in obj){
//     console.log(key);
// }
// for (let key in obj){
//     console.log(obj[key]);
// }

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
// setTimeout(function(){
//     console.log("Time's up")
// },2000);


// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)


// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
// function runTwice(fn){
//     fn();
//     fn();
// }
// runTwice(function(){
//     console.log("Hello Everyone!!");
// });

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// function pure(a, b) {
//     console.log(a + b);
// }
// pure(1, 2);
// pure(1, 2);

// let val = 0;
// function impure(a) {
//     val++;
//     console.log(a + val);
// }
// impure(2);
// impure(2);

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
// function abcd({ name, age }) {
//     console.log(name, age);
// }
// abcd({ name: "Rajesh", age: 21 });

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
// this keyword
// this ek aisa keyword hai jo ki dynamic hai iski value badal jaati hai bar bar
// console.log(this);
// --
// function abcd(){
//     console.log(this);
// }
// abcd();
// --
// let obj = {
//     name: "Rajesh",
//     fnc: function () {
//         console.log(this);
//     },
//     fnc2: () => {
//         console.log(this);
//     }
// };
// obj.fnc();
// obj.fnc2();
// --
// let obj = {
//     name: "Rajesh",
//     fnc: function () {
//         let fnc2 = () => {
//             console.log(this);
//         }
//         fnc2();
//     },
// };
// obj.fnc();
// --
// let obj ={
//     name:"Rajesh",
//     fnc: function (){
//         function fnc2(){
//             console.log(this);
//         }
//         fnc2();
//     },
// };
// obj.fnc();

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
// let arr = [1,2,3,4,5,6];
// let newarr = arr.map(function (val){
//     return val * val;
// });
// console.log(newarr);

// 6. Use `filter()` to get only even numbers from an array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newarr = arr.filter(function (val) {
//     return val % 2 === 0;
// });
// console.log(newarr);

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
// let salary = [1000, 2000, 3000];
// let totalSalary = salary.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(totalSalary);

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// let names=["Rajesh","Mohit","Ganesh","Rohit","Ali","Om"];
// let ans = names.some(function(val){
//     return val.length>3;
// });
// console.log(ans);
// --
// let names=["Rajesh","Mohit","Ganesh","Rohit","Ali","Om"];
// let ans = names.every(function(val){
//     return val.length>3;
// });
// console.log(ans);

// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// let user = {
//     name: "Rajesh",
//     age: 21,
//     email: "maityrajesh@gmail.com"
// }
// Object.freeze(user);
// user.age=31;
// --
// let user = {
//     name: "Rajesh",
//     age: 21,
//     email: "maityrajesh@gmail.com"
// }
// Object.seal(user);
// user.name = "Sidhhu"
// user.social = "Instagram";

// 10. Create a nested object (`user → address → city`) and access the city name inside it.
// let obj = {
//     user: {
//         name: "Rajesh",
//         address: {
//             city: "Kendrapara",
//         },
//     },
// };
// let { city } = obj.user.address;

