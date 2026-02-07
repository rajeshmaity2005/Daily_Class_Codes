// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//     // console.log('Hello Brother')
//     h1.innerHTML = 'Hello Brother'
//     h1.style.color = 'brown'
// })

// var h1 = document.querySelector('h1')
// var inc = document.querySelector('#inc')
// var dec = document.querySelector('#dec')

// var a = 0;
// inc.addEventListener('click', function () {
//     a++;
//     h1.innerHTML = a
// })
// dec.addEventListener('click', function () {
//     a--;
//     h1.innerHTML = a
// })


// var bulb = document.querySelector('#bulb')
// var btn = document.querySelector('button')

// let flag = 0;
// btn.addEventListener('click', function () {

//     if (flag == 0) {
//         bulb.style.backgroundColor = 'yellow'
//         console.log("heueuehd");
//         flag = 1;
//     }
//     else {
//         bulb.style.backgroundColor = 'transparent'
//         console.log("bgbgggnggnheueuehd");
//         flag = 0;
//     }
// })

var h = document.querySelectorAll('h1')
console.log(h);

h.forEach(function (e) {
    console.log(e)
})