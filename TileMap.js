import Player from './Player.js';
import Tile from './Tile.js';
import ColorImages from './ColorImages.js';
import Game from './Game.js';


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default class TileMap {
    constructor() {
        this.tileSizeW;
        this.tileSizeH;
        this.board = new Board();
        this.#initBoard();
        this.player = null;
        this.cpuPlayer = null;
    }

    #initBoard() {
        this.board.addRow()
            .addBorderTiles(1)
            .addKeyTile(ColorImages.RED)
            .addBorderTiles(23);

        this.board.addRow()
            .addBorderTiles(1)
            .addStartTiles()
            .addWhiteTile()
            .addTiles(ColorImages.RED, ColorImages.PURPLE)
            .addBorderTiles(1);

        this.board.addRow()
            .addBorderTiles(1)
            .addWhiteTile()
            .addBorderTiles(21)
            .addWhiteTile()
            .addBorderTiles(1);

        this.board.addRow()
            .addBorderTiles(1)
            .addColorWithKey(ColorImages.ORANGE)
            .addWhiteTile()
            .addTiles(ColorImages.YELLOW, ColorImages.PURPLE)
            .addWhiteTile()
            .addTiles(ColorImages.RED, ColorImages.BLUE)
            .addWhiteTile()
            .addBorderAround(ColorImages.RED);

        this.board.addRow()
            .addBorderWithWhite()
            .addWhiteTile()
            .addBorderTiles(17)
            .addColorTile(ColorImages.PURPLE)
            .addBorderWithWhite();

        this.board.addRow()
            .addBorderAround(ColorImages.RED)
            .addColorWithKey(ColorImages.YELLOW)
            .addWhiteTile()
            .addTiles(ColorImages.GREEN, ColorImages.PURPLE)
            .addWhiteTile()
            .addTiles(ColorImages.RED, ColorImages.GREEN)
            .addWhiteTiles(2)
            .addBorderAround(ColorImages.ORANGE);

        this.board.addRow()
            .addBorderTiles(1)
            .addWhiteTiles(3)
            .addBorderTiles(13)
            .addColorTile(ColorImages.BLUE)
            .addBorderAround(ColorImages.YELLOW)
            .addWhiteTile()
            .addBorderTiles(1)

        this.board.addRow()
            .addBorderAround(ColorImages.PURPLE)
            .addWhiteTile()
            .addBorderTiles(1)
            .addColorWithKey(ColorImages.GREEN)
            .addWhiteTile()
            .addTiles(ColorImages.BLUE, ColorImages.PURPLE)
            .addWhiteTile()
            .addTiles(ColorImages.RED, ColorImages.YELLOW)
            .addWhiteTiles(3)
            .addBorderAround(ColorImages.YELLOW)

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.ORANGE)
            .addBorderWithWhite()
            .addWhiteTile()
            .addBorderTiles(9)
            .addColorTile(ColorImages.GREEN)
            .addBorderAround(ColorImages.PURPLE)
            .addColorTile(ColorImages.RED)
            .addBorderWithWhite();

        this.board.addRow()
            .addBorderAround(ColorImages.ORANGE)
            .addWhiteTile()
            .addBorderWithWhite()
            .addColorWithKey(ColorImages.BLUE)
            .addWhiteTile()
            .addColorTile(ColorImages.PURPLE)
            .addWhiteTile()
            .addTiles(ColorImages.RED, ColorImages.ORANGE)
            .addWhiteTiles(4)
            .addBorderAround(ColorImages.GREEN);

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.RED)
            .addBorderAround(ColorImages.YELLOW)
            .addWhiteTiles(2)
            .addBorderTiles(5)
            .addColorTile(ColorImages.YELLOW)
            .addBorderAround(ColorImages.BLUE)
            .addColorTile(ColorImages.RED)
            .addBorderAround(ColorImages.ORANGE)
            .addWhiteTile()
            .addBorderTiles(1);

        this.board.addRow()
            .addBorderAround(ColorImages.BLUE)
            .addWhiteTiles(3)
            .addBorderTiles(1)
            .addColorWithKey(ColorImages.PURPLE)
            .addColorTile(ColorImages.RED)
            .addColorTile(ColorImages.ORANGE)
            .addColorTile(ColorImages.YELLOW)
            .addBorderTiles(1)
            .addWhiteTiles(4)
            .addBorderAround(ColorImages.ORANGE);

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.PURPLE)
            .addBorderAround(ColorImages.ORANGE)
            .addColorTile(ColorImages.GREEN)
            .addBorderTiles(1)
            .addWhiteTiles(2)
            .addCenterTiles()
            .addBorderAround(ColorImages.GREEN)
            .addColorTile(ColorImages.PURPLE)
            .addBorderAround(ColorImages.GREEN)
            .addColorTile(ColorImages.YELLOW)
            .addBorderWithWhite();

        this.board.addRow()
            .addBorderAround(ColorImages.GREEN)
            .addWhiteTiles(3)
            .addBorderAround(ColorImages.BLUE)
            .addColorTile(ColorImages.PURPLE)
            .addColorTile(ColorImages.BLUE)
            .addColorTile(ColorImages.GREEN)
            .addBorderTiles(1)
            .addWhiteTiles(4)
            .addBorderAround(ColorImages.BLUE)

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.ORANGE)
            .addBorderAround(ColorImages.RED)
            .addColorTile(ColorImages.YELLOW)
            .addBorderAround(ColorImages.GREEN)
            .addBorderTiles(4)
            .addColorTile(ColorImages.BLUE)
            .addBorderAround(ColorImages.RED)
            .addColorTile(ColorImages.ORANGE)
            .addBorderAround(ColorImages.GREEN)
            .addWhiteTile()
            .addBorderTiles(1)

        this.board.addRow()
            .addBorderAround(ColorImages.YELLOW)
            .addWhiteTiles(4)
            .addReverseOrder(ColorImages.YELLOW, ColorImages.ORANGE)
            .addWhiteTile()
            .addColorTile(ColorImages.PURPLE)
            .addWhiteTiles(4)
            .addBorderAround(ColorImages.PURPLE);

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.BLUE)
            .addBorderAround(ColorImages.GREEN)
            .addColorTile(ColorImages.ORANGE)
            .addBorderTiles(9)
            .addColorTile(ColorImages.ORANGE)
            .addBorderAround(ColorImages.ORANGE)
            .addColorTile(ColorImages.BLUE)
            .addBorderWithWhite()

        this.board.addRow()
            .addBorderAround(ColorImages.ORANGE)
            .addWhiteTiles(3)
            .addColorTile(ColorImages.RED)
            .addWhiteTile()
            .addReverseOrder(ColorImages.PURPLE, ColorImages.YELLOW)
            .addWhiteTiles(3)
            .addBorderAround(ColorImages.RED);

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.GREEN)
            .addBorderAround(ColorImages.PURPLE)
            .addBorderTiles(12)
            .addColorTile(ColorImages.GREEN)
            .addBorderAround(ColorImages.PURPLE)
            .addWhiteTile()
            .addBorderTiles(1);

        this.board.addRow()
            .addBorderAround(ColorImages.RED)
            .addWhiteTiles(2)
            .addReverseOrder(ColorImages.BLUE, ColorImages.RED)
            .addWhiteTile()
            .addReverseOrder(ColorImages.PURPLE, ColorImages.BLUE)
            .addWhiteTiles(2)
            .addBorderAround(ColorImages.ORANGE);

        this.board.addRow()
            .addBorderWithWhite()
            .addColorTile(ColorImages.ORANGE)
            .addBorderTiles(17)
            .addColorTile(ColorImages.YELLOW)
            .addBorderWithWhite();

        this.board.addRow()
            .addBorderAround(ColorImages.PURPLE)
            .addWhiteTile()
            .addReverseOrder(ColorImages.YELLOW, ColorImages.RED)
            .addWhiteTile()
            .addReverseOrder(ColorImages.PURPLE, ColorImages.RED)
            .addWhiteTile()
            .addBorderAround(ColorImages.GREEN);

        this.board.addRow()
            .addBorderWithWhite()
            .addBorderTiles(19)
            .addBorderWithWhite()

        this.board.addRow()
            .addBorderTiles(1)
            .addReverseOrder(ColorImages.BLUE, ColorImages.RED)
            .addWhiteTile()
            .addReverseOrder(ColorImages.PURPLE, ColorImages.RED)
            .addWhiteTile()
            .addColorTile(ColorImages.YELLOW)
            .addBorderTiles(1);

        this.board.addRow()
            .addBorderTiles(25);
    }

    #getStartingTile(color) {
        console.log("Starting tile for color:", color);
        return this.#getTile(1, color.offset * 2 + 1);
    }

    draw(canvas) {
        this.#setCanvasSize(canvas);
        // this.#clearCanvas(canvas, ctx);
        this.#drawTiles(canvas, 0, 0);
    }

    addPlayer(player, color, canvas) {
        console.log("Put player to color: ", color);
        this.player = player;
        var tile = this.#getStartingTile(color);
        this.player.setCurrentTile(tile);
        this.#drawTileImage(canvas, this.player.getImage(), tile);

    }

    addCPUPlayer(cpuPlayer, cpuColor, canvas) {
        console.log("Put cpu player to color: ", cpuColor);
        this.cpuPlayer = cpuPlayer;
        var tile = this.#getStartingTile(cpuColor);
        this.cpuPlayer.setCurrentTile(tile);
        this.#drawTileImage(canvas, this.cpuPlayer.getImage(), tile);
    }

    async movePlayerDice(steps, canvas, callback) {
        console.log("Moving player for steps: ", steps);
        for (let step = 0; step < steps; step++) {
            let nextTile =
                this.board.getNextPosition(this.player.getCurrentTile(),
                    this.player.isGoingBack(), this.player);
            console.log("Next tile for dice step: ", nextTile);

            // Edited on 1/20/23

            if (this.player.getCurrentTile() == this.cpuPlayer.getCurrentTile()) {
                console.log("BOTH PLAYERS ON THE SAME TILE");
                // Put some image to demonstrate this

                // add cpu player image to previous tile
                this.#drawTileImage(canvas, this.cpuPlayer.getImage(), this.cpuPlayer.getCurrentTile());
                console.log("Testing adding player image to previous tile");             
            }

            //remove player image from the previous tile
            else {
                var currentTile = this.player.getCurrentTile();
                this.#drawTileImage(canvas, currentTile.getImage(), currentTile);
                console.log("Normal adding player image to previous tile");
            }

            //draw player image on the next tile

            this.player.setCurrentTile(nextTile);
            this.#drawTileImage(canvas, this.player.getImage(), nextTile);
            await sleep(500);

            // this same code should be repeated in moveCPUPlayerDice, other then then both players on same square then change image logic

            
        }
        console.log("Callback", callback);
        callback(this.player);
        Game.CPUDiceMove();
        

    }

    async moveCPUPlayerDice(steps, canvas) {
        console.log("Inside move cpu player dice method");
        console.log("Moving cpu player for steps:", steps);
        for (let step = 0; step < steps; step++) {
            let nextTile =
                this.board.getNextPosition(this.cpuPlayer.getCurrentTile(),
                    this.cpuPlayer.isGoingBack(), this.cpuPlayer);
            console.log("Next tile for dice step: ", nextTile);

            if (this.player.getCurrentTile() == this.cpuPlayer.getCurrentTile()) {
                console.log("BOTH PLAYERS ON THE SAME TILE");
                // Put some image to demonstrate this

                // add cpu player image to previous tile
                this.#drawTileImage(canvas, this.player.getImage(), this.player.getCurrentTile());
                console.log("Testing adding player image to previous tile");
            }

            //remove cpu player image from the previous tile
            else {
                var currentTile = this.cpuPlayer.getCurrentTile();
                this.#drawTileImage(canvas, currentTile.getImage(), currentTile);
            }

            //draw cpu player image on the next tile
            this.cpuPlayer.setCurrentTile(nextTile);
            this.#drawTileImage(canvas, this.cpuPlayer.getImage(), nextTile);
            await sleep(500);
        }
    }

    movePlayerSpinner(color, ctx) {
        //TODO
    }

    /**
     * Draws tile by tile starting with the specified row and col offsets
     * Recursively calls itself
     * @param {*} canvas 
     * @param {*} startRow -- offset
     * @param {*} startCol -- offset
     * @returns 
     */
    #drawTiles(canvas, startRow, startCol) {
        //console.log("Draw tile for:", startRow+","+startCol);
        if (startRow >= this.board.getNumOfRows()) {
            return;
        }
        if (startCol >= this.board.getRow(startRow).getLength()) {
            //move to the next row
            if (startRow < this.board.getNumOfRows() - 1) {
                startRow = startRow + 1;
                startCol = 0;
            } else {
                return; //exit after last tile
            }
        }

        var tile = this.#getTile(startRow, startCol);
        var image = tile.getImage();
        //draw this tile
        this.#drawTileImage(canvas, image, tile);
        //move to the next tile in the row
        this.#drawTiles(canvas, startRow, startCol + 1);
    }

    #getTile(rowOffset, colOffset) {
        if (rowOffset >= this.board.getNumOfRows()) {
            throw Error("Invalid row offset: " + rowOffset);
        }
        var row = this.board.getRow(rowOffset);
        if (colOffset >= row.getLength()) {
            throw Error("Invalid col offset: " + colOffset);
        }
        return row.getTile(colOffset);
    }

    #drawTileImage(canvas, image, tile) {
        //console.log("Drawing tile: ", tile);
        //console.log("Draw Tile Image src: ", image.src);
        var width = document.getElementById('gameBoard').offsetWidth;
        var height = document.getElementById('gameBoard').offsetHeight;
        let tileNumInCol = 25;
        let tileNumInRow = 25;


        this.tileSizeW = width / tileNumInCol;
        this.tileSizeH = height / tileNumInRow;


        var ctx = canvas.getContext("2d");
        ctx.drawImage(image,
            tile.getColOffset() * this.tileSizeW,
            tile.getRowOffset() * this.tileSizeH,
            this.tileSizeW,
            this.tileSizeH
        );
    }


    #clearCanvas(canvas, ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    #setCanvasSize(canvas) {
        canvas.height = this.board.getNumOfRows() * this.tileSizeH;
        canvas.width = this.board.getRow(0).getLength() * this.tileSizeW;
    }
}


