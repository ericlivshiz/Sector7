import Tile from './Tile.js';
import ColorImages from './ColorImages.js';

export default class Player {
    constructor(startTile) {
        this.currentTile = null;
        this.goingBack = false;
        this.color = null;
        this.cards = new Map();
        // Edited 12/23 below:
        this.isRiskItMove = false;
        this.shouldUpdateNext = true;
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

    // Edited 12/23
    // This method and the two below doesn't work perfect
    // it gives both the card from the spinner and card for tile
    // still only displays after diceroll (which might be alright)
    // the logic in update isn't perfect, if this.color.color == keyColor should not happen if it's from spinner
    riskItMove(keyColor) {
        console.log("Inside of riskItMove method in player");
        console.log("The color should be: ", keyColor.color);
        this.isRiskItMove = true;
        console.log("The boolean is set to: ", this.isRiskItMove);
        console.log("Calling update method from the spinner: ");
        this.update(keyColor.color, 1);
    }

    // Add a 3rd parameter isRiskItMove and change the logic?
    // Half of method will be if(this.isRiskItMove) other half will be
    // if(!this.isRiskItMove)
    update(keyColor, valueAmount) {
        var amt = 1;
        var amount = this.cards.get(keyColor);


        if (this.isRiskItMove) {
            if (amount)
                this.cards.set(keyColor, amount + amt);
            else
                this.cards.set(keyColor, amt);
            console.log("Array of cards when Risk It Move is true: ", this.cards);
            this.shouldUpdateNext = false;
            this.isRiskItMove = false;
            console.log("shouldUpdateNext is set to: ", this.shouldUpdateNext);
            console.log("RiskItMove is set to: ", this.isRiskItMove);
            return;
        }

        if (!this.isRiskItMove) {
            if (!this.shouldUpdateNext) {
                console.log("Shouldn't update the cards, should leave the method");
                this.shouldUpdateNext = true;
                return;
            }
            else {
                console.log("Should update the cards");
                if (this.color.color == keyColor)
                    amt = 2;
                if (amount)
                    this.cards.set(keyColor, amount + amt);
                else
                    this.cards.set(keyColor, amt);
                console.log("Array of cards on the dice roll", this.cards);

            }
        }
    }
    /*if (this.isRiskItMove()) {

    }

    if (!this.isRiskItMove()) {
        if (this.color.color == keyColor) 
            amt = 2;
    }
    
    
    if (amount) {
        this.cards.set(keyColor, amount + amt);
    } else {
        this.cards.set(keyColor, amt);
    }
    console.log("Array of cards: ", this.cards);
    
}*/

    updateCards() {
        if (this.isOnColorTile()) {
            console.log("Calling update method for the dice");
            this.update(this.currentTile.color.color, 1);
        }
    }


    /*    updateCards() {
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
    
            // get a reference to the iframe element in outerShell2.html
            const iframe = document.getElementById('spinnerFrame');
    
            // get a reference to the document object of wheelSpinner.html
            const wheelSpinnerDocument = iframe.contentWindow.document;
    
            // get a reference to the element with the ID "spin" in wheelSpinner.html
            const spinElement = wheelSpinnerDocument.getElementById('spin');
    
            // should remove the most recent addition of the card VALUE if greater than 1
            // should remove the most recent addition of the cards if its corresponding value is less then or equal to 1
            spinElement.addEventListener('click', function () {
                
                // get the keys of the map as an array
                var keys = Array.from(this.cards.keys());
    
                // get the key of the most recently added pair
                var mostRecentKey = keys[keys.length - 1];
    
                // get value of mostRecentKey
                var mostRecentValue = this.cards.get(mostRecentKey);
    
                // if the value is greater than 1, decrease it by 1
                if (mostRecentValue > 1) {
                    console.log("Should subtract value of key by 1");
                    this.cards.set(mostRecentKey, amt - 1);
                }
                // if the value is 1, remove the key from the map entirely
                else {
                    console.log("Should remove most recent key in map");
    
                    // delete the pair with the most recent key
                    this.cards.delete(mostRecentKey);
                }
    
                console.log("Array of Cards after the Risk It move: ", this.cards);
    
                // the binding is because when we addEventListener to spinElement, the "this" keyword is already referring to spinElement
                // the bind lets us use "this" inside the function the same as we would outside of the function
            }.bind(this));
            
        }*/

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