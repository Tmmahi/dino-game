let cross = true;
let score = 0;
document.onkeydown = function (e) {
  console.log(e.keyCode);

  if (e.keyCode == 38) {
    const dino = document.querySelector(".dino");
    dino.classList.add("aniDino");

    setTimeout(() => {
      dino.classList.remove("aniDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  const dino = document.querySelector(".dino");
  const dragan = document.querySelector(".dragan");
  const gameOver = document.querySelector(".gameOver");

  const dx = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("left")
  );
  const dy = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("top")
  );

  const ox = parseInt(
    window.getComputedStyle(dragan, null).getPropertyValue("left")
  );
  const oy = parseInt(
    window.getComputedStyle(dragan, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 93 && offsetY < 52) {
    gameOver.style.visibility = "visible";
    dragan.classList.remove("aniDra");
  }
}, 100);
