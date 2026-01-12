// Selection of an element
// var h1 = document.querySelector('h1')
// var h2 = document.querySelector('h2')
// console.log(h1)

// Changing HTML using JS
// var h1 = document.querySelector('h1')
// h1.innerHTML="Changed"

// Changing CSS using JS
// var h1 = document.querySelector('h1')
// h1.innerHTML="DOM is working now!"
// h1.style.color="red"
// h1.style.backgroundColor="white"

// For Event listeners
// var box = document.querySelector('#box')
// box.innerHTML='heyheyheyeyeyey'
// box.style.backgroundColor = 'royalblue'

// var h1 = document.querySelector('h1')
// h1.style.color = 'gold'
// h1.addEventListener('click',function(){
//     console.log("Hello it is clicked.");
// })

// var h1 = document.querySelector('h1')
// h1.addEventListener('click', function(){
//     console.log("Hello Clicked!!");
// })

// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     h1.innerHTML= 'Hello, Guys How are you??'
//     h1.style.color='yellow'
//     h1.style.fontSize='50px'
// })

// var h1 = document.getElementById('hero')
// var h1 = document.getElementsByClassName('xyz')

// var h1 = document.querySelectorAll('h1')
// console.log(h1);


var h2 = document.querySelector('h2')
var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')

let a = 0
inc.addEventListener('click', function () {
    a++
    h2.innerHTML = a
})
dec.addEventListener('click', function () {
    a--
    h2.innerHTML = a
})