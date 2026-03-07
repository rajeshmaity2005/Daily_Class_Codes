var grow = 0

var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var p = document.querySelector('p')
var inner = document.querySelector('.inner')

btn.addEventListener('click', function () {

    btn.style.pointerEvents = 'none'

    var num = 50 + Math.floor(Math.random() * 50)

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow + '%'
        inner.style.width = grow + '%'
        btn.innerHTML = 'Downloading...'
        btn.style.backgroundColor = 'gray'

    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        console.log('Downloaded in ' , num/10 , ' seconds');
        p.innerHTML = 'Download Successfully'


    }, num * 100);
})