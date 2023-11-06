// Variables
let btn = document.getElementById("newquote");
console.log(btn);
let person = document.querySelector(".person");
let span = document.querySelector(".quote");

const quotes = [
  {
    quote:
      "The best way to find yourself is to lose yourself in the service of others",
    person: "Mahatma Gandhi",
  },
  {
    quote:
      "At his best, man is the noblest of all animals; separated from law and justice he is the worst",
    person: "Aristote",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    person: "Benjamin Franklin",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter",
    person: "Martin Luther King, Jr",
  },
  {
    quote: "The journey of a thousand miles begins with one step",
    person: "Lao Tzu",
  },
];

btn.addEventListener("click", function () {
  for (i = 0; i < quotes.length; i++) {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    span.innerHTML = quotes[randomNumber].quote;
    person.innerHTML = quotes[randomNumber].person;
  }
});
