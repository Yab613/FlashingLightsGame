// *MODULES - STARTGAME.JS*

import {
  Challenges
} from "./challenges.js";
import {
  intervalLights
} from "../view/intervalLights.js";
import {
  catchTheLight
} from "./catchTheLight.js";
import * as GO from "./gameOver.js";


function reset(Straggler, GE, BE) {
  GE.gameNumber++;
  GE.points = 0;
  GE.badClk = 0;
  GE.timer = 60;
  GE.level = 1;
  GE.speed = 1000;
  GE.ptnl = 10;
  GE.ltnc = 3;
  BE.points.innerHTML = "0";
  BE.badClk.innerHTML = "0";
  BE.timer.innerHTML = "60";
  BE.level.innerHTML = "1";
  BE.challenge.innerHTML = "1";
  Challenges.i = 190;
  Challenges.buttonBG = `rgb(${Challenges.i}, 190, ${Challenges.i})`;
  Challenges.gap = 1;
  BE.btnContainer.style.gap = "1vw";
  Straggler.btnsArray.forEach(b => {
    b.style.background = Challenges.buttonBG;
  });
  GE.pointsPreCalculate = 0;
  BE.playAgainBtn.style.display = "none";
  BE.ty4P.style.display = "none";
  GE.totalRemove = 0;
}

// create the start game function and starts the other functions that contain the logic of the game
export function startGame(e, Straggler, GE, BE, Menu) {
  BE.endGameBtn.addEventListener("click", function () {
    GO.endAlert(pauseGame)
  });
  var qtyBtns = Straggler.btnsArray.length; //20
  if (e.pointerType == "mouse") { // disbles touch screen
    Swal.fire({
      title: 'Are You Ready To Begin?',
      showDenyButton: true,
      confirmButtonText: "Lets Go!",
      denyButtonText: `Not Yet`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // auto closes the burger/menu when you press start game
        if (Menu.menuOpen) {
          Menu.menuOpen = true;
          $("#burger").trigger("click");
        }
        // code to start game
        if (GE.gameNumber > 0) {
          $("#resume").slideToggle(1000);
          BE.pointsBoard.style.display = "inline";
        }
        BE.playAgainBtn.style.display = "none";
        BE.startBtn.style.display = "none";
        BE.startingBtn.style.display = "inline";
        var threeDots = document.querySelector("#threeDots");
        threeDotAnim();
        var threeDotInt = setInterval(threeDotAnim, 750);
        function threeDotAnim() {
          threeDots.innerHTML = "";
          setTimeout(function () {
            threeDots.innerHTML = ".";
            setTimeout(function () {
              threeDots.innerHTML = "..";
              setTimeout(function () {
                threeDots.innerHTML = "...";
              }, 200)
            }, 200)
          }, 200)
        }
        BE.countdown.style.display = "flex";
        BE.numberColor.style.backgroundColor = "red";
        $(Straggler.startGameBtn).off();
        BE.introText.innerHTML = 3;
        reset(Straggler, GE, BE);
        setTimeout(function () {
          BE.numberColor.style.backgroundColor = "yellow";
          BE.introText.innerHTML = 2;
          setTimeout(function () {
            BE.numberColor.style.backgroundColor = "green";
            BE.introText.innerHTML = 1;
            setTimeout(function () {
              BE.numberColor.style.backgroundColor = "rgba(255, 0, 0, 0)";
              BE.countdown.style.display = "none";
              $("#btn-cont").fadeIn(1000, function () {
                intervalLights(Straggler, GE, Challenges);
                window.addEventListener("keydown", pauseGame, {
                  once: true
                });
                startTimer();
                for (let i = 0; i < qtyBtns; i++) {
                  const btn = Straggler.btnsArray[i];
                  $(btn).on("click", function (e) {
                    catchTheLight(e, BE, GE, Challenges, Straggler, this, intervalLights);
                  });
                }
                setTimeout(function(){
                  BE.startingBtn.style.display = "none";
                  BE.startBtnLevel.style.display = "inline";
                  BE.endGameBtn.style.display = "inline-block";
                }, 500)
                clearInterval(threeDotInt);
              });
            }, 1000)
          }, 1000)
        }, 1000)
      }
    });
  } else {
    Swal.fire('Stop Cheating', 'Touch Screen is not allowed', 'error');
  }


  // startTimer, Menu, timerInt, GE
  function pauseGame(e) {
    if (e != "gameOver") e.preventDefault();
    setTimeout(function () {
      window.addEventListener("keydown", pauseGame, {
        once: true
      });
    }, 500);
    if (e == "gameOver" || e.code == "Space") {
      if (Menu.pause == true) {
        $(".fa-pause").hide();
        $(".fa-play").show(500, function () {
          $("#pause-screen").fadeOut();
        });
        Menu.pause = false;
        if (e != "gameOver") startTimer();
        $(".game-btn").off("click", antiCheat);
      } else if (e != "gameOver") {
        $(".fa-pause").show();
        $(".fa-play").hide();
        $("#pause-screen").fadeIn();
        Menu.pause = true;
        clearInterval(Straggler.timerInt);
        $(".game-btn").on("click", antiCheat);
      }
    }
  }

  function antiCheat() {
    GE.gameElemes.gOM = "We dont like cheaters"
    GO.gameOver(pauseGame);
    Menu.pause = false;
    $(".game-btn").off("click", antiCheat);
  }

  function startTimer() {
    Straggler.timerInt = setInterval(() => {
      // this happens every second, from here.......
      if (GE.timer == 0) {
        GO.gameOver(pauseGame);
      } else {
        GE.timer--;
        var html = GE.timer;
        if (html < 10) {
          html = "0" + html;
        }
        BE.timer.innerHTML = html;
        // ...until here!!!
      }
    }, 1000);
  }
}