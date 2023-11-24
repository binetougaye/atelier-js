const tabUser = [
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
];
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
