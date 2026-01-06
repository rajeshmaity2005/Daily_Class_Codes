// -----------------(do while loop)-----------------
// do{
//     console.log("Hello");
// }
// while (12>13)

// -----------------(Recursion in JavaScript)-----------------
// (A function is calling another function)
// function abcd(){
//     console.log("hey");
//     abcd();
// }
// abcd();

// function abcd(n){
//     if (n===0) return;
//     console.log(n);
//     abcd(n-1);
// }
// abcd(5);

// -----------------(Break and Continue in Loop)-----------------
// for (let i = 0; i<=10;i++){
//     if (i===5) break;
//     console.log(i);
// }

// for (let i = 0; i<=10;i++){
//     if (i===5) continue;
//     console.log(i);
// }

// -----------------(Function in JavaScript)-----------------
// function -> aapka code jo turant nahi chalega tab chalega jab aap bologe ki ab chalo
// aap us code ko kitni bhi bar chala sakte ho

// function khanaKhaao() {
//     console.log("Taali uthao");
//     console.log("Khaana khao");
//     console.log("Table pe aao");
//     console.log("Khaana khaalo");
//     console.log("Bartan Rakho");
// }
// khanaKhaao();
// khanaKhaao();
// khanaKhaao();
// khanaKhaao();

// function doSomething(name, age, email){
//     console.log(arguments );
// }
// doSomething("Rajesh", 20, "rajesh@gmail.com");

// --------------------(Variable/Function Hoisting)--------------------
// (Agar ap variable se function ban ne se pehle use nehi kar sakte)

// a(); /* It is not allowed. */
// var a = function(){

// }

// a(); /* It is allowed. */
// function a(){

// }

// ---------------------(Functions in JavaScript)----------------------
// Understanding Function in javascript and why its widely used - [`parameters`, `arguments`, `rest parameters` , `hoisting`, `variable Hoisting`, `Function Hoisting`]
// Code ko reuse karne main help karta hai
// function apke code ko tab chalata hai jab ap chaaho

// function alooParatha(){
//     console.log("🫓");
// }
// alooParatha();
// alooParatha();

// function abcd(age, name){
//     // parameters
// }
// abcd(12,"harsh")
// // arguments

// function abcd (a,b,...c){
//     console.log(a,b,c);
// }
// abcd(1,2,3,4,5,6,7);

// console.log(a);
// var a = 12;       /* It not showing error, it works but showing undefined. */

// console.log(a);
// let a = 12;         /* (Error) */

// abcd();
// function abcd(){
//     console.log("Hey");
// }

// abcd();
// var abcd= function(){
//     console.log("Hey");
// }

// ----------------(Parameters in JavaScript - [`required`,`rest`,`default`])----------------

// function abcd(){
//     // Agar appne parameter banaye and aapne unme arguments nahi bheje to fir wo value parameter ki undefinrd ho jaayegi
// }
// abcd();

// function abcd ({name , age}){
//     console.log(name,age);
// }
// abcd ({name: "Rajesh", age: 21});

// function abcd(...val){
//     console.log(val);
// }
// abcd (1,2,3,4,5);

// function abcd (a=0,b=0,c=0){
//     console.log(a,b,c);
// }
// abcd (1,2);

// --------------(Arguments in JavaScript-[`positional`,`default`,`spread`])-----------------

// function abcd(a, b = 4, c, d) {
//     console.log(a, b, c, d);
// }
// let arr = [1, 2, 3, 4];
// abcd(...arr);

// ---------------`Classic funcction`,`nested function`(function within function),`Scope Chain` in JavaScript.----------------

// function abcd(){
//     function defg(){
//         console.log("defg chala");
//     }
//     defg();
// }
// abcd();

// let a = 12;
// function abcd() {
//     let b = 13;
//     function defg() {
//         console.log(b);
//     }
// }
// abcd();

// ------------------Understanding Immediately Invoked Function Expression(IIFE).---------------

// (function (){
//     let balance = 5000;
// }) ();

// -----------------More function in javascript - [`Arrow Function`,`Fat Arrow`,`Anonymous`,`Higher Order`,`Callback`,`First Class`,`Pure Function`,`Impure Function`]------------------

// function abcd(){

// }

// let fnc = () => {
//     console.log("Hellooooooooooooooooooooo");
// }
// fnc();

// --------------(Anonymous function)--------------
// Without name function
// Higher Order Function -> ek aisa function jo ki return karde ek aur function
// woh function accept karle ek aur parameter main

// ----------Higher Order Function----------

// function abcd(){             /* Higher order fnc */
//     return function(){

//     }
// }

// ---------Call Back Function-----------

// function abcd(a){

// }
// abcd (function(){            /* Call Back Function */

// })

// -----------First Class Function--------------
// First class function ek concept hai -> funnctions us language mein variable ki tarah use ho sakte hai

// function abcd(a,b){

// }
// abcd(function(){

// },2)

// ----------Pure Function----------
// Pure function ek aisa function
// same input = same output

// let a = 12;
// function abcd (val){
//     console.log(val+2);
// }
// abcd(2);
// abcd(8);

// ----------Impure Function---------
// same input = different output ho sakta hai
// koi na koi side effects ho sakta hai

// let a = 12;
// function abcd (val){
//     console.log(Math.random() + val );
// }
// abcd(10);
// abcd(10);
// abcd(10);
// abcd(10);

// let a = 12;
// function abcd (val){
//     a = Math.random() + val;
//     console.log(a);
// }
// abcd(10);
// abcd(10);
// abcd(10);
// abcd(10);

// ------------Understanding `Closures`,`Scoping Rule`------------
// Closure -> Ek function hai jo return karta hai function but returning functionn jo hai woh parent function ka koi variable use karega

// function abcd() {
//     let a = 12;
//     return function () {
//         console.log(a);
//     }
// }

// _______________(ARRAYS)______________
// ---------------What are Arrays in javascript and how to create an array.--------------
// Arrays -> ek se jaada members rakhne ki jagah
// Understanding how to accessing elements in array.

// let arr = [234, 345, 567, 7865, 6785, 5678]
// console.log(arr[5]);

// let arr = [];
// let arr2 = new Array();

// -------------Functions on arrays - [`push`,`pop`,`shift`,`unshift`,`indexOf`,`array destructuring`,`filter`,`some`,`map`,`reduce`,`spread operator`,`slice`,`reverse`,`sort`,`join`,`toString`]-------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.push(11);
// arr.pop(11);
// arr.shift(11);
// arr.unshift(0);
// arr.indexOf(4);
// let [a, ,b]=arr;

// --------Filter-------
// let arr = [1, 2, 3, 4];
// let arr2 = arr.filter(function (val) {
//     return val < 3;
// })

// -------Spread operator-------
// let arr = [1, 2, 3, 4];
// let arr2 = [...arr];

// --------Iteratig over arrays using - [`For loop`,`forEach`]-------
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i<=4;i++){
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (val) {
//     console.log(val);
// });

// --------Understanding what are objects in javascript-[`key-value pair`]--------

// let obj = {
//     name: "Rajesh",
//     age: 21,
//     email:"rajesh@gmail.com"
// };

// --------Creating objects, Accessing Properties, Deleting Property and Nested Objects.--------
/*For accessing the value of object we can use (obj.name) & (obj['name']) */
/*For deleting the object we can use (delete obj.name)*/

// let obj = {
//     name: "Rajesh",
//     socials: {
//         instagram: "jhsbdf",
//         facebook: "jhdfuy"
//     }
// };