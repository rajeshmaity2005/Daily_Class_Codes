var arr = [
    { dp: "https://imgs.search.brave.com/0lBjAcLU0sYzlJCrZypOT_M0mMPgNFwXxFuDGavY4Vs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzc5/MjgzOC9wZXhlbHMt/cGhvdG8tNzc5Mjgz/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", story: "https://imgs.search.brave.com/eg4-GCkj3EQM2fvWv7tCQxHxvVJ_KpWOcfpCy5QmnPE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/MDAzLzUyNi9zbWFs/bC95b3VuZy1idXNp/bmVzc21hbi13ZWFy/aW5nLXN1aXQtb3Zl/ci13aGl0ZS1iYWNr/Z3JvdW5kLXN0dWRp/by1waG90by5qcGc" },
    { dp: "https://imgs.search.brave.com/2YJUPxR4d9588tR8CC7uvtdxJGr7V2nN30P2ewBImzQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM5LzUzLzYw/LzM2MF9GXzEzOTUz/NjA4Nl95eG80RERB/Z0JNS0N4d2dkcDhL/SnZ6cFpnbk1DOENw/eC5qcGc", story: "https://imgs.search.brave.com/2YJUPxR4d9588tR8CC7uvtdxJGr7V2nN30P2ewBImzQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM5LzUzLzYw/LzM2MF9GXzEzOTUz/NjA4Nl95eG80RERB/Z0JNS0N4d2dkcDhL/SnZ6cFpnbk1DOENw/eC5qcGc" },
    { dp: "https://imgs.search.brave.com/InLzmhdqyn-bD429ZUdpyU5OUIUTYIUriyRaycv3kUI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzgzMjcyNi9waG90/by9wb3J0cmFpdC1v/Zi1hLXNtaWxpbmct/eW91bmctYnVzaW5l/c3NtYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTMyUWc3/VG5xZkdrckR3VEwz/cTBYMEt4OWFiM0pE/enVxeHpwNHBvSDM5/emM9", story: "https://imgs.search.brave.com/InLzmhdqyn-bD429ZUdpyU5OUIUTYIUriyRaycv3kUI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzgzMjcyNi9waG90/by9wb3J0cmFpdC1v/Zi1hLXNtaWxpbmct/eW91bmctYnVzaW5l/c3NtYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTMyUWc3/VG5xZkdrckR3VEwz/cTBYMEt4OWFiM0pE/enVxeHpwNHBvSDM5/emM9" },
    { dp: "https://imgs.search.brave.com/XT07DhY-avI7_7lCCZ_lBqtIq_vgOzKGz2Bug5BviJ0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MzEwLzk3NS9zbWFs/bC9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/Y29uZmlkZW50LW1h/dHVyZS1tYW4taW4t/Zm9ybWFsd2Vhci1o/b2xkaW5nLWNsaXBi/b2FyZC1hbmQtbG9v/a2luZy1hdC1jYW1l/cmEtd2hpbGUtc3Rh/bmRpbmctYWdhaW5z/dC1ncmV5LWJhY2tn/cm91bmQtcGhvdG8u/anBn", story: "https://imgs.search.brave.com/XT07DhY-avI7_7lCCZ_lBqtIq_vgOzKGz2Bug5BviJ0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MzEwLzk3NS9zbWFs/bC9jb25maWRlbnQt/YnVzaW5lc3NtYW4t/Y29uZmlkZW50LW1h/dHVyZS1tYW4taW4t/Zm9ybWFsd2Vhci1o/b2xkaW5nLWNsaXBi/b2FyZC1hbmQtbG9v/a2luZy1hdC1jYW1l/cmEtd2hpbGUtc3Rh/bmRpbmctYWdhaW5z/dC1ncmV5LWJhY2tn/cm91bmQtcGhvdG8u/anBn" },
]


var storiyan = document.querySelector('#storiyan')
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `            <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click", function (dets) {
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector('#full-screen').style.display = "none"

    },2000)
});