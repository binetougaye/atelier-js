// Variables
let input = document.getElementById("input");
let depot = document.getElementById("depot");
let retrait = document.getElementById("retrait");
let text = document.getElementById("text");
depot.addEventListener("click", function () {
  let value = input.value;
  text.innerHTML += value;
});
