let firstScore: HTMLSpanElement | null = document.querySelector("#score-one");
let firstRandom: HTMLSpanElement | null = document.querySelector("#random-one");

let twoScore: HTMLSpanElement | null = document.querySelector("#score-two");
let twoRandom: HTMLSpanElement | null = document.querySelector("#random-two");

let restartBox: HTMLDivElement = document.querySelector(
    "#restart-box"
) as HTMLDivElement;
let restartBtn: HTMLButtonElement = document.querySelector(
    "#restart-btn"
) as HTMLButtonElement;

const firstBtn: HTMLButtonElement = document.querySelector(
    "#btn-one"
) as HTMLButtonElement;
const twoBtn: HTMLButtonElement = document.querySelector(
    "#btn-two"
) as HTMLButtonElement;

let firstText: HTMLSpanElement = document.querySelector(
    "#one-text"
) as HTMLSpanElement;
let twoText: HTMLSpanElement = document.querySelector(
    "#two-text"
) as HTMLSpanElement;

let sumOne: number = 0;
const generatedNumbersOne: number[] = [];

let sumTwo: number = 0;
const generatedNumbersTwo: number[] = [];
const randomNumberOne = document.getElementById("random-one");

function randomFuncOne(): void {
    if (sumOne >= 100) {
        restartBox.style.display = "block";
        alert("Winner Player 1 !");
        return;
    }
    const randomNumbersOne: number = Math.floor(Math.random() * 11);

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

function randomFuncTwo(): void {
    if (sumTwo >= 100) {
        restartBox.style.display = "block";
        alert("Winner Player 2 !");
        return;
    }
    const randomNumbersTwo: number = Math.floor(Math.random() * 11);

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