export class Board {
    constructor() {
        this.rows = [];
        this.cardsToPass;
    }

    addRow() {
        let row = new Row(this.rows.length);
        this.rows.push(row);
        return row;
    }

    getNumOfRows() {
        return this.rows.length;
    }

    getRow(rowOffset) {
        return this.rows[rowOffset];
    }

    /*
    * startTile -- current position of the player
    * isGoingBack -- true after picking up the cookie and returning back
    */
    // how this is supposed to work --
    // Game class imports Board class, it calls isEasyMode in a member called gameModes()
    // What doesn't work --
    // I can't figure out how to make this member return true when needed
    // It is returning false how it is now.
    isEasyMode() {
        let isOnEasy = false;
        window.top.document.getElementById('easy').addEventListener('click', function () {
            window.alert("Switched to Easy Mode");
            isOnEasy = true;
            return isOnEasy;
        });

    }
    getNextPosition(startTile, isGoingBack, player) {
        if (!this.isEasyMode()) {
            this.cardsToPass = 30;
        }
        else {
            this.cardsToPass = 0;
        }

        console.log("cardsToPass is: ", this.cardsToPass);

        if (this.#isIntersection(startTile) && !isGoingBack) {
            console.log("On intersection tile");
            //if player has enough cards of the required color on the intersection tile
            //the player goes right (stepping on the key tile)

            if (player.getCardAmount(startTile.getColor()) >= this.cardsToPass) {
                console.log("Has enough cards to go inside");
                return this.rows[startTile.getRowOffset()].getTile(startTile.getColOffset() + 1);
            }
            /*return this.rows[startTile.getRowOffset()].getTile(startTile.getColOffset() + 1);*/
        }

        var totalCols = this.rows[startTile.getRowOffset()].getLength();
        var totalRows = this.getNumOfRows();
        //determine vertical direction based on the current position and player direction
        var vertStep = 1;
        if ((startTile.getColOffset() < totalCols / 2 && !isGoingBack) ||
            (startTile.getColOffset() > totalCols / 2 && isGoingBack)) {
            vertStep = -1;
        }
        //determine horizontal direction based on the current position and player direction 
        var horizStep = 1;
        if ((startTile.getRowOffset() > totalRows / 2 && !isGoingBack) ||
            (startTile.getRowOffset() < totalRows / 2 && isGoingBack)) {
            horizStep = -1;
        }

        //move horizontally if next tile in the next col available
        var nextTileInRow = this.rows[startTile.getRowOffset()].getTile(startTile.getColOffset() + horizStep);
        if ((!nextTileInRow.isBorder() && !nextTileInRow.isKey() && !nextTileInRow.isS7()) || (nextTileInRow.isKey() && isGoingBack)) {
            return nextTileInRow;
        }

        //move vertically if next tile in the next row available
        var nextTileInCol = this.rows[startTile.getRowOffset() + vertStep].getTile(startTile.getColOffset());
        if (!nextTileInCol.isBorder()) {
            return nextTileInCol;
        }




        //turn and move horizontally
        return this.rows[startTile.getRowOffset() + horizStep].getTile(startTile.getColOffset() + vertStep);
    }

