//1

d3.select("h1").text("Rick Astley - Never Gonna Give You Up");

//2

d3.selectAll('p').each(function () {
d3.select(this.firstChild).remove();
});

//3

// on selectionne tous elements de une-classe
d3.selectAll('.refrain').each(function () {
    // pour chacun d'entre eux on sélectionne leur noeuds enfant
    d3.selectAll(this.childNodes)
      // on filtre les noeuds sélectionnés pour ne garder que les doublons
      .filter((_d, i) => Math.floor(i / 2) % 2 === 0)
      // on les supprime
      .remove();
  });

//4

d3.select("#erreur p").remove();

//5

d3.select("body").append("footer");

d3.select("footer").text("© Copyright 2020 - Nom");




