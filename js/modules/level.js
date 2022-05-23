// *MODULES - LEVEL.JS*

import {
  playSound,
  sounds
} from "../view/sounds.js";

export const colorArray = [
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
  "turquoise", "blue", "red", "orange", "purple", "maroon",
];

export function levelUp(G, B, CH, btn, playSound) {
  G.speed -= 50;
  G.level++;
  B.level.innerHTML = G.level;
  btn.style.backgroundColor = colorArray[G.level - 1];
  G.ptnl = 10;
  c4l(G, B, CH);
  playSound(sounds.paths.chime);
}

// CH.Challenges: when reaching certain levels new obstacles appear, time also gets added with each new challenge
function c4l(G, B, CH) {
  if (G.ltnc > 1) {
    G.ltnc--;
  } else {
    G.timer += 10;
    G.ltnc = 3;
    G.challenge++;
    B.challenge.innerHTML = G.challenge;
    CH["chal" + G.challenge]();
  }
}