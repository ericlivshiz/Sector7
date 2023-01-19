import player from './Player.js';
import Game from './Game.js';
import makeVisible from './RiskIt.js';




export default function onPlayerMoved(player) {
    let x2ids = new Array("Rx2", "Ox2", "Yx2", "Gx2", "Bx2", "Px2");

    // this is how we access the spinnerFrame to remove the fade when the player is on a color tile, making the button accessible
    const spinnerFrame = window.top.document.getElementById('spinnerFrame');

    // These variables are just used to get the elements of cards in the cardFrame
    const cardFrame = document.getElementById('cardFrame');
    const cardDocument = cardFrame.contentWindow.document;
    var Image_Id = new Array(cardDocument.getElementById(x2ids[0]), cardDocument.getElementById(x2ids[1]), cardDocument.getElementById(x2ids[2]), cardDocument.getElementById(x2ids[3]), cardDocument.getElementById(x2ids[4]), cardDocument.getElementById(x2ids[5]));

    // if player is on a color tile, it needs to update cards and remove the fade from the spinnerFrame
    if (player.isOnColorTile()) {
        player.updateCards();
        spinnerFrame.classList.remove('fade');

        // The keys of card map are made up of colors the player gets, the values of the map are how many of each card the player has
        // Based on that map it displays whatever it needs to, if the map has key-green, value-2, it displays green card and x2 underneath
        for (const color of player.cards.keys()) {
            cardDocument.getElementById(color).style.visibility = 'visible';

            // If multiple cards are of red color, display the image showing x2 or key
            // Same for the other color cases

            switch (color) {
                case "RED":
                    if (player.cards.get(color) == 2)
                        Image_Id[0].style.visibility = 'visible';

                    else if (player.cards.get(color) >= 3)
                        Image_Id[0].src = "images/redKey1.png";

                    break;

                case "ORANGE":
                    if (player.cards.get(color) == 2)
                        Image_Id[1].style.visibility = 'visible';

                    else if (player.cards.get(color) >= 3)
                        Image_Id[1].src = "images/orangeKey1.png";

                    break;

                case "YELLOW":
                    if (player.cards.get(color) == 2)
                        Image_Id[2].style.visibility = 'visible';

                    else if (player.cards.get(color) >= 3)
                        Image_Id[2].src = "images/yellowKey1.png";

                    break;

                case "GREEN":
                    if (player.cards.get(color) == 2)
                        Image_Id[3].style.visibility = 'visible';

                    else if (player.cards.get(color) >= 3)
                        Image_Id[3].src = "images/greenKey1.png";

                    break;

                case "BLUE":
                    if (player.cards.get(color) == 2)
                        Image_Id[4].style.visibility = 'visible';

                    else if (player.cards.get(color) >= 3)
                        Image_Id[4].src = "images/blueKey1.png";

                    break;

                case "PURPLE":
                    if (player.cards.get(color) == 2)
                        Image_Id[5].style.visibility = 'visible';

                    else if (player.cards.get(color) >= 3)
                        Image_Id[5].src = "images/purpleKey1.png";

                    break;
            }

        }
    }
}

/*window.onload = function () {
     console.log("Cards onLoad");
     Game.addPlayerMovedListener(onPlayerMoved);
 }
*/