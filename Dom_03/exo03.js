//1  masquer les paroles
$(document).ready(function () {
  $("#masquer-paroles").click(function () {
    $("#paroles").toggle();
  });
});

//2
$(document).ready(function () {
  $("#masquer-refrains").click(function () {
    $(".refrain .contenu").toggle();


    if ($("#masquer-refrains").is(":checked")) {
      $(".hidden").css("display", "inline");
    }

    else {
      $(".hidden").css("display", "none");
    }
  });
});



//3

$(document).ready(function () {
  $(".definition").hover(function () {

    $(".contenu").css("display", "inline");
  }, function () {
    $(".contenu").css("display", "none");
  });
});

