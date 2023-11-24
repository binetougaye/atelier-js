const tabUser = [
  {
    nom: "Sylla",
    prenom: "Diarry",
    age: 17,
    notes: 18,
    mail: "sds@gmail.com",
  },
  {
    nom: "Barry",
    prenom: "Mahmoud",
    age: 18,
    notes: 19,
    mail: "barry@gmail.com",
  },
  {
    nom: "Sow",
    prenom: "Abou",
    age: 20,
    notes: 8,
    mail: "abousow@gmail.com",
  },
  {
    nom: "Badji",
    prenom: "Alkaly",
    age: 15,
    notes: 16,
    mail: "Lkadev@gmail.com",
  },
  {
    nom: "Ndiaye",
    prenom: "Boubacar",
    age: 23,
    notes: 11,
    mail: "boubacar26@gmail.com",
  },
];
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let age = document.getElementById("age");
let note = document.getElementById("note");
let mail = document.getElementById("mail");
let tab = document.getElementById("tab");
for (i = 0; i < 5; i++) {
  let row = `<tr>
  <td>${tabUser[i].prenom}</td>
  <td>${tabUser[i].nom}</td>
  <td>${tabUser[i].age}</td>
  <td>${tabUser[i].notes}</td>
  <td>${tabUser[i].mail}</td>
  </tr>
  `;
  tab.innerHTML += row;
}
// // AFFICHER LA NOTE LA PLUS GRANDE
function test() {
  let personne = tabUser.map((fabi) => fabi.notes);
  console.log(personne, "tab");
}
test();

let noteMax = tabUser.reduce((a, c) => Math.max(a, c.notes), 1);
console.log(noteMax, "test");
// text1.innerHTML = "La note la plus grande est : " + noteMax;

// // AFFICHER LA PLUS PETITE NOTE
let text3 = document.getElementById("text3");
let noteMin = tabUser.map((a) => a.notes);
let valeurMinimale = Math.min(...noteMin);
// // console.log(valeurMinimale);
// text3.innerHTML = "La note la plus petite est : " + valeurMinimale;
// AFFICHER le plus grand age
let ageMax = tabUser.reduce((a, c) => Math.max(a, c.age), 0);
// text2.innerHTML = "Le plus grand age est : " + ageMax;
// Afficher le plus petit age
let text4 = document.getElementById("text4");
let ageMin = tabUser.map((a) => a.age);
let ageMinimal = Math.min(...ageMin);
// console.log(ageMinimal);
// text4.textContent = "Le plus petit age est : " + ageMinimal;
let num = 42;
console.log(typeof num.toString());
// PAGINATION
// Variables
let btn1Page1 = document.getElementById("btn1");
let btn2Page2 = document.getElementById("btn2");
let btn3Page3 = document.getElementById("btn3");
// let btn4Page4 = document.getElementById("btn4");
// Events Listeners
function firstPage() {
  btn1Page1.addEventListener("click", function () {
    window.location.href = "page1.html";
  });
}
firstPage();
function secondPage() {
  btn2Page2.addEventListener("click", function () {
    window.location.href = "page2.html";
  });
}
secondPage();
function thirdPage() {
  btn3Page3.addEventListener("click", function () {
    window.location.href = "page3.html";
  });
}
thirdPage();
