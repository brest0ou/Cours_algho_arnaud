// cet commande permet de nous forcer à être strict à tout déclarer 
"use strict";

// Déclaration de constante 

const TVA = 20;
let montantTVA;
let prixHT;
let prixTTC;


// Affiche une instruction pour l'utilisateur
// > Saisir le prix hors taxe:
// Capture la valeur d'entrée prixHT
prixHT = prompt("Saisir le prix hors taxe");

// Vérification de l'entrée
if (isNaN(prixHT))
{
    console.error("Erreur de saisie")
}
else
{
// Convertion de la chaîne de prixHT en Nombre
prixHT=parseFloat(prixHT);

// Calcul du montant de la TVA montantTVA
montantTVA = prixHT * ( TVA/100 );

// Calcul du prix TTC prixTTC
prixTTC = prixHT + montantTVA;

// Affiche le Montant TVA et le "prix TTC"
// Avec cet touche7 ( ` ` ) on peux y mettre du texte et appeler une variable avec ${} derrière exemple (${montantTVA})

//<br> saut à la ligne 

let output = `- Montant TVA ${montantTVA}<br>- Prix TTC: ${prixTTC}`;

document.write(output);
}


