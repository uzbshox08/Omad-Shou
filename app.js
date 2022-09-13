const photos = document.querySelectorAll(".photo")
const btn = document.querySelector(".btn")
const sound = document.querySelector(".sound")
const main = document.querySelector(".main")

let images = ["./img/1.png" , "./img/2.png" , "./img/3.png" , "./img/4.png"]

btn.addEventListener("click", starGame)

function starGame() {

    sound.src = "./img/taq.mp3"
    sound.play()
    btn.style.display = "none"
    main.classList.remove("won")
    main.classList.remove("lose")

    let interval = setInterval(()=>{
        photos[0].src = images[randomImage()]
        photos[1].src = images[randomImage()]
        photos[2].src = images[randomImage()]
    }, 200)

    
    setTimeout(()=>{
        clearInterval(interval)
        btn.style.display = "inline-block" 
        if (photos[0].src === photos[1].src && photos[1].src === photos[2].src) {
            sound.src = "./img/victory.mp3"
            sound.play()
            main.classList.add("won")
        } else {
            sound.src = "./img/wrong1.mp3"
            sound.play()
            main.classList.add("lose")
        }
    }, 2500)
}

function randomImage() {
    return Math.floor( Math.random() * images.length)
}