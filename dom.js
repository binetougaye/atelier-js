// // // Atelier KALIKA
// let btn = document.querySelector("#btn");
// // let resultat = document.querySelector("#resultat");
// let text = document.querySelector("#text");
// function calculatrice() {
//   let input = document.querySelector("#input");
//   let input2 = document.querySelector("#input2");
//   btn.addEventListener("click", () => {
//     // resultat.value = Number(input.value) + Number(input2.value);
//     text.innerHTML =
//       "La somme est de " + (Number(input.value) + Number(input2.value));
//   });
// }
// calculatrice();

// // // function noun(nom) {
// // //   let myButton = document
// // //     .querySelector("#btn1")
// // //     .addEventListener("click", () => {
// // //       alert("Bonjour" + " " + nom);
// // //     });
// // // }
// // // noun("Boubacar");
// // let resultat = document.querySelector("#resultat");
// // let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (i = 0; i < tab.length; i++) {
// //   resultat.innerHTML = tab;
// // }
// // const tabObj = [
// //   { Prenom1: "Fabi", age: 24, Nom1: "Gaye" },
// //   { Prenom2: "Aida", age: 15, Nom2: "Diop" },
// //   { Prenom3: "Keyna", age: 32, Nom3: "Sarr" },
// //   { Prenom4: "Halima", age: 13, Nom: "Ndiaye" },
// //   { Prenom5: "Sophie", age: 84, Nom: "Diallo" },
// // ];
// // console.log(tabObj);
// // for (i = 0; i < tabObj.length; i++) {
// //   // console.log(tabObj[i]);
// //   if (tabObj[i].age < 18) {
// //     console.log(tabObj[i].age, "Le reste est majeur");
// //   }
// // }
// // ITERATION
// const obj = {
//   ville: "Dakar",
//   Quartier: "Baobabs",
//   Pays: "Sénégal",
//   BP: 1441,
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.assign(obj));
// console.log(Object.freeze(obj));
// console.log(Object.is(obj));
// console.log(Object.is(obj));
// console.log(Object.is(obj));

// const recup = tab.values();
// console.log(recup);
// for (const value of recup) {
//   console.log(value);
// }
// for (i = 0; i < tab.length; i++) {
//   console.log(tab[i]);
// }
// tab.fill("World", 1);
// console.log(tab);
// // FUNCTION BASICS
// function sum(tab) {
//   let total = 0;
//   for (i = 0; i < tab.length; i++) {
//     total += tab[i];
//   }
//   return total;
// }
// let resultat = sum([1, 2, 3, 4, 5]);
// // console.log(resultat);
// function person(obj) {
//   return "My name is " + obj.name + " I am " + obj.age;
// }
// let test = person({ name: "Fabi", age: 24 });
// // console.log(test);
// function getRandom(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   return randomIndex;
// }
// let random = getRandom([1, 2, 3, 5, 6, 7, 8, 9, 10]);
// // alert(random);
// const tab = [{ prenom: "Fabi" },];
// let test = document.getElementById("test");
// let value = tab[0].prenom;
// test.innerHTML = value;

// ATELIER KALIKA

let td2 = document.querySelector(".prenom");
let td = document.querySelector(".nom");
let age = document.querySelector(".age");
let notes = document.querySelector(".note");
let valuenom = tabUser[0].nom;
td.innerHTML = valuenom;
let valueprenom = tabUser[0].prenom;
td2.innerHTML = valueprenom;
let valueAge = tabUser[0].age;
age.innerHTML = valueAge;
let valuenote = tabUser[0].notes;
notes.innerHTML = valuenote;

//
let td3 = document.querySelector(".nom1");
let td4 = document.querySelector(".prenom1");
let age1 = document.querySelector(".age1");
let notes1 = document.querySelector(".note1");
let valuenom1 = tabUser[1].nom;
td3.innerHTML = valuenom1;
let valueprenom1 = tabUser[1].prenom;
td4.innerHTML = valueprenom1;
let valueAge1 = tabUser[1].age;
age1.innerHTML = valueAge1;
let valuenote1 = tabUser[1].notes;
notes1.innerHTML = valuenote1;
let moyenne = tabUser.reduce((a, c) => Math.max(a, c.notes), 0);
console.log(moyenne);
let text = document.getElementById("text");
text.innerHTML = "La plus grande note est :" + moyenne;
