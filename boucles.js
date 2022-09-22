"use strict";

let fruits = [
  "Pommes",
  "Poires",
  "Bananes",
  "fraises"
];
console.log("il m'affiche quatre élément dans mon tableau")
console.log(fruits.length);

//Boucle for

for ( let i = 0; i < fruits.length; i++)
{
console.log(fruits[i]);
}
console.log("il m'affiche le contenue de mon tableau")





// Boucle while

var i = 0;

while(i < fruits.length)
{
console.log(fruits[i]);
i++;
}

console.log("------------------------")

while (fruits.length)
{
    console.log(fruits[0]);
    fruits.shift();
}

