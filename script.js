const para = document.querySelector('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let iteration = 0;


function randomText() {
  const str = text.split('').map((char, idx) => {
    if (idx < iteration) {
      return char
    }
    return characters.split('')[Math.floor(Math.random() * 53)]
  }).join("")
  para.innerText = str

  iteration += 0.4;
}

para.addEventListener('mouseenter', function () {

  setInterval(randomText, 30)
})