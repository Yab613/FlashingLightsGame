// *VIEW - INTERVALLIGHTS.JS*

export function intervalLights(Straggler, GE, CH) {
  var qtyBtns = Straggler.btnsArray.length; //20
  theGame();
  Straggler.myInterval = setInterval(theGame, GE.speed);

  function theGame() {
    var rand = parseInt(Math.random() * qtyBtns); // 0 - 19
    Straggler.btnsArray[rand].style.backgroundColor = CH.greenLight;
    setTimeout(function () {
      Straggler.btnsArray[rand].style.backgroundColor = CH.buttonBG;
    }, GE.speed);
  }
}