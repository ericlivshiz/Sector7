// import Player from './player1.js';
import TileMap from './TileMap.js';
import Game from './Game.js';
import ColorImages from './ColorImages.js';
let container = document.querySelector(".container");
//let btn = document.getElementById("spin");

window.onload = function () {
    console.log("Spinner window.onLoad Doc: " + document.documentURI);
    var btn = document.getElementById("spin");
    btn.onclick = function () {

        var number = Math.floor(Math.random() * ColorImages.getNumberOfColors());
        console.log("Color for number: ", number);

        var selectedColor = ColorImages.getColor(number);
        console.log("Selected spinner color: ", selectedColor);
        container.style.transform = "rotate(" + selectedColor.spinnerRotation + "deg)";
        function spinToGame() {
            Game.spinner(selectedColor);
        }
        setTimeout(spinToGame, 3500);
        
/*
        
        
        if (number == 1) {
            container.style.transform = "rotate(" + 765 + "deg)"
            console.log("color should be red");
            
        }
        if (number == 2) {
            container.style.transform = "rotate(" + 1035 + "deg)"
            console.log("color should be orange");
            
        }
        if (number == 3) {
            container.style.transform = "rotate(" + 990 + "deg)"
            console.log("color should be yellow");
            
        }
        if (number == 4) {
            container.style.transform = "rotate(" + 950 + "deg)"
            console.log("color should be green");
            
        }
        if (number == 5) {
            container.style.transform = "rotate(" + 910 + "deg)"
            console.log("color should be blue");
            
        }
        if (number == 6) {
            container.style.transform = "rotate(" + 865 + "deg)"
            console.log("color should be purple");
            
        }
        if (number == 7) {
            container.style.transform = "rotate(" + 820 + "deg)"
            console.log("color should be choose color");

        }
        if (number == 0) {
            container.style.transform = "rotate(" + 1080 + "deg)"
            console.log("color should be rainbow");

        }

        Game.spinner(number);
        */
       
    }




// btn.onlick = function() {
    // container.style.transform = "rotate(" + nuumber + "deg)"
    // number += Math.ceil(Math.random() * 10000);
    // 
}