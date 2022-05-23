// *VIEW - HIGHSCORES.JS*

export function displayHS(hs) {
  var toAppend = "";
  hs.forEach(function (guy, q) {
    toAppend += `
 <div class="high-scorer">
 <div class="hs-date">${guy.date}</div>
          <b> <p><span class="position-hs">${q + 1}</span>${guy.name} : <strong>${guy.score}</strong></p> </b>
        </div>`;
  });
  document.querySelector("#high-scores").innerHTML = toAppend;
}