    /**
     * 
     * @param {*} tile 
     * @returns true if the next tile in the row is a key tile
     */
    #isIntersection(tile) {
        var nextTile = this.rows[tile.getRowOffset()].getTile(tile.getColOffset() + 1);
        return nextTile.isKey();
    }
}


export class Row {
    constructor(rowNum) {
        this.tiles = [];
        this.rowNum = rowNum;
    }

    addBorderTiles(count) {
        for (var i = 0; i < count; i++) {
            var tile = Tile.BORDER();
            this.#addTile(tile);
        }
        return this;
    }

    addBorderAround(color) {
        return this.addBorderTiles(1).addColorTile(color).addBorderTiles(1);
    }

    addBorderWithWhite() {
        return this.addBorderTiles(1).addWhiteTile().addBorderTiles(1);
    }

    addStartTiles() {
        return this
            .addStartTile(ColorImages.RED)
            .addWhiteTile()
            .addStartTile(ColorImages.ORANGE)
            .addWhiteTile()
            .addStartTile(ColorImages.YELLOW)
            .addWhiteTile()
            .addStartTile(ColorImages.GREEN)
            .addWhiteTile()
            .addStartTile(ColorImages.BLUE)
            .addWhiteTile()
            .addStartTile(ColorImages.PURPLE);
    }

