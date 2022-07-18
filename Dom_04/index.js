// méthode .append = $('selectionner div') ajouter ('crée du contenue'); 

/* titre */ $("body").append('<h1><small>Thriller - </small>Michael Jackson</h1>');

/*verset 1*/ $("body").append('<div class="verset" id="verset-1"><p> \"It\'s close to midnight"\,<br>"Something evil\'s lurking in the dark"\,<br>\'Under the moonlight\'\,<br>\'You see a sight that almost stops your heart\'\,<br>\'You try to scream\'\,<br>\'But terror takes the sound before you make it\'\,<br>\'You start to freeze\'\,<br>\'As horror looks you right between your eyes\'\,<br>\"You\'re paralyzed"\,<br></p></div>');

/*choeur 1 */ $("body").append('<div class="choeur" id="choeur-1"><p> \"\'Cause this is thriller\"\,<br>\'Thriller night\'\,<br>\"And no one\'s gonna save you\"\,<br>\'From the beast about to strike\'\,<br>\"You know it\'s thriller\"\,<br>\'Thriller night\'\,<br>\"You\'re fighting for your life\"\,<br>\'Inside a killer\'\,<br>\'Thriller tonight\, yeah\, ooh\'\,<br></p></div>');

/*verset 2 */ $("body").append('<div class="verset" id="verset-2"><p> \'You hear the door slam\'\,<br>"And realize there\'s nowhere left to run"\,<br>\'You feel the cold hand\'\,<br>"And wonder if you\'ll ever see the sun"\,<br>\'You close your eyes\'\,<br>\'And hope that this is just imagination\'\,<br>\'Girl\, but all the while\'\,<br>\'You hear a creature creeping up behind\'\,<br>"You\'re out of time"\,<br></p></div>');

/*choeur 2 */ $("body").append('<div class="choeur" id="choeur-2"><p> "\'Cause this is thriller\, thriller night\"\,<br>"There ain\'t no second chance"\,<br>\'Against the thing with 40 eyes\, girl\'\,<br>\'(Ooh, ooh)\'\,<br>\'Thriller\, thriller night\'\,<br>"You\'re fighting for your life"\,<br>\'Inside a killer\, thriller tonight\'\,<br></p></div>');

/*pont */ $("body").append('<div class="pont" id="pont"><p> \'Night creatures call\'\,<br>\'And the dead start to walk in their masquerade\'\,<br>"There\'s no escaping the jaws of the alien this time"\,<br>"They\'re open wide"\,<br>\'This is the end of your life\, ooh\'\,<br></p></div>');

/*verset 3 */ $("body").append('<div class="verset" id="verset-3"><p> "They\'re out to get you"\,<br>"There\'s demons closing in on every side\, ooh"\,<br>\'They will possess you\'\,<br>\'Unless you change that number on your dial\'\,<br>\'Now is the time\'\,<br>\'For you and I to cuddle close together\, yeah\'\,<br>\'All through the night\'\,<br>"I\'ll save you from the terror on the screen"\,<br>"I\'ll make you see"\,<br></p></div>');

/*choeur 3 */ $('body').append('<div class="choeur" id="choeur-3"><p> \'That this is thriller\, thriller night\'\,<br>"\'Cause I can thrill you more"\,<br>\'Than any ghoul would ever dare try\'\,<br>\'Thriller\, thriller night\'\,<br>\'So let me hold you tight\'\,<br>\'And share a killer\, thriller\, chiller\'\,<br>\'Thriller here tonight\'\,<br>"\'Cause this is thriller\, thriller night\"\,<br>\'Girl\, I can thrill you more\'\,<br>\'Than any ghoul would ever dare try\'\,<br>\'(Ooh, ooh)\'\,<br>\'Thriller\, thriller night\'\,<br>\'So let me hold you tight\'\,<br>\'And share a killer\, thriller\'\,<br>"I\'m gonna thrill you tonight"\,<br></p></div>')

/*outro */ $("body").append('<div class="outro" id="outro"><p> \'Darkness falls across the land\'\,<br>\'The midnight hour is close at hand\'\,<br>\'Creatures crawl in search of blood\'\,<br>"To terrorize y\'all\'s neighborhood"\,<br>"I\'m gonna thrill you tonight"\,<br>\'And whosoever shall be found\'\,<br>\'Without the soul for getting down\'\,<br>\'Must stand and face the hounds of hell\'\,<br>"And rot inside a corpse\'s shell",<br>"I\'m gonna thrill you tonight"\,<br>\'(Thriller, ooh, thriller)\'\,<br>"I\'m gonna thrill you tonight",<br>\'(Thriller night\, thriller)\'\,<br>"I\'m gonna thrill you tonight"\,<br>"Ooh\, babe\, I\'m gonna thrill you tonight"\,<br>\'Thriller night\, babe\'\,<br>\'The foulest stench is in the air\'\,<br>\'The funk of 40 thousand years (Thriller night\, thriller)\'\,<br>\'And grisly ghouls from every tomb\'\,<br>\'Are closing in to seal your doom\'\,<br>\'And though you fight to stay alive\'\,<br>"Your body starts to shiver (I\'m gonna thrill you tonight)\"\,<br>\'For no mere mortal can resist\'\,<br>\'The evil of the thriller!\'\,<br>\'AHAHAHAHAHAHAHAHA\'\,<br>\'AHAHAHAHAHAHAHAHA!\'\,<br></p></div>')

/* footer */ $("body").append('<footer><span> © Copyright 2020 - IUT </span></footer>')

$(document).ready(function () {
    $("h1").click(function () {
      $("#verset-1, #verset-2, #verset-3").toggle();
    });
  });

  $(document).ready(function () {
    $("h1").dblclick(function () {
      $("p").toggle();
    });
  });

  