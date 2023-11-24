const tabUser = [
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
