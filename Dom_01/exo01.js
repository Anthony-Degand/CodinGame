// tuto stephane : https://www.youtube.com/watch?v=6q-zt0aQ74U

//1
document.querySelector("h1").innerHTML = "Rick Astley - Never Gonna Give You Up";
//rempalcer le html de l'element h1 par se texte 

//2
$('p').each(function () { // prendre tous les paragraphes 
    $(this.firstChild).remove(); // et supprimer leur premiéres lignes
    });
//3
function filterArray(refrain) {
    var found = {};
    var out = refrain.filter(function(e) {
        return found.hasOwnProperty(e) ? false : (found[e] = true);
    });
    return out;
}

const outputArray = filterArray(refrain);
console.log("Filtered Array", outputArray);
//4
document.getElementById("erreur").remove();
//supprimer l'element avec l'id erreur

//5
$("body").append('<footer> © Copyright 2020 - Nom </footer>');
//ajoute une div footer 

