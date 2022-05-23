// *MODULE - CATCHTHELIGHT.JS*

import {
  playSound,
  sounds
} from "../view/sounds.js";
import * as L from './level.js';


// creates the button detection system
export function catchTheLight(e, BE, GE, CH, Straggler, btn, intervalLights) {
  if (e.pointerType == "mouse") {
    if (btn.style.backgroundColor == CH.greenLight) {
      addPoint();
      btn.style.backgroundColor = CH.buttonBG;
    } else if (btn.style.backgroundColor == "red") {
      reducePoint(5)
    } else {
      reducePoint(1);
    }
  } else {
    // alert("We don't like cheaters around here!"), // using touch screen
    Swal.fire({
      title: `༼ つ ◕_◕ ༽つ No Cheating!`,
      confirmButtonText: `I Will Play Fair And Use A Mouse`,
    })
    reducePoint(5);
  }

  // add point to score board on side of the game
  function addPoint() {
    GE.points += GE.level;
    BE.points.innerHTML = GE.points;
    GE.ptnl--;
    if (GE.ptnl == 0) {
      L.levelUp(GE, BE, CH, Straggler.startGameBtn, playSound);
    }
    clearInterval(Straggler.myInterval);
    intervalLights(Straggler, GE, CH);
  }

  function reducePoint(x) {
    GE.badClk += x;
    BE.badClk.innerHTML = GE.badClk;
    playSound(sounds.paths.buzz);
  }
}