    addTiles(startColor, endColor) {
        for (var i = startColor.offset; i < endColor.offset; i++) {
            this
                .addColorTile(ColorImages.getColor(i))
                .addWhiteTile();
        }

        return this.addColorTile(ColorImages.getColor(endColor.offset));
    }

    addReverseOrder(startColor, endColor) {
        for (var i = startColor.offset; i > endColor.offset; i--) {
            this
                .addColorTile(ColorImages.getColor(i))
                .addWhiteTile();
        }
        return this.addColorTile(ColorImages.getColor(endColor.offset));
    }

    addStartTile(color) {
        var tile = Tile.START(color);
        this.#addTile(tile);
        return this;
    }

    addColorWithKey(color) {
        return this.addColorTile(color).addKeyTile(color);
    }

    addKeyTile(color) {
        console.log("Color:" + color);
        var tile = Tile.KEY(color);
        this.#addTile(tile);
        return this;
    }

    addColorTile(color) {
        var tile = Tile.COLOR(color);
        this.#addTile(tile);
        return this;
    }

    addWhiteTiles(count) {
        for (var i = 0; i < count - 1; i++) {
            this.addWhiteTile().addBorderTiles(1);
        }
        return this.addWhiteTile();
    }

    addWhiteTile(color) {
        var tile = Tile.WHITE(color);
        this.#addTile(tile);
        return this;
    }

    addCenterTiles() {
        this.#addTile(Tile.S7()).#addTile(Tile.COOKIE());
        return this;
    }

    getLength() {
        return this.tiles.length;
    }

    getTile(colNum) {
        return this.tiles[colNum];
    }

    #addTile(tile) {
        tile.setPosition(this.rowNum, this.tiles.length);
        this.tiles.push(tile);
        return this;
    }

}