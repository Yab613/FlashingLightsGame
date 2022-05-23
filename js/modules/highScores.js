// *MODULES - HIGHSCORES.JS*

import * as View from '../view/highScores.js'
import * as DTF from '../view/displayTotalFinal.js'

var hs = [];

fetch("https://games-07926e.appdrag.site/api/getHighScores").then(r => {
  return r.json();
}).then(d => {
  if (d.Table.length > 0) {
    if (d.Table.length > 5) {
      hs = d.Table.slice(0, 5);
    } else {
      hs = d.Table;
    }
    hs.forEach(x => {
      x.date = new Date(x.date).toLocaleDateString();
    });
    View.displayHS(hs);
  }
});

export async function checkHS(BE, GE, Menu, Straggler) {
  if (hs.length > 0 && GE.points > hs[hs.length - 1].score) {
    var guy = await createHS(); 
    for (let i = 0; i < hs.length; i++) {
      const prevGuy = hs[i];
      if (GE.points > prevGuy.score) {
        hs.splice(i, 0, guy);
        break;
      }
    }
  } else {
    hs.push(await createHS());
  }
  if (hs.length > 5) {
    hs.pop();
  }
  View.displayHS(hs);
  DTF.displayTotalFinal(BE, GE, Menu, Straggler);

  async function createHS() {
    var name = "";
    await Swal.fire({
      title: GE.gOM,
      input: "text",
      inputLabel: "↓ Please enter your name to save your score ↓",
      showCancelButton: true,
      inputValidator: async (value) => {
        if (!value) {
          name = "༼ つ ◕_◕ ༽つ";
        } else {
          name = value;
        }
        var url = `https://games-07926e.appdrag.site/api/insertScoreNode?name=${encodeURI(
        name
      )}&score=${GE.points}`;
        await fetch(url).then(data => {
          return data.json();
        }).then(data => {
          GE.leaderboardPosition = data.payload;
        });
      },
    });

    var date = new Date().toLocaleDateString();

    return new Scorer(name, GE.points, date);
  }

  function Scorer(_name, _score, _date) {
    this.name = _name;
    this.score = _score;
    this.date = _date;
  }
}