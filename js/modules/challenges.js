// *MODULES - CHALLENGES.JS*

import * as SM from './SnM.js';
import {
  boardElemes
} from './boardElemes.js';
import {
  gameElemes
} from './gameElemes.js';

export const Challenges = {
  i: 190, //number that makes its way to the green 
  buttonBG: "",
  gap: 1,
  greenLight: 'rgb(0, 190, 0)',
  getGreener: function () {
    if (this.i >= 20) {
      this.i -= 20;
    }
    this.buttonBG = `rgb(${this.i}, 190, ${this.i})`;
    SM.Straggler.btnsArray.forEach(b => {
      b.style.background = this.buttonBG;
    });
  },
  increaseGap: function () {
    this.gap++;
    boardElemes.btnContainer.style.gap = this.gap + "vw";
  },
  addEnemy: function () {
    var qtyBtns = SM.Straggler.btnsArray.length; //20
    SM.Straggler.enemyInt = setInterval(theGame, gameElemes.speed);

    function theGame() {
      var found = false
      do {
        var rand = parseInt(Math.random() * qtyBtns); // 0 - 19
        if (SM.Straggler.btnsArray[rand].style.backgroundColor == Challenges.buttonBG) {
          found = true;
        }
      } while (!found);
      SM.Straggler.btnsArray[rand].style.backgroundColor = "red";
      setTimeout(function () {
        SM.Straggler.btnsArray[rand].style.backgroundColor = Challenges.buttonBG;
      }, gameElemes.speed);
    }
  },
  chal2: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal3: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal4: function () {
    this.getGreener();
    this.increaseGap();
    this.addEnemy();
  },
  chal5: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal6: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal7: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal8: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal9: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal10: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal11: function () {
    this.getGreener();
    this.increaseGap();
  },
  chal12: function () {
    this.getGreener();
    this.increaseGap();
  },
};