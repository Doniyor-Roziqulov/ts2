"use strict";
let firstScore = document.querySelector("#score-one");
let firstRandom = document.querySelector("#random-one");
let twoScore = document.querySelector("#score-two");
let twoRandom = document.querySelector("#random-two");
let restartBox = document.querySelector("#restart-box");
let restartBtn = document.querySelector("#restart-btn");
const firstBtn = document.querySelector("#btn-one");
const twoBtn = document.querySelector("#btn-two");
let firstText = document.querySelector("#one-text");
let twoText = document.querySelector("#two-text");
let sumOne = 0;
const generatedNumbersOne = [];
let sumTwo = 0;
const generatedNumbersTwo = [];
const randomNumberOne = document.getElementById("random-one");
function randomFuncOne() {
    if (sumOne >= 100) {
        restartBox.style.display = "block";
        alert("Winner Player 1 !");
        return;
    }
    const randomNumbersOne = Math.floor(Math.random() * 11);
    if (randomNumberOne) {
        randomNumberOne.innerText = `${randomNumbersOne}`;
    }
    sumOne += randomNumbersOne;
    generatedNumbersOne.push(randomNumbersOne);
    if (firstScore) {
        firstScore.innerText = `${sumOne}`;
    }
    firstBtn.disabled = true;
    twoBtn.disabled = false;
    firstText.style.display = "none";
    twoText.style.display = "block";
}
const randomNumberTwo = document.getElementById("random-two");
function randomFuncTwo() {
    if (sumTwo >= 100) {
        restartBox.style.display = "block";
        alert("Winner Player 2 !");
        return;
    }
    const randomNumbersTwo = Math.floor(Math.random() * 11);
    if (randomNumberTwo) {
        randomNumberTwo.innerText = `${randomNumbersTwo}`;
    }
    sumTwo += randomNumbersTwo;
    generatedNumbersTwo.push(randomNumbersTwo);
    if (twoScore) {
        twoScore.innerText = `${sumTwo}`;
    }
    firstBtn.disabled = false;
    twoBtn.disabled = true;
    firstText.style.display = "block";
    twoText.style.display = "none";
    restartBtn.addEventListener("click", () => {
        restartBox.style.display = "none";
        (sumOne = 0), (sumTwo = 0);
        if (twoScore) {
            twoScore.innerText = `${sumTwo}`;
        }
        if (firstScore) {
            firstScore.innerText = `${sumOne}`;
        }
        if (randomNumberTwo) {
            randomNumberTwo.innerText = `${0}`;
        }
        if (randomNumberOne) {
            randomNumberOne.innerText = `${0}`;
        }
    });
}
