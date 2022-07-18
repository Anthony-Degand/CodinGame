//1  masquer les paroles
$(document).ready(function () {
  $("#masquer-paroles").click(function () {
    $("#paroles").toggle();
  });
});

//1 crée un id pour mes label

$("label").remove();

$("body").append("<label for='check01'>Masquer les refrains</label> <input type='checkbox' name='check01' id='masquer-refrains'>")

/* input = document.getElementsByClassName("input");

$(input[1]).append("<label for='input[1]' id='lab01'> Masquer les paroles </label>")
 */
//1 changer la checkbox
$('#masquer-paroles').click(function() {
  if ($(this).is(':checked')) {
    $(this).siblings('label').html('Afficher les paroles');
  } else {
    $(this).siblings('label').html(' Masquer les paroles');
  }
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



