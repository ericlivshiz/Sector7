import Game from './Game.js';
import Player from './Player.js';


let images = ["images/dice-01.png", "images/dice-02.png", "images/dice-03.png",
    "images/dice-04.png", "images/dice-05.png", "images/dice-06.png"];

let dice = document.querySelectorAll("img");

//let btn = document.getElementById("roll");

let riskItButtonID = "riskItButton";
let riskItButton = window.top.document.getElementById(riskItButtonID);
let spinnerFrame = window.top.document.getElementById('spinnerFrame');

window.onload = function () {
    console.log("Dice window.onLoad Doc: " + document.documentURI);
    var btn = document.getElementById("roll");
    btn.onclick = function () {

        if (riskItButton.style.visibility = 'visible') {
            riskItButton.style.visibility = 'hidden';
            spinnerFrame.classList.add('fade');
        }

        dice.forEach(function (die) {
            die.classList.add("shake");
        });
        setTimeout(function () {
            dice.forEach(function (die) {
                die.classList.remove("shake");
            });
            let dieOneValue = Math.floor(Math.random() * 6);
            let dieTwoValue = Math.floor(Math.random() * 6);
            console.log(dieOneValue, dieTwoValue);
            document.querySelector("#die-01").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die-02").setAttribute("src", images[dieTwoValue]);
            document.querySelector("#total").innerHTML = "Your roll is "
                + ((dieOneValue + 1 + dieTwoValue + 1));
            let total = ((dieOneValue + 1) + (dieTwoValue + 1));
            Game.diceRollMove(total);

        },
            1000
        );

        var game = window.top.game;
        game.callUpdateCards();
    }

}



export default function disableRollButton() {
    var rollButtonElement = document.getElementById('roll');
    console.log('roll button element: ', rollButtonElement);
    if (rollButtonElement.disabled)
        rollButtonElement.disabled = false;
    else {
        rollButtonElement.disabled = true;
    }
}