const dino = document.getElementById("senpai");
const cactus = document.getElementById("ringo");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    let vid = document.createElement("video");
    vid.src = "game.mp4";
    vid.id = "vid";
    vid.loop = true;
    vid.autoplay = true;
    let game = document.getElementsByClassName("game")[0];
    document.body.removeChild(game);
    document.body.appendChild(vid);
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});