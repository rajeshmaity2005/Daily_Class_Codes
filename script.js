// for (let i = 1; i<=10;i++){
//     console.log(i)
// }

// for (let i=1 ; i <=20;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

// for (let i=10;i>=1;i--){
//     console.log(i)
// }

// for (let i=1 ;i<=5;i++){
//     console.log("Yes")
// }

// for (let i=1;i<=10;i++){
//     if (i%2==0){
//         console.log(`${i} is Even.`)
//     }else {
//         console.log(`${i} is Odd.`)
//     }
// }

// let num=prompt("Enter a Number : ")
// if (num%2==0) console.log(`${num} is Even.`)
//     else console.log(`${num} is Odd.`)

// let num=prompt("Enter a Number : ")
// if (num>=0) console.log(`${num} is Positive Number.`)
//     else console.log(`${num} is Negative Number.`)

// for (let i = 1;i<=10;i++)(
//     console.log(`5 X ${i} = ${i*5}`)
// )

// let age = +prompt("Enter your Age : ")
// if (age >= 18) console.log("You are eligible for vote.")
// else console.log("You are not eligible for vote.")

// let age = prompt("Enter age : ")
// if (age === null) {
//     console.error("You Cancelled it.")
// }
// else {
//     if (age.trim() === "") {
//         console.log("Bro What are you doing.......")
//     }
//     else {
//         age = Number(age.trim());
//         if (isNaN(age)) {
//             console.error("Bhai, Please give a number.......")
//         }
//         else {
//             if (age < 0) console.log("Your age can't below 0.....")
//             else {
//                 if (age >= 18) console.log("You are eligible for vote.")
//                 else console.log("You are not eligible for vote.")
//             }
//         }
//     }
// }

// for (let i = 1; i<=10;i++) console.log(`5 X ${i} = ${i*5}`)

// let count = 0;
// for (let i = 1; i<=15;i++) {
//     if (i>8){
//         count++;
//     }
// }
// console.log(count);

// let password = "Rajesh@123"
// let pass = prompt("Enter Password")
// if (pass === null) {
//     console.error("You Cancelled It.");
// }





// let age = prompt("Enter age : ")
// if (age === null) {
//     console.error("You Cancelled it.")
// }
// else {
//     if (age.trim() === "") {
//         console.log("Please write something.......")
//     }
//     else {
//         age = Number(age.trim());
//         if (isNaN(age)) {
//             console.error("Bhai, Please give a number.......")
//         }
//         else {
//             if (age < 0) console.error("Your age can't below 0.....")
//             else {
//                 if (age >= 18) console.log("You are eligible for vote.")
//                 else console.log("You are not eligible for vote.")
//             }
//         }
//     }
// }





