const mongoose = require("mongoose");
const Quotes = require("./models/Quote");

let dummyQuotes = [
  {
    author: "Samarth Vohra",
    text: "Aadmi ka jeewan sangarsh hai , haarna ya jeetna nahi",
  },
  {
    author: "Maverick Vohra",
    text: "Sirf Ek insaan se aapko sabse zyada pyaar milega aur vo mai hu",
  },
  {
    author: "Shubham Kumar",
    text: "Time , tide and JS wait for none",
  },
  {
    author: "Jatin + Hunir",
    text: "hard times, make hard men, hard men make easy times, easy times make weak men",
  },
];

async function seedDB() {
  await Quotes.insertMany(dummyQuotes);
  console.log("DB SEEDED WITH DATA 😉");
}

module.exports = seedDB;
