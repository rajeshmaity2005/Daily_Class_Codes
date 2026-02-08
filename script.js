var stranger = document.querySelector('h5')
var btn = document.querySelector('button')

var flag = 0;

btn.addEventListener('click', function () {


    if (flag == 0) {
        stranger.style.color = 'green'
        stranger.innerHTML = 'Friend'
        btn.textContent = 'Remove Friend'
        flag = 1;
        btn.style.backgroundColor = 'rgb(206, 206, 206)'
        btn.style.color = 'white'
    } else {
        stranger.style.color = 'red'
        stranger.innerHTML = 'Stranger'
        flag = 0;
        btn.textContent = 'Add Friend'
        btn.style.backgroundColor = 'cornflowerBlue'
        btn.style.color = 'white'
    }
})