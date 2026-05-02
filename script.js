var body = document.querySelector('body')
var btn = document.querySelector('button')
var container = document.querySelector('#container')
var hearts = document.querySelectorAll('i');

let miss = 0;
let interval;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = "60px";
    bubble.style.height = "60px";
    bubble.style.left = Math.random() * (window.innerWidth - 100) + "px";

    const duration = 5; // bubble visible time
    bubble.style.animationDuration = duration + "s";

    var lett = getRandomLetter();
    bubble.textContent = lett;

    bubble.style.fontSize = '40px';
    bubble.style.color = 'white';
    bubble.style.backgroundColor = 'rgba(0, 225, 255, 0.29)';

    container.appendChild(bubble);

    // Correct key removes bubble
    function handleKey(dets) {
        if (lett.toLowerCase() === dets.key.toLowerCase()) {
            bubble.remove();
            new Audio("./sounds/u_o8xh7gwsrj-app_interface_click_2-476372.mp3").play();
            console.log("Correct");
            body.removeEventListener("keydown", handleKey);
        }
    }

    body.addEventListener("keydown", handleKey);

    // If bubble not removed = miss
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.remove();
            miss++;
            console.log("Miss:", miss);

            // Make heart red on every miss
            if (miss === 1) {
                document.querySelectorAll("i")[0].style.color = "red";
                new Audio("./sounds/dragon-studio-tennis-ball-hit-386155.mp3").play();
            }
            if (miss === 2) {
                document.querySelectorAll("i")[1].style.color = "red";
                new Audio("./sounds/dragon-studio-tennis-ball-hit-386155.mp3").play();
            }
            if (miss === 3) {
                document.querySelectorAll("i")[2].style.color = "red";
                new Audio("./sounds/dragon-studio-tennis-ball-hit-386155.mp3").play();
            }
            if (miss === 4) {
                document.querySelectorAll("i")[3].style.color = "red";
                new Audio("./sounds/dragon-studio-tennis-ball-hit-386155.mp3").play();
            }
            if (miss === 5) {
                document.querySelectorAll("i")[4].style.color = "red";
                new Audio("./sounds/dragon-studio-tennis-ball-hit-386155.mp3").play();
            }



            bubble.addEventListener("click", function () {
                bubble.remove();

                new Audio("./sounds/u_o8xh7gwsrj-app_interface_click_2-476372.mp3").play();

                console.log("Bubble Clicked");
            });


            body.removeEventListener("keydown", handleKey);

            if (miss === 5) {
                clearInterval(interval);
                console.log('Game Over');

                container.textContent = 'Game Over';
                container.style.color = 'white';
                container.style.backgroundColor = 'rgb(255, 0, 0)';
                container.style.fontSize = '150px';
                container.style.fontWeight = '900';
                container.style.fontFamily = 'monospace';
            }
        }
    }, duration * 778);
}

btn.addEventListener('click', function () {
    btn.style.display = 'none';
    interval = setInterval(createBubble, 1000);
});