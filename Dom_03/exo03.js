//1  masquer les paroles
$(document).ready(function(){
    $("#masquer-paroles").click(function(){
        $("#paroles").toggle();
        $("#masquer-paroles").html("Afficher les paroles");
    });
  });

//2
$(document).ready(function(){
  $("#masquer-refrains").click(function(){
      $(".refrain").toggle();
  });
});

$(".hidden").css("display","block");


/*// Récupère le div contenant les paroles
const divParoles = null; //

// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    // la case vient d'être cochée
  } else {
    // la case vient d'être décochée
  }
});*/
