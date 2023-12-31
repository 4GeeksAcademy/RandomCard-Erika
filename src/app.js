/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suitsArray = ["♦", "♥", "♠", "♣"];
let faceArray = [
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "A"
];

window.onload = function() {
  const cardGenerator = () => {
    let topSuitElement = document.querySelector(".topSuit");
    let numberElement = document.querySelector(".number");
    let bottomSuitElement = document.querySelector(".bottomSuit");

    let randomFaceIndex = Math.floor(Math.random() * faceArray.length);
    let randomSuitIndex = Math.floor(Math.random() * suitsArray.length);

    topSuitElement.innerHTML = suitsArray[randomSuitIndex];
    numberElement.innerHTML = faceArray[randomFaceIndex];
    bottomSuitElement.innerHTML = suitsArray[randomSuitIndex];

    let randomSuit = suitsArray[randomSuitIndex];
    if (randomSuit === "♥" || randomSuit === "♦") {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "red";
      });
    } else {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "black";
      });
    }
  };
  cardGenerator();
  let buttonElement = document.querySelector(".btn");
  buttonElement.addEventListener("click", () => {
    cardGenerator();
  });
};
