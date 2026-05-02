Task- Piano








const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");



    // random size
    //   const size = Math.random() * 50 + 30;
    //   bubble.style.width = size + "px";
    //   bubble.style.height = size + "px";

    bubble.style.height = '100px';
    bubble.style.width = '100px';

    // random position
    bubble.style.left = Math.random() * window.innerWidth + "px";
    //   bubble.style.left = '50%';

    //Random Color
    var r = Math.random() * 40 + 150;
    var g = Math.random() * 40 + 150;
    var b = Math.random() * 40 + 150;
    var t = Math.random() * 1;
    bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${t})`

    // random speed
    const duration = Math.random() * 5 + 10;
    bubble.style.animationDuration = duration + "s";

    // 🎯 random letter inside bubble
    bubble.textContent = getRandomLetter();
    bubble.style.fontSize = '40px'

    document.getElementById("container").appendChild(bubble);

    // remove after animation
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// 🔁 auto loop (repeat)
setInterval(createBubble, 400);






// btn.addEventListener('click', function () {
//     // btn.style.display = "none";
//     btn.innerHTML = "Stop";

//     const box = document.getElementById("box");
//     box.style.bottom = "45%";

//     console.log(key);
// })






body.addEventListener('keydown', function (dets) {
    // console.log(dets.code);
    if (dets.code == 'KeyA') {
        new Audio("./sounds/21.mp3").play();
    } else if (dets.code == 'KeyA') {
        new Audio("./sounds/28.mp3").play();
    } else if (dets.code == 'KeyB') {
        new Audio("./sounds/34.mp3").play();
    } else if (dets.code == 'KeyC') {
        new Audio("./sounds/40.mp3").play();
    } else if (dets.code == 'KeyD') {
        new Audio("./sounds/46.mp3").play();
    } else if (dets.code == 'KeyE') {
        new Audio("./sounds/53.mp3").play();
    } else if (dets.code == 'KeyF') {
        new Audio("./sounds/66.mp3").play();
    } else if (dets.code == 'KeyG') {
        new Audio("./sounds/72.mp3").play();
    } else if (dets.code == 'KeyH') {
        new Audio("./sounds/78.mp3").play();
    } else if (dets.code == 'KeyI') {
        new Audio("./sounds/84.mp3").play();
    } else if (dets.code == 'KeyJ') {
        new Audio("./sounds/90.mp3").play();
    } else if (dets.code == 'KeyK') {
        new Audio("./sounds/96.mp3").play();
    } else if (dets.code == 'KeyL') {
        new Audio("./sounds/102.mp3").play();
    } else if (dets.code == 'KeyM') {
        new Audio("./sounds/108.mp3").play();
    } else if (dets.code == 'KeyN') {
        new Audio("./sounds/21.mp3").play();
    } else if (dets.code == 'KeyO') {
        new Audio("./sounds/28.mp3").play();
    } else if (dets.code == 'KeyP') {
        new Audio("./sounds/34.mp3").play();
    } else if (dets.code == 'KeyQ') {
        new Audio("./sounds/40.mp3").play();
    } else if (dets.code == 'KeyR') {
        new Audio("./sounds/21.mp3").play();
    } else if (dets.code == 'KeyS') {
        new Audio("./sounds/108.mp3").play();
    } else if (dets.code == 'KeyT') {
        new Audio("./sounds/28.mp3").play();
    } else if (dets.code == 'KeyU') {
        new Audio("./sounds/96.mp3").play();
    } else if (dets.code == 'KeyV') {
        new Audio("./sounds/90.mp3").play();
    } else if (dets.code == 'KeyW') {
        new Audio("./sounds/84.mp3").play();
    } else if (dets.code == 'KeyX') {
        new Audio("./sounds/66.mp3").play();
    } else if (dets.code == 'KeyY') {
        new Audio("./sounds/40.mp3").play();
    } else if (dets.code == 'KeyZ') {
        new Audio("./sounds/53.mp3").play();
    }
})







<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="container"></div>

    <div id="btn1">
        <button>Start</button>
    </div>

    <script src="script.js"></script>
</body>

</html>


















body {
  margin: 0;
  overflow: hidden;
  background: black;
}

#container {
  /* position: fixed; */
  width: 100%;
  height: 100%;
}

.bubble {
  position: absolute;
  bottom: -60px;
  border-radius: 50%;
  background: rgb(255, 207, 207);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  animation: floatUp linear forwards;
}

/* animation */
@keyframes floatUp {
  to {
    transform: translateY(-110vh);
  }
}

button{
  background-color: crimson;
  border-radius: 5px;
  color: white;
  font-size: 30px;
  padding: 20px 40px;
  border: none;
  margin: 30px;
}








































var btn = document.querySelector('button')
var body = document.querySelector('body')


btn.addEventListener('click', function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function getRandomLetter() {
        return letters[Math.floor(Math.random() * letters.length)];
    }

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");



        // random size
        //   const size = Math.random() * 50 + 30;
        //   bubble.style.width = size + "px";
        //   bubble.style.height = size + "px";

        bubble.style.height = '100px';
        bubble.style.width = '100px';

        // random position
        bubble.style.left = Math.random() * window.innerWidth + "px";
        //   bubble.style.left = '50%';

        //Random Color
        var r = Math.random() * 40 + 150;
        var g = Math.random() * 40 + 150;
        var b = Math.random() * 40 + 150;
        var t = Math.random() * 1;
        bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${t})`

        // random speed
        const duration = Math.random() * 5 + 10;
        bubble.style.animationDuration = duration + "s";

        // 🎯 random letter inside bubble
        bubble.textContent = getRandomLetter();
        let randomLetter = getRandomLetter();
        bubble.dataset.letter = randomLetter;
        
        bubble.style.fontSize = '40px'
        
        document.getElementById("container").appendChild(bubble);

        // remove after animation
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // 🔁 auto loop (repeat)
    setInterval(createBubble, 1000);



    addEventListener('keydown', function (press) {
        if (bubble.dataset.letter === press.key) {
            bubble.style.backgroundColor = "red";
            bubble.remove();

            console.log(press.key);
        }

    })








    // btn.addEventListener('click', function () {
    //     // btn.style.display = "none";
    //     btn.innerHTML = "Stop";

    //     const box = document.getElementById("box");
    //     box.style.bottom = "45%";

    //     console.log(key);
    // })






    body.addEventListener('keydown', function (dets) {
        // console.log(dets.code);
        if (dets.code == 'KeyA') {
            new Audio("./sounds/21.mp3").play();
        } else if (dets.code == 'KeyA') {
            new Audio("./sounds/28.mp3").play();
        } else if (dets.code == 'KeyB') {
            new Audio("./sounds/34.mp3").play();
        } else if (dets.code == 'KeyC') {
            new Audio("./sounds/40.mp3").play();
        } else if (dets.code == 'KeyD') {
            new Audio("./sounds/46.mp3").play();
        } else if (dets.code == 'KeyE') {
            new Audio("./sounds/53.mp3").play();
        } else if (dets.code == 'KeyF') {
            new Audio("./sounds/66.mp3").play();
        } else if (dets.code == 'KeyG') {
            new Audio("./sounds/72.mp3").play();
        } else if (dets.code == 'KeyH') {
            new Audio("./sounds/78.mp3").play();
        } else if (dets.code == 'KeyI') {
            new Audio("./sounds/84.mp3").play();
        } else if (dets.code == 'KeyJ') {
            new Audio("./sounds/90.mp3").play();
        } else if (dets.code == 'KeyK') {
            new Audio("./sounds/96.mp3").play();
        } else if (dets.code == 'KeyL') {
            new Audio("./sounds/102.mp3").play();
        } else if (dets.code == 'KeyM') {
            new Audio("./sounds/108.mp3").play();
        } else if (dets.code == 'KeyN') {
            new Audio("./sounds/21.mp3").play();
        } else if (dets.code == 'KeyO') {
            new Audio("./sounds/28.mp3").play();
        } else if (dets.code == 'KeyP') {
            new Audio("./sounds/34.mp3").play();
        } else if (dets.code == 'KeyQ') {
            new Audio("./sounds/40.mp3").play();
        } else if (dets.code == 'KeyR') {
            new Audio("./sounds/21.mp3").play();
        } else if (dets.code == 'KeyS') {
            new Audio("./sounds/108.mp3").play();
        } else if (dets.code == 'KeyT') {
            new Audio("./sounds/28.mp3").play();
        } else if (dets.code == 'KeyU') {
            new Audio("./sounds/96.mp3").play();
        } else if (dets.code == 'KeyV') {
            new Audio("./sounds/90.mp3").play();
        } else if (dets.code == 'KeyW') {
            new Audio("./sounds/84.mp3").play();
        } else if (dets.code == 'KeyX') {
            new Audio("./sounds/66.mp3").play();
        } else if (dets.code == 'KeyY') {
            new Audio("./sounds/40.mp3").play();
        } else if (dets.code == 'KeyZ') {
            new Audio("./sounds/53.mp3").play();
        }
    })

})
