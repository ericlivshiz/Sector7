import player from './Player.js';
import TileMap from './TileMap.js';
import Game from './Game.js';
import ColorImages from './ColorImages.js';
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let spinnerFrame = window.top.document.getElementById("spinnerFrame");

window.onload = function () {
    console.log("Spinner window.onLoad Doc: " + document.documentURI);
    btn.onclick = function () {

        var number = Math.floor(Math.random() * ColorImages.getNumberOfColors());
        console.log("Color for number: ", number);

        var selectedColor = ColorImages.getColor(7);
        console.log("Selected spinner color: ", selectedColor);
        container.style.transform = "rotate(" + selectedColor.spinnerRotation + "deg)";

        // Edited 12/23
        console.log("Calling Game method Risk It Move");
        var game = window.top.game;
        game.callRiskItMove(selectedColor);


        function spinToGame() {
            Game.spinner(selectedColor);
            btn.disabled = true;
            container.style.transform = '';
            spinnerFrame.classList.add('fade');
        }
        setTimeout(spinToGame, 3500);


    }

    Game.addPlayerMovedListener(moveSpinner)
}

function moveSpinner(player) {
    var RiskItButton = window.top.document.getElementById('riskItButton');

    if (player.isOnColorTile()) {
        RiskItButton.style.visibility = 'visible';
        btn.disabled = false;
        spinnerFrame.classList.remove('fade');

    }
}