import Tile from './Tile.js';
import ColorImages from './ColorImages.js';

export default class Player {
    constructor(startTile) {
        this.currentTile = null;
        this.goingBack = false;
        this.color = null;
        this.cards = new Map();
    }

    getCurrentTile() {
        return this.currentTile;
    }

    isOnColorTile() {
        return this.getCurrentTile().isColor();
    }

    isGoingBack() {
        if (this.getCurrentTile().isCookie()) {
            console.log("Current Tile is cookie");
            this.goingBack = true;
        }
        return this.goingBack;
    }

    setCurrentTile(tile) {
        this.currentTile = tile;
    }

    getCardAmount(color) {
        return this.cards.get(color.color);
    }

    updateCards() {
        console.log("Current tile: ", this.currentTile);
        var tileColorName = this.currentTile.color.color;
        if (this.isOnColorTile()) {
            var amt = 1;
            if (this.color.color == tileColorName) {
                amt = 2;
            }
            var amount = this.cards.get(tileColorName);
            if (amount) {
                this.cards.set(tileColorName, amount + amt);
            } else {
                this.cards.set(tileColorName, amt);
            }
            console.log("Array of cards: ", this.cards);
        }
    }

    setGoBack() {
        this.isGoingBack = true;
    }

    setColor(color) {
        this.color = color;
    }

    getImage() {
        return this.color.playerImage;
    }
}