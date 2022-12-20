import player from './Player.js';
import Game from './Game.js';




function onPlayerMoved(player) {
    let x2ids = new Array("Rx2", "Ox2", "Yx2", "Gx2", "Bx2", "Px2");
    var Image_Id = new Array(document.getElementById(x2ids[0]), document.getElementById(x2ids[1]), document.getElementById(x2ids[2]), document.getElementById(x2ids[3]), document.getElementById(x2ids[4]), document.getElementById(x2ids[5]))


    console.log("Cards react on player move", player);
    if (player.isOnColorTile()) {
        player.updateCards();

        for (const color of player.cards.keys()) {
            document.getElementById(color).style.visibility = 'visible';


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
                        Image_Id[1].src = "images/redKey1.png";

                    break;
            }

        }
    }
}

    window.onload = function () {
        console.log("Cards onLoad");
        Game.addPlayerMovedListener(onPlayerMoved);
    }
