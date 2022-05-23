// *MODULES - SNM.JS*

export const Straggler = {
  btnsArray: document.querySelectorAll("button"), // all btns
  startGameBtn: document.querySelector("#start-game"), // start game btn
  timerInt: null, // game timer
  myInterval: null,
  enemyInt: null,
}

export const Menu = {
  anim: false,
  mute: false,
  crosshairBig: false,
  pause: false,
  menuOpen: false,
}

// menu animation

$("#burger").click(function () {
  $("#burger").toggleClass("burger-rotate")
  if (Menu.menuOpen) {
    Menu.menuOpen = false;
    $("nav").animate({
      right: "-386px"
    })
  } else {
    Menu.menuOpen = true;
    $("nav").animate({
      right: 0
    })
  }
})