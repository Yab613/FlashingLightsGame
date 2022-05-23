// *VIEW - SOUNDS.JS*

import {
  boardElemes
} from '../modules/boardElemes.js'
import {
  Menu
} from '../modules/SnM.js';

// All of the SFX
export const sounds = {
  player: new Audio(),
  paths: {
    buzz: `https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/buzz.mp3`,
    chime: `https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/games-07926e/catchlight/assets/chime.mp3`,
  },
}

export function playSound(path) {
  if (Menu.mute == false) {
    sounds.player.src = path;
    sounds.player.load();
    sounds.player.play();
  }
}

boardElemes.muteBtn.addEventListener("change", function () {
  if (Menu.mute == true) {
    this.checked = true;
    Menu.mute = false;
  } else {
    this.checked = false;
    Menu.mute = true;
  }
})