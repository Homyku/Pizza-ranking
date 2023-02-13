const audioElement = document.getElementById("myAudio");

function playAudio() {
audioElement.play();
}

function pauseAudio() {
audioElement.pause();
}

var y = 0;
var speed = 2;
var backgroundImage = new Image();
backgroundImage.src = "./images/background.jpg";

function moveBackground() {
y -= speed;
document.body.style.backgroundPosition = "0 " + y + "px";
if (y < -backgroundImage.height / 4) {
y = 0;
}
setTimeout(moveBackground, 50);
}

moveBackground();

const CurrentTitle = document.title;

window.addEventListener("blur", () => {
  document.title= "Tej no wracaj no tu";

});

window.addEventListener("focus", () => {
  document.title = CurrentTitle;
});