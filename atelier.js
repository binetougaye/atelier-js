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
  {
    nom: "Tra",
    prenom: "Sidy",
    age: 22,
    notes: 9,
    mail: "generalTra@gmail.com",
  },
  {
    nom: "Ba",
    prenom: "Mady",
    age: 24,
    notes: 15,
    mail: "bigdan@gmail.com",
  },
  {
    nom: "Faye",
    prenom: "Awa",
    age: 21,
    notes: 17,
    mail: "evafaye@gmail.com",
  },
  {
    nom: "Sow",
    prenom: "Racky",
    age: 16,
    notes: 12,
    mail: "sowracky@gmail.com",
  },
  {
    nom: "Gaye",
    prenom: "Fabi",
    age: 24,
    notes: 14,
    mail: "fabigaye3@gmail.com",
  },
  {
    nom: "Ndiaye",
    prenom: "Sophie",
    age: 22,
    notes: 11,
    mail: "ndiayesophie81@gmail.com",
  },
  {
    nom: "Sy",
    prenom: "Amadou",
    age: 20,
    notes: 10,
    mail: "syamadou@gmail.com",
  },
  {
    nom: "Diop",
    prenom: "Falilou",
    age: 20,
    notes: 9,
    mail: "abousow@gmail.com",
  },
  {
    nom: "Ndiaye",
    prenom: "Fatou Moctar",
    age: 25,
    notes: 17,
    mail: "fmn@gmail.com",
  },
  {
    nom: "Sarr",
    prenom: "Mouhamed",
    age: 24,
    notes: 19,
    mail: "sarrmhd@gmail.com",
  },
  {
    nom: "Ba",
    prenom: "Mariama",
    age: 26,
    notes: 15,
    mail: "bamariama@gmail.com",
  },
  {
    nom: "Bocoum",
    prenom: "Cheikh",
    age: 21,
    notes: 13,
    mail: "killah@gmail.com",
  },
  {
    nom: "Cissokho",
    prenom: "Waly",
    age: 20,
    notes: 14,
    mail: "ewc@gmail.com",
  },
  {
    nom: "Dione",
    prenom: "seydina",
    age: 28,
    notes: 18,
    mail: "paissa@gmail.com",
  },
  {
    nom: "barry",
    prenom: "moustapha",
    age: 20,
    notes: 8,
    mail: "barry12@gmail.com",
  },
];
// AFFICHER LA NOTE LA PLUS GRANDE
let noteMax = tabUser.reduce((a, c) => Math.max(a, c.notes), 0);
text1.innerHTML = "La note la plus grande est : " + noteMax;
// AFFICHER LA PLUS PETITE NOTE
// let noteMin = tabUser.reduce((a, c) => Math.min(c.notes, a), 0);
// console.log(noteMin);
// text2.innerHTML = "La note la plus petite est : " + noteMin;
// AFFICHER le plus grand age
let ageMax = tabUser.reduce((a, c) => Math.max(a, c.age), 0);
text2.innerHTML = "Le plus grand age est : " + ageMax;
// PERSONNE 1
let person1Nom = document.getElementById("person1");
let valueperson1 = tabUser[0].nom;
person1Nom.innerHTML = valueperson1;
let prenom1 = document.getElementById("prenom1");
let valueprenom1 = tabUser[0].prenom;
prenom1.innerHTML = valueprenom1;
let age1 = document.getElementById("age1");
let valueage1 = tabUser[0].age;
age1.innerHTML = valueage1;
let note1 = document.getElementById("note");
let valueNote1 = tabUser[0].notes;
note1.innerHTML = valueNote1;
let mail1 = document.getElementById("mail");
let valueMail1 = tabUser[0].mail;
mail1.innerHTML = valueMail1;
// PERSONNE2
let person2Nom = document.getElementById("person2");
let valueperson2 = tabUser[1].nom;
person2Nom.innerHTML = valueperson2;
let prenom2 = document.getElementById("prenom2");
let valueprenom2 = tabUser[1].prenom;
prenom2.innerHTML = valueprenom2;
let age2 = document.getElementById("age2");
let valueage2 = tabUser[1].age;
age2.innerHTML = valueage2;
let note2 = document.getElementById("note2");
let valueNote2 = tabUser[1].notes;
note2.innerHTML = valueNote2;
let mail2 = document.getElementById("mail2");
let valueMail2 = tabUser[1].mail;
mail2.innerHTML = valueMail2;
// PERSONNE 3
let person3Nom = document.getElementById("person3");
let valueperson3 = tabUser[2].nom;
person3Nom.innerHTML = valueperson3;
let prenom3 = document.getElementById("prenom3");
let valueprenom3 = tabUser[2].prenom;
prenom3.innerHTML = valueprenom3;
let age3 = document.getElementById("age3");
let valueage3 = tabUser[2].age;
age3.innerHTML = valueage3;
let note3 = document.getElementById("note3");
let valueNote3 = tabUser[2].notes;
note3.innerHTML = valueNote3;
let mail3 = document.getElementById("mail3");
let valueMail3 = tabUser[2].mail;
mail3.innerHTML = valueMail3;
// PERSONNE4
let person4Nom = document.getElementById("person4");
let valueperson4 = tabUser[3].nom;
person4Nom.innerHTML = valueperson4;
let prenom4 = document.getElementById("prenom4");
let valueprenom4 = tabUser[3].prenom;
prenom4.innerHTML = valueprenom4;
let age4 = document.getElementById("age4");
let valueage4 = tabUser[3].age;
age4.innerHTML = valueage4;
let note4 = document.getElementById("note4");
let valueNote4 = tabUser[3].notes;
note4.innerHTML = valueNote4;
let mail4 = document.getElementById("mail4");
let valueMail4 = tabUser[3].mail;
mail4.innerHTML = valueMail4;
// PERSONNE 5
let person5Nom = document.getElementById("person5");
let valueperson5 = tabUser[4].nom;
person5Nom.innerHTML = valueperson5;
let prenom5 = document.getElementById("prenom5");
let valueprenom5 = tabUser[4].prenom;
prenom5.innerHTML = valueprenom5;
let age5 = document.getElementById("age5");
let valueage5 = tabUser[4].age;
age5.innerHTML = valueage5;
let note5 = document.getElementById("note5");
let valueNote5 = tabUser[4].notes;
note5.innerHTML = valueNote5;
let mail5 = document.getElementById("mail5");
let valueMail5 = tabUser[4].mail;
mail5.innerHTML = valueMail5;
// PERSONNE 6
let person6Nom = document.getElementById("person6");
let valueperson6 = tabUser[5].nom;
person6Nom.innerHTML = valueperson6;
let prenom6 = document.getElementById("prenom6");
let valueprenom6 = tabUser[5].prenom;
prenom6.innerHTML = valueprenom6;
let age6 = document.getElementById("age6");
let valueage6 = tabUser[5].age;
age6.innerHTML = valueage6;
let note6 = document.getElementById("note6");
let valueNote6 = tabUser[5].notes;
note6.innerHTML = valueNote6;
let mail6 = document.getElementById("mail6");
let valueMail6 = tabUser[5].mail;
mail6.innerHTML = valueMail6;
// PERSONNE 7
let person7Nom = document.getElementById("person7");
let valueperson7 = tabUser[6].nom;
person7Nom.innerHTML = valueperson7;
let prenom7 = document.getElementById("prenom7");
let valueprenom7 = tabUser[6].prenom;
prenom7.innerHTML = valueprenom7;
let age7 = document.getElementById("age7");
let valueage7 = tabUser[6].age;
age7.innerHTML = valueage7;
let note7 = document.getElementById("note7");
let valueNote7 = tabUser[6].notes;
note7.innerHTML = valueNote7;
let mail7 = document.getElementById("mail7");
let valueMail7 = tabUser[6].mail;
mail7.innerHTML = valueMail7;
// PERSONNE 8
let person8Nom = document.getElementById("person8");
let valueperson8 = tabUser[7].nom;
person8Nom.innerHTML = valueperson8;
let prenom8 = document.getElementById("prenom8");
let valueprenom8 = tabUser[7].prenom;
prenom8.innerHTML = valueprenom8;
let age8 = document.getElementById("age8");
let valueage8 = tabUser[7].age;
age8.innerHTML = valueage8;
let note8 = document.getElementById("note8");
let valueNote8 = tabUser[7].notes;
note8.innerHTML = valueNote8;
let mail8 = document.getElementById("mail8");
let valueMail8 = tabUser[7].mail;
mail8.innerHTML = valueMail8;
// PERSONNE9
let person9Nom = document.getElementById("person9");
let valueperson9 = tabUser[8].nom;
person9Nom.innerHTML = valueperson9;
let prenom9 = document.getElementById("prenom9");
let valueprenom9 = tabUser[8].prenom;
prenom9.innerHTML = valueprenom9;
let age9 = document.getElementById("age9");
let valueage9 = tabUser[8].age;
age9.innerHTML = valueage9;
let note9 = document.getElementById("note9");
let valueNote9 = tabUser[8].notes;
note9.innerHTML = valueNote9;
let mail9 = document.getElementById("mail9");
let valueMail9 = tabUser[8].mail;
mail9.innerHTML = valueMail9;
// PERSONNE 10
let person10Nom = document.getElementById("person10");
let valueperson10 = tabUser[9].nom;
person10Nom.innerHTML = valueperson10;
let prenom10 = document.getElementById("prenom10");
let valueprenom10 = tabUser[9].prenom;
prenom10.innerHTML = valueprenom10;
let age10 = document.getElementById("age10");
let valueage10 = tabUser[9].age;
age10.innerHTML = valueage10;
let note10 = document.getElementById("note10");
let valueNote10 = tabUser[9].notes;
note10.innerHTML = valueNote10;
let mail10 = document.getElementById("mail10");
let valueMail10 = tabUser[9].mail;
mail10.innerHTML = valueMail10;
//

