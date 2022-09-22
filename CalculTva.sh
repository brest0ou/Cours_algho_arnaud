#!/bin/bash
clear;

# Déclaration de constantes 
readonly TVA=20;


# Déclaration de variables

montantTVA=NULL;
prixHT=NULL;
prixTTC=NULL;

# Affiche une instruction pour l'utilisateur
# > Saisir le prix hors Taxe.
echo "Saisir le prix Hors Taxe :";

# capturer la valeur d'entrée prixHT
read prixHT;


# Calcul du montant de la TVA montantTVA
montantTVA=$(echo "$prixHT*($TVA/100)" |bc -l);
echo $montantTVA;

# Calcul du prix TTC prix TTC
prixTTC=$(echo"$prixHT+$montantTVA" | bc -l);

#On arrondi les valeurs pour l'affichage
montantTVA=$(echo $montanTVA | awk '{printf}')


# Afficher le montant TVA et le prix TTC