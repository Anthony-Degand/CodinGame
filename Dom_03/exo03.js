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

/*$("label").append('<label><input type="checkbox" name="refrain" id="afficher-refrain"/> Afficher les refrains </label>');

$(document).ready(function(){
  $("#masquer-refrains").checked(function(){
    $("#masquer-refrains").hide();
      $("#masquer-refrains").replaceWith("#Afficher-refrains");

  });
});

$(document).ready(function(){
  $("#afficher-refrains").checked(function(){
      $("#masquer-refrains").replaceWith("#afficher-refrain");
  });
});*/
