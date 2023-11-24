console.log("PART 1");
// EXO 1
// Créer une fonction qui prends 2 nombres en argument et retourne leur somme
console.log("EXO 1");
function addition(x, y) {
  return x + y;
}
let somme = addition(23, 52);
// console.log("La somme est de : " + somme);
console.log("EXO 2");
// EXO 2
// Ecrire une fonction qui prend un nombre entier de minutes et le renvoie en secondes
console.log("EXO 2");
function minuteToSecond(minutes) {
  return minutes * 60;
}
let second = minuteToSecond(2);
console.log("Le nombre de secondes est de : " + second + " secondes");
// EXO 3
console.log("EXO 3");
function increment(n) {
  return (n += 1);
}
let number = increment(10);
console.log("L'increment de ce nombre est de " + number);
// EXO 4
// Ecrire un programme qui permet d'avoir la hauteur d'un triangle
console.log("EXO 4");
function getSurface(base, hauteur) {
  return (base * hauteur) / 2;
}
let surface = getSurface(8, 2);
console.log("La surface est de " + surface);
// EXO 5
console.log("EXO 5");
// Ecrire un programme qui permet d'inverser une chaine de caractères
function strReverse(str) {
  let tab = str.split("");
  let reverse = tab.reverse();
  let myJoin = reverse.join("");
  return myJoin;
}
let myStringReverse = strReverse("JavaScript");
console.log("La chaine renversée de ce mot est " + myStringReverse);
// EXO 6
// Ecrire un programme qui retourne l'entier maximal
console.log("EXO 6");
function getMax(a, b, c) {
  return Math.max(a, b, c);
}
let max = getMax(10, 32, 9);
console.log("L'entier maximal est " + max);
// EXO 7
// Ecrire un programme qui prend un tableau en entrée et renvoie le premier élément du tableau
console.log("EXO 7");
function getFirst(tab) {
  return tab[0];
}
let myTab = getFirst(["Sexy", "Sweet", "Smart"]);
console.log("Le premier élément du tableau est " + myTab);
// EXO 8
// Ecrire un programme qui permet de recupérer l'url d'un site web
console.log("EXO 8");
function getUrl(url) {
  url = document.location.href;
  return url;
}
let adress = getUrl("dom.html");
console.log("L'url de cette page est : " + adress);
// EXO 9
// Ecrire un programme qui renvoie le reste de deux nombres
console.log("EXO 9");
function resteDiv(a, b) {
  return a % b;
}
let reste = resteDiv(20, 5);
console.log("Le reste de la division de ces nombres est " + reste);
// PART 2
console.log("PART 2");
// EXO 1
// Ecrire un programme qui permet de calculer le carré d'un nombre
console.log("EXO 1 PART 1");
function carre(a) {
  return a * a;
}
let resultatDuCarré = carre(5);
console.log("Le carré de ce nombre est " + resultatDuCarré);
// EXO 2
// Avec 2 nombres retournez true si la somme de ces nombres est inférieur à 100. Sinon retournez false
console.log("EXO 2 PART 2");
function check(a, b) {
  return a + b < 100 ? "true" : "false";
}
let test = check(90, 10);
console.log("test", test);
// EXO 3
// Ecrire une fonction qui convertit les heures en secondes
console.log("EXO 3 PART 2");
function heureSeconde(heure) {
  return heure * 3600;
}
let heureToSeconde = heureSeconde(5);
console.log("heureToSeconde", heureToSeconde);
// EXO 4
// Créer une fonction qui prend un nombre et renvoie True s'il est inf ou égal à 0. Sinon False
console.log("EXO 4 PART 2");
function checkNbr(n) {
  return n <= 0 ? "true" : "false";
}
let myCheckNbr = checkNbr(5);
console.log("myCheckNbr", checkNbr);
// EXO 5
// Créer une fonction qui renvoie True si nbr1 = nbr2. Sinon false
console.log("EXO 5 PART 2");
function isEqual(nbr1, nbr2) {
  return nbr1 == nbr2 ? "true" : "false";
}
let equalOrNot = isEqual(20, 20);
console.log("equalOrNot" + equalOrNot);
// EXO 6
// Créer une fonction qui renvoie true s'il est divisible par 5. Sinon false
console.log("EXO 6 PART 2");
function isDivisible(n) {
  return n % 5 == 0 ? "true" : "false";
}
let divisible = isDivisible(25);
console.log("divisible " + divisible);
// EXO 7
// Ecrire une fonction pour inverser un tableau
// function tabReverse(tab) {}
// let tabRenverse = tabReverse([1, 2, 3]);
// console.log(tabRenverse);
// let tab = [1, 3, 2];
// let tabIn = tab.length - 1;
// let lastInd = tab[tabIn];
// // console.log(lastInd);
// for (i = 0; i < tab.length; i++) {
//   let max = tab[tabIn];
//   if (max > tab[i]) {
//     console.log(tab[i]);
//   }
