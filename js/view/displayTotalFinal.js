// *VIEW - DISPLAYTOTALFINAL.JS*

import * as SG from '../modules/startGame.js';

var HTMLelementsArray = [".P-E", ".B-C", ".P-L", ".F-S", ".L-R", ]

export function displayTotalFinal(BE, GE, Menu, Straggler) {
  $(BE.skipAnimationBtn).one("click", skipAnimationAlert);

  function skipAnimationAlert() {
    Swal.fire({
      title: 'Do You Want To Skip The Animation?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        BE.skipAnimationBtn.removeEventListener("click", skipAnimationAlert);
        typeItsArray[currentTypeIt].destroy();
        document.querySelectorAll(".anime").forEach(x => {
          x.innerHTML = "";
        })
        skipAnimation();
      } else {
        $(BE.skipAnimationBtn).one("click", skipAnimationAlert);
      }
    });
  }

  var currentTypeIt = null

  function skipAnimation() {
    HTMLelementsArray.forEach(function (x, i) {
      setTimeout(function () {
        $(x).html(typeItsTextArray[i]);
      }, 10);
    });
    returnStartBtn();
  }

  var typeItsArray = []
  var typeItsTextArray = [`POINTS EARNED: <span id="PE">${GE.pointsPreCalculate}</span>`,
    `BAD CLICKS: <span id="BC">${GE.badClk}</span>`,
    `POINTS LOST: <span id="PL">${GE.totalRemove}</span>`,
    `FINAL SCORE: <span id="FS">${GE.points}</span>`,
    `LEADERBOARD RANKING: <span id="LR">${GE.leaderboardPosition}</span>`,
  ];

  currentTypeIt = 0;

  if (Menu.anim == true) {
    skipAnimation();
    return;
  }
  typeItsArray[0] = new TypeIt(HTMLelementsArray[0], {
    strings: typeItsTextArray[0],
    speed: GE.speedType,
    waitUntilVisible: true,
    cursor: false,
    html: true,
    lifeLike: true,
    afterComplete: typeit2
  }).go();

  function typeit2() {
    currentTypeIt = 1;
    typeItsArray[1] = new TypeIt(HTMLelementsArray[1], {
      strings: typeItsTextArray[1],
      speed: GE.speedType,
      waitUntilVisible: true,
      cursor: false,
      html: true,
      lifeLike: true,
      afterComplete: typeit3
    }).go();
  }

  function typeit3() {
    currentTypeIt = 2;
    typeItsArray[2] = new TypeIt(HTMLelementsArray[2], {
      strings: typeItsTextArray[2],
      speed: GE.speedType,
      waitUntilVisible: true,
      cursor: false,
      html: true,
      lifeLike: true,
      afterComplete: typeit4
    }).go();
  }

  function typeit4() {
    currentTypeIt = 3;
    typeItsArray[3] = new TypeIt(HTMLelementsArray[3], {
      strings: typeItsTextArray[3],
      speed: GE.speedType,
      waitUntilVisible: true,
      cursor: false,
      html: true,
      lifeLike: true,
      afterComplete: typeit5
    }).go();
  }

  function typeit5() {
    currentTypeIt = 4;
    typeItsArray[4] = new TypeIt(HTMLelementsArray[4], {
      strings: typeItsTextArray[4],
      speed: GE.speedType,
      waitUntilVisible: true,
      cursor: false,
      html: true,
      lifeLike: true,
      afterComplete: returnStartBtn
    }).go();
  }

  function returnStartBtn() {
    BE.ty4P.style.display = "none";
    BE.playAgainBtn.style.display = "inline";
    BE.skipAnimationBtn.style.display = "none";
    $(Straggler.startGameBtn).on("click", function (e) {
      SG.startGame(e, Straggler, GE, BE, Menu)
    });
  };
}