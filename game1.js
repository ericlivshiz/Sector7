import TileMap from './TileMap.js';
import Player from './player1.js';


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileSize = 32;


const tileMap = new TileMap(tileSize);

const player = new Player;




function changeStyle() {
    var element = document.getElementById("boardMap");
    element.style.display = "block";
}

function gameLoop() {
    tileMap.draw(canvas, ctx);
    player.draw(ctx);
}



setInterval(gameLoop, 1000 / 60);


