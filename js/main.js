// *MAIN.JS*

import * as BE from './modules/boardElemes.js';
import * as GE from './modules/gameElemes.js';
import * as SG from './modules/startGame.js';
import * as SM from './modules/SnM.js';

$("#btn-cont").hide();

setTimeout(function () {
  var adDesk = document.querySelector("#AppDragPROMODesktop");
  var adMobile = document.querySelector("#AppDragPROMOMobile");

  if (adDesk && adMobile) {
    adDesk.remove();
    adMobile.remove();
  }
}, 1000);


$("#pause-screen").fadeOut();

$(".game-btn").css({
  cursor: "url(https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/crosshairS.png) 15 15, auto"
});
$("#btn-cont").css({
  cursor: "url(https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/crosshairS.png) 15 15, auto"

});

$(SM.Straggler.startGameBtn).on("click", startGame);

function startGame(e) {
  SG.startGame(e, SM.Straggler, GE.gameElemes, BE.boardElemes, SM.Menu)
}

// Alert that pops up when you click the End Game Btn, which causes the game to end

BE.boardElemes.animBtn.addEventListener("change", function () {
  if (SM.Menu.anim == true) {
    this.checked = true;
    SM.Menu.anim = false;
  } else {
    this.checked = false;
    SM.Menu.anim = true;
  }
})

BE.boardElemes.crosshairBtn.addEventListener("change", function () {
  if (SM.Menu.crosshairBig == true) {
    this.checked = true;
    SM.Menu.crosshairBig = false;
    $(".game-btn").css({
      cursor: "url(https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/crosshairS.png) 15 15, auto"

    });
    $("#btn-cont").css({
      cursor: "url(https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/crosshairS.png) 15 15, auto"
    });
  } else {
    this.checked = false;
    SM.Menu.crosshairBig = true;
    $(".game-btn").css({
      cursor: "url(https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/crosshairM.png) 50 50, auto"
    });
    $("#btn-cont").css({
      cursor: "url(https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/crosshairM.png) 50 50, auto"
    });
  }
})


// NEXT CLASS: 

// enemy button - timings
// add google ad


// I ADDED BETWEEN CLASSES: