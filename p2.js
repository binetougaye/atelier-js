const tabUser = [
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