// let age = prompt("Enter your age.");
// if (age === null) {
//     console.log("You Cancelled it.");
// }
// else {
//     if (age.trim() === "") {
//         console.log("Please write something.");
//     }
//     else {
//         age = Number(age.trim());
//         if (isNaN(age)) {
//             console.log("Please enter a Number not a string. ");
//         }
//         else {
//             if (age < 0) {
//                 console.log("Invalid Number");
//             }
//             else {
//                 if (age >= 18) {
//                     console.log("You can vote.");
//                     console.log(`Your age is ${age}.`)
//                 }
//                 else {
//                     console.log("You can't vote.");
//                 }
//             }
//         }
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 X ${i} = ${5 * i}`);
// }

// let count =0;
// for (let i = 1;i<=15;i++){
//     if (i>8){
//         count++;
//     }
// }
// console.log(count);

// let password ="Rajesh@123"
// let pass = prompt("Enter yor password: ");
// if (pass === null){
//     console.error("You Cancelled it.");
// }
// else{
//     if (pass.trim()===""){
//         console.log("Please Enter your Password.");
//     }
//     else{
//         if (pass===password){
//             console.log("Logged in Successfully.");
//         }
//         else {
//             console.log("Incorrect Password.");
//         }
//     }
// }



// (______CHATGPT CODE CORRECTION AND IMPROVEMENT______)
// let password = "Admin@123";
// let count = 0;

// while (count < 3) {
//     let pass = prompt("Enter your password: ");

//     if (pass === null) {
//         console.log("You cancelled it.");
//         break;
//     }

//     if (pass.trim() === "") {
//         console.log("Please Enter Your Password.");
//         continue;
//     }

//     if (pass === password) {
//         console.log("Logged in Successfully.");
//         break;
//     }
//     else {
//         count++;
//         console.log("Incorrect Password. Attempt: " + count);
//     }

//     if (count === 3) {
//         console.log("You have exceeded the maximum number of attempts. Account Blocked.");
//     }
// }

// let attempts = 0;
// let khulgaya = false;
// let password = "Rajesh@123"
// let pass = prompt("Enter your password: ");
// attempts++;
// if (pass === password) khulgaya = true;
// while (pass !== password) {
//     if (attempts === 3) {
//         console.error("Account Blocked.");
//         break;
//     }
//     pass = prompt("Incorrect Password. Please Enter Again: ");
//     if (pass === password) khulgaya = true;
//     attempts++;
// }
// if (khulgaya === true) console.log("Logged in Successfully.");

// let attempts = 0;
// let password = "1234";
// let Oppened = false;
// let pass = prompt("Enter your password: ");
// attempts++;
// if (pass === password) Oppened = true;
// while (pass !== password) {
//     if (attempts === 3) {
//         console.error("Account Blocked.");
//         break;
//     }
//     pass = prompt("Incorrect password. Please Enter Again: ");
//     if (pass === password) Oppened = true;
//     attempts++;
// }
// if (Oppened === true) console.log("Logged in Successfully.");

// let name=prompt("Enter your name: ");
// console.log(`Hello, ${name}! Welcome to our website.`);

// let num = prompt("Enter a number: ");
// if (num %2==0){
//     console.log(`${num} is Even.`);
// }
// else {
//     console.log(`${num} is Odd.`);
// }

// let password = "admin"
// let pass = prompt("Enter your password: ");
// if (pass=== password ){
//     console.log("Access Granted.");
// }
// else{
//     console.log("Access Denied.");
// }

// let type=prompt("Enter anything:");
// if (type.trim()===""){
//     console.log("You entered nothing.");
// }

// let password = "123"
// let attempts = 0;
// let pass = prompt("Enter Password:");
// attempts++;
// while (pass !== password) {
//     if (attempts === 2) {
//         console.log("Try agin later.");
//         break;
//     }
//     pass = prompt("Incorrect Password. Please Enter Again:");
//     attempts++;
//     if (pass === password) {
//         console.log("Logged in Successfully.");
//         break;
//     }
// }

// let pin ="5678"
// let attempts =0;
// let access= false;
// let enterPin=prompt("Enter Your Pin: ");
// attempts++;
// if (enterPin===pin) access=true;
// while(enterPin!==pin){
//     if (attempts===3){
//         console.log("Card Blocked.");
//         break;
//     }
//     enterPin=prompt("Incorrect Pin. Please Enter Again: ");
//     attempts++;
//     if (enterPin===pin) access=true;
// }
// if (access===true) console.log("Access Granted.");

// _____________________(Password Problem)____________________
//pehla password mango
//galat 
//password
//galat
//password
//error

// let attempt=0;
// let password="admin"

// let pass=prompt("Enter your password: ");
// attempt++;

// while (pass!==password){
//     if (attempt===3){
//         console.error("Account Blocked.");
//         break;
//     }
//     pass=prompt("Incorrect Password. Please Enter Again: ");
//     attempt++;
// }
// if (pass===password) console.log("Logged in Successfully.");

// ____________________(OR)____________________
// let attempt = 0;
// let password = "admin"

// let pass = prompt("Enter your password: ");
// attempt++;  

// while (attempt < 3 && pass !== password){
//     pass = prompt("Incorrect Password. Please Enter Again: ");
//     attempt++;
// }

// if (attempt === 3 && pass !== password){
//     console.error("Account Blocked.");
// } else {
//     console.log("Logged in Successfully.");
// }

// ____________________(Ask user for words until they type "stop". Count how many times they typed "yes")____________________

// let word = prompt("Enter a word (type 'stop' to end): ");
// let counter = 0;

// while (word != "stop") {
//     if (word === "yes") {
//         counter++;
//     }
//     word = prompt("Enter a word (type 'stop' to end): ");
// }
// console.log(`You typed "yes" ${counter} times.`);

// ____________________(Print numbers divisible by 7 from 1 to 50, Use moduo operator (%) and loop)____________________

// console.log("The number which is divisible by 7 is: ");
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

// ____________________(Sum of all odd numbers from 1 to 30 and only odd numbers.Print final sum.)____________________

// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }
// console.log(`The sum of all odd numbers from 1 to 30 is: ${sum}`);

// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 1) {
//         sum += i;
//     }
// }
// console.log(`The sum of all odd numbers from 1 to 30 is: ${sum}`);

// ____________________(Keep asking number untill user enters an even number, Use while loop. Stop only if input is even.____________________)

// let num = +prompt("Enter a number: ");
// while (num % 2 !== 0) {
//     num = +prompt("That's an odd number. Please enter an even number: ");
// }
// if (num % 2 === 0) {
//     console.log(`Thank you! ${num} is an even number.`);
// }

// ____________________(Print numbers between two user inputs Input start and end using prompt() -> Print all between.)____________________

// console.log("Numbers between your inputs are: ");
// let start = +prompt("Enter the starting number: ");
// let end = +prompt("Enter the ending number: ");
// if (start > end) {
//     console.error("Invalid Range. Starting number should be less than or equal to ending number.");
// }
// for (let i = start; i<=end;i++){
//     console.log(i);
// }

// ____________________(Print only first 3 odd numbers from 1 to 20 using loop. Stop with break after 3 odd prints.)____________________

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//     if (count === 3) break;
//     if (i % 2 !== 0) {
//         count++;
//         console.log(i);
//     }
// }

// ____________________(Ask user 5 numbers. Count how many are positive Use loop + condition + counter.)____________________

// let count = 0;
// for (let i = 1; i <= 5; i++) {
//     let num = +prompt(`Enter number ${i} : `);
//     if (num >= 0) {
//         count++;
//     }
// }
// console.log(`You entered ${count} positive numbers.`);

// ____________________(ATM Simulator - Allow 3 withdrawals amount 3 times. If enough balance -> deduct      Else -> Print "Insufficient Balnce")____________________

// let balance = 1000;
// let flag = false;

// let counter = 0;
// while (balance > 0 && counter !== 3) {
//     let withdraw = +prompt("Enter amount to withdraw: ");
//     counter++;
//     if (withdraw <= balance) {
//         balance -= withdraw;
//     }
//     else {
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     console.log("Insufficient Balance.");
// }
// console.log(`Your remaining balance is: ${balance}`);

// ____________________(ATM Simulator - Allow 3 withdrawals amount 3 times. If enough balance -> deduct      Else -> Print "Insufficient Balnce")____________________

// let balance = 1000;
// let counter = 0;
// let flag = false;

// while (balance > 0 && counter !== 3) {
//     let withdraw = prompt("Enter amount to withdraw: ");
//     counter++;
//     if (withdraw <= balance) {
//         balance -= withdraw;
//     } else {
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     console.log("Insufficient Balance.");
// }
// console.log(`Remaining balance is ${balance}`);

// let balance = 1000;
// let counter = 0;
// let flag= false;

// while (balance > 0 && counter !== 3) {
//     let withdraw = prompt("Enter amount: ");
//     counter++;
//     if (withdraw<=balance){
//         balance -= withdraw;
//     }
//     else {
//         flag = true;
//         break;
//     }
// }
// if (flag === true){
//     console.log("Insufficient Balance.");
// }
// console.log(`Your remaining balance is ${balance}`);

yeyyeyeyeyeyeye