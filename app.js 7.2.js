
var productPrijs = parseFloat(prompt("Hoeveel kost het product dat je wilt kopen?"));

if (isNaN(productPrijs)) {
  alert("Voer een geldig getal in voor de prijs van het product.");
} else {
  var beschikbaarGeld = parseFloat(prompt("Hoeveel geld heb je beschikbaar?"));


  if (isNaN(beschikbaarGeld)) {
    alert("Voer een geldig getal in voor de beschikbare geldhoeveelheid.");
  } else {

    if (beschikbaarGeld >= productPrijs) {
      alert("Je hebt genoeg geld om het product te kopen. Veel winkelplezier!");
    } else {
      alert("Sorry, je hebt niet genoeg geld om het product te kopen.");
    }
  }
}
