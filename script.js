// var a = Math.random() * 100
// var b = Math.floor(a)
// console.log(b);

// var a = Math.floor(Math.random()*100)
// console.log(a);




// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)

//     console.log(c1,c2,c3);
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })




// var arr = ['adyant','abhi','megha','sumit','satwik','souvik']

// var a = Math.floor(Math.random()*arr.length)

// console.log(arr[a]);




var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black'
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'silver'
    }
]

// var a = Math.floor(Math.random()*arr.length)
// console.log(arr[a]);




// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var main = document.querySelector('main')

// btn.addEventListener('click', function () {
//     var num = Math.floor(Math.random() * arr.length)
//     console.log(arr[num])
//     // console.log(arr[num].team)

//     h1.innerHTML = arr[num].team
//     h1.style.backgroundColor = arr[num].secondary
//     main.style.backgroundColor = arr[num].primary




var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click', function () {
    var winner = arr[Math.floor(Math.random() * arr.length)]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    h1.style.color = winner.primary
    main.style.backgroundColor = winner.primary
})