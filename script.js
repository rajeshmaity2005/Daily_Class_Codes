
const h1 = document.querySelector('h1')
const box = document.querySelector('#box')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = h1.innerText
let iteration = 0;
function randomText() {
  const str = text.split('').map((char, idx) => {
    if (idx < iteration) {
      return char
    }
    return characters.split('')[Math.floor(Math.random() * 53)]
  }).join("")
  h1.innerText = str

  iteration += 0.9;
}

box.addEventListener('mouseenter', function () {
  setInterval(randomText, 60)
})