// PERSONNE 11
let person11Nom = document.getElementById("person11");
let valueperson11 = tabUser[10].nom;
person11Nom.innerHTML = valueperson11;
let prenom11 = document.getElementById("prenom11");
let valueprenom11 = tabUser[10].prenom;
prenom11.innerHTML = valueprenom11;
let age11 = document.getElementById("age11");
let valueage11 = tabUser[10].age;
age11.innerHTML = valueage11;
let note11 = document.getElementById("note11");
let valueNote11 = tabUser[10].notes;
note11.innerHTML = valueNote11;
let mail11 = document.getElementById("mail11");
let valueMail11 = tabUser[10].mail;
mail11.innerHTML = valueMail11;
// PERSONNE 12
let person13Nom = document.getElementById("person13");
let valueperson13 = tabUser[12].nom;
person13Nom.innerHTML = valueperson13;
let prenom13 = document.getElementById("prenom13");
let valueprenom13 = tabUser[12].prenom;
prenom13.innerHTML = valueprenom13;
let age13 = document.getElementById("age13");
let valueage13 = tabUser[12].age;
age13.innerHTML = valueage13;
let note13 = document.getElementById("note13");
let valueNote13 = tabUser[12].notes;
note13.innerHTML = valueNote13;
let mail13 = document.getElementById("mail13");
let valueMail13 = tabUser[12].mail;
mail13.innerHTML = valueMail13;
// PERSONNE 14
let person14Nom = document.getElementById("person14");
let valueperson14 = tabUser[13].nom;
person14Nom.innerHTML = valueperson14;
let prenom14 = document.getElementById("prenom14");
let valueprenom14 = tabUser[13].prenom;
prenom14.innerHTML = valueprenom14;
let age14 = document.getElementById("age14");
let valueage14 = tabUser[13].age;
age14.innerHTML = valueage14;
let note14 = document.getElementById("note14");
let valueNote14 = tabUser[13].notes;
note14.innerHTML = valueNote14;
let mail14 = document.getElementById("mail14");
let valueMail14 = tabUser[13].mail;
mail14.innerHTML = valueMail14;
// PERSONNE 15
let person15Nom = document.getElementById("person15");
let valueperson15 = tabUser[14].nom;
person15Nom.innerHTML = valueperson15;
let prenom15 = document.getElementById("prenom15");
let valueprenom15 = tabUser[14].prenom;
prenom15.innerHTML = valueprenom15;
let age15 = document.getElementById("age15");
let valueage15 = tabUser[14].age;
age15.innerHTML = valueage15;
let note15 = document.getElementById("note15");
let valueNote15 = tabUser[14].notes;
note15.innerHTML = valueNote15;
let mail15 = document.getElementById("mail15");
let valueMail15 = tabUser[14].mail;
mail15.innerHTML = valueMail15;
// PERSONNE 16
let person16Nom = document.getElementById("person16");
let valueperson16 = tabUser[15].nom;
person16Nom.innerHTML = valueperson16;
let prenom16 = document.getElementById("prenom16");
let valueprenom16 = tabUser[15].prenom;
prenom16.innerHTML = valueprenom16;
let age16 = document.getElementById("age16");
let valueage16 = tabUser[15].age;
age16.innerHTML = valueage16;
let note16 = document.getElementById("note16");
let valueNote16 = tabUser[15].notes;
note16.innerHTML = valueNote16;
let mail16 = document.getElementById("mail16");
let valueMail16 = tabUser[15].mail;
mail16.innerHTML = valueMail16;
// PERSONNE 17
let person17Nom = document.getElementById("person17");
let valueperson17 = tabUser[16].nom;
person17Nom.innerHTML = valueperson17;
let prenom17 = document.getElementById("prenom17");
let valueprenom17 = tabUser[16].prenom;
prenom17.innerHTML = valueprenom17;
let age17 = document.getElementById("age17");
let valueage17 = tabUser[16].age;
age17.innerHTML = valueage17;
let note17 = document.getElementById("note17");
let valueNote17 = tabUser[16].notes;
note17.innerHTML = valueNote17;
let mail17 = document.getElementById("mail17");
let valueMail17 = tabUser[16].mail;
mail17.innerHTML = valueMail17;
// PERSONNE 18
let person18Nom = document.getElementById("person18");
let valueperson18 = tabUser[17].nom;
person18Nom.innerHTML = valueperson18;
let prenom18 = document.getElementById("prenom18");
let valueprenom18 = tabUser[17].prenom;
prenom18.innerHTML = valueprenom18;
let age18 = document.getElementById("age18");
let valueage18 = tabUser[17].age;
age18.innerHTML = valueage18;
let note18 = document.getElementById("note18");
let valueNote18 = tabUser[17].notes;
note18.innerHTML = valueNote18;
let mail18 = document.getElementById("mail18");
let valueMail18 = tabUser[17].mail;
mail18.innerHTML = valueMail18;
// PERSONNE 19
let person19Nom = document.getElementById("person19");
let valueperson19 = tabUser[18].nom;
person19Nom.innerHTML = valueperson19;
let prenom19 = document.getElementById("prenom19");
let valueprenom19 = tabUser[18].prenom;
prenom19.innerHTML = valueprenom19;
let age19 = document.getElementById("age19");
let valueage19 = tabUser[18].age;
age19.innerHTML = valueage19;
let note19 = document.getElementById("note19");
let valueNote19 = tabUser[18].notes;
note19.innerHTML = valueNote19;
let mail19 = document.getElementById("mail19");
let valueMail19 = tabUser[18].mail;
mail19.innerHTML = valueMail19;
// PERSONNE 20
let person20Nom = document.getElementById("person20");
let valueperson20 = tabUser[19].nom;
person20Nom.innerHTML = valueperson20;
let prenom20 = document.getElementById("prenom20");
let valueprenom20 = tabUser[19].prenom;
prenom20.innerHTML = valueprenom20;
let age20 = document.getElementById("age20");
let valueage20 = tabUser[19].age;
age20.innerHTML = valueage20;
let note20 = document.getElementById("note20");
let valueNote20 = tabUser[19].notes;
note20.innerHTML = valueNote20;
let mail20 = document.getElementById("mail20");
let valueMail20 = tabUser[19].mail;
mail20.innerHTML = valueMail20;

//
let personNom = document.getElementById("personlast");
let valueperson = tabUser[11].nom;
personNom.innerHTML = valueperson;
let prenom = document.getElementById("prenomlast");
let valueprenom = tabUser[11].prenom;
prenom.innerHTML = valueprenom;
let age = document.getElementById("agelast");
let valueage = tabUser[11].age;
age.innerHTML = valueage;
let note = document.getElementById("notelast");
let valueNote = tabUser[11].notes;
note.innerHTML = valueNote;
let mail = document.getElementById("mailast");
let valueMail = tabUser[11].mail;
mail.innerHTML = valueMail;
