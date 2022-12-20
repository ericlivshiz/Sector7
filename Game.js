import TileMap, { Board } from './TileMap.js';
import Player from './Player.js';
import Tile from './Tile.js';
import ColorImages from './ColorImages.js';
import disableRollButton from './diceRoll.js';

export default class Game {
    constructor(canvas) {

        if (Game._instance) {
            console.log("Game already exists");
            return Game._instance;
        }
        console.log("New Game");
        this.boardCanvas = canvas;
        ColorImages.init();
        this.player = new Player();
        this.tileMap = new TileMap();
        this.gameStarted = false;
        this.playerMovedListeners = [];
        this.board = new Board();
        Game._instance = this;
        window.top.game = this;
        console.log("Game is instantiated");
    }

    // This calls a method in board
    // The whole logic behind this needs to change
    // Ideally, this mode would store whether we are
    // in easy mode or normal mode, and then the Board
    // class can ask what mode we are in, and change the
    // variable "CardsToPass" accordingly
    gameModes() {
        this.board.isEasyMode();
    }


    static spinner(color) {
        //var game = JSON.parse(sessionStorage.getItem("game"));
        const game = window.top.game;
        if (!game) 
            throw "Game is not available for Spinner";
       
        if (!game.gameStarted) {
            if (!color.startImage) {
                const x = window.top.document.querySelector('.bg-modal');
                x.style.display = 'flex';
               
                var buttonArray = ['RB', 'OB', 'YB', 'GB', 'BB', 'PB'];
                for (let i = 0; i < buttonArray.length; i++) {
                    window.top.document.getElementById(buttonArray[i]).addEventListener('click', function () {
                        color = ColorImages.getColor(i);
                        console.log("Logging color: ", color);
                        x.style.display = 'none';
                        game.startGame(color);
                    });

                }
               
               
            } else {
                game.startGame(color);
            }
            
        }
        else {
            game.movePlayerWithSpin(color);
        }
    }

    static diceRollMove(total) {
        var game = window.top.game;
        console.log("Dice rolled total: ", total);

        game.movePlayerWithDice(total);
    }

    static addPlayerMovedListener(listener) {
        var game = window.top.game;
        game.playerMovedListeners.push(listener);
        console.log("Added Listener", listener);
    }

    notifyListeners(player) {
        console.log("Notifying Listeners", this.playerMovedListeners);
        this.playerMovedListeners.forEach(listener => listener(player));
    }

    loadBoard() {
        if (this.boardCanvas) {
            this.tileMap.draw(this.boardCanvas);
            console.log("Board loaded");
        } else {
            console.log("Board Canvas not found");
        }
    }

    startGame(color) {
        this.player.setColor(color);
        this.tileMap.addPlayer(this.player, color, this.boardCanvas);
        this.gameStarted = true;
        game.gameModes();
        console.log("Game started");
    }

    movePlayerWithSpin(color) {
        this.tileMap.movePlayerSpinner(this.player, color, this.boardCanvas);
        console.log("Player moved");
    }

    movePlayerWithDice(totalSteps) {
        const game = this;
        this.tileMap.movePlayerDice(totalSteps, this.boardCanvas, function(player) { game.notifyListeners(player) });
    }

}

function loadTileMap() {
    var iframe = window.parent.document.getElementById("mapFrame");
    if (!iframe) {
        console.log("Cannot load TileMap. iFrame not found in document: ", document);
        return;
    }
    var canvas = iframe.contentWindow.document.getElementById("game");
    if (canvas != null) {
        var game = getGame(canvas);
        game.loadBoard();
    } else {
        console.log("Cannot load TileMap. Canvas not found in document: ", document);
    }
}

//gets existing instance or creates the new one
//canvas parameter must be not null
function getGame(canvas) {
    var game = window.top.game;
    if (game) {
        console.log("Game already instantiated");
    } else {
        game = new Game(canvas);
    }
    return game;
}

/*
    window.top.onload = function () {
        loadTileMap();
        console.log("Game window onLoad");
    }
 */  
    setTimeout(loadTileMap, 2000);
    loadTileMap();

