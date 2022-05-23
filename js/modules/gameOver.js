// *MODULE - GAMEOVER.JS*

import {
  checkHS
} from "./highScores.js"
import {
  colorArray
} from "./level.js"
import * as SM from './SnM.js'
import {
  boardElemes
} from './boardElemes.js';
import {
  gameElemes
} from './gameElemes.js';


const BE = boardElemes;
const GE = gameElemes;

export function endAlert(pauseGame) {
  Swal.fire({
    title: 'Are You Sure You Want To End The Game?',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      gameOver(pauseGame);
    }
  });
}

export function gameOver(pauseGame) {
  pauseGame("gameOver");
  window.removeEventListener("keydown", pauseGame)
  if (SM.Menu.menuOpen) {
    SM.Menu.menuOpen = true;
    $("#burger").trigger("click");
  }
  $(".anime").html("");
  clearInterval(SM.Straggler.timerInt);
  clearInterval(SM.Straggler.myInterval);
  clearInterval(SM.Straggler.enemyInt);
  var qtyBtns = SM.Straggler.btnsArray.length;
  for (let i = 0; i < qtyBtns; i++) {
    const btn = SM.Straggler.btnsArray[i];
    $(btn).off();
  }
  BE.ty4P.style.display = "inline";
  BE.startBtnLevel.style.display = "none";
  BE.endGameBtn.style.display = "none";
  BE.pointsBoard.style.display = "none";
  BE.skipAnimationBtn.style.display = "inline-block";
  badClickTime();
  $("#btn-cont").slideToggle(1000);
  $("#resume").slideToggle(1000, function () {
    SM.Straggler.startGameBtn.style.backgroundColor = colorArray[GE.level = 0];
    checkHS(BE, GE, SM.Menu, SM.Straggler);
  });

  function badClickTime() { // 160
    var array = [];
    GE.pointsPreCalculate = GE.points;
    var ptr = -1; // 16
    for (var i = 25; i < GE.badClk; i += 25) {
      ptr += 2;
      GE.totalRemove += 25 * ptr;
      array.push(ptr * 25);
    }
    i -= 25;
    if (GE.badClk > i) {
      ptr += 2;
      var x = GE.badClk - i;
      GE.totalRemove += x * ptr;
      array.push(ptr * x);
    }
    GE.points -= GE.totalRemove;
    BE.points.innerHTML = GE.points;
  }
}