// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//     // console.log('Hello Brother')
//     h1.innerHTML = 'Hello Brother'
//     h1.style.color = 'brown'
// })

var h1 = document.querySelector('h1')
var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')

var a = 0;
inc.addEventListener('click', function () {
    a++;
    h1.innerHTML = a
})
dec.addEventListener('click', function () {
    a--;
    h1.innerHTML = a
})