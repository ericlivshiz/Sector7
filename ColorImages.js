
/**
 * Initializes all colors and images used in the game
 * Every color mapped to the images related to this color
 * Every color is instance of this class. Also, this class contains the array of all images.
 * This class contains array of its instance (one instance per color)
 * All publis methods are static.
 * Nobody need to instantiate this class, but at least once static init() method must be called.
 * Static init() method verifies that this class is instantiated only once. Thus, it's safe to call init() multiple times.
 */
export default class ColorImages {
    static colors = [];
    constructor(color, 
        tileImage, 
        offset, 
        spinnerRotation,
        startImage, 
        keyImage, 
        playerImage) {

        this.color = color;
        this.tileImage = tileImage;
        this.offset = offset;
        this.spinnerRotation = spinnerRotation;
        this.startImage = startImage;
        this.keyImage = keyImage;
        this.playerImage = playerImage;

        console.log("Instantiated color:", this.color);
    }

    /**
     * Returns new color that is based on the provided offset, but preserves the spinner result
     * @param {*} color -- spinner result
     * @param {*} colorOffset -- color selected on the additional prompt
     * @returns 
     */
    static newColor(color, colorOffset) {
        var selectedColor = ColorImages.getColor(colorOffset);
        return new ColorImages(
            selectedColor.color,
            selectedColor.tileImage,
            color.offset,
            color.spinnerRotation,
            selectedColor.startImage,
            selectedColor.keyImage,
            (color.playerImage) ? color.playerImage : selectedColor.playerImage
            );
    }

    static getColor(offset) {
        var instance = ColorImages.init();
        if (offset > instance.colors.length - 1) {
            throw console.error("Invalid offset", offset);
        }
        return instance.colors[offset];
    }

    static getNumberOfColors() {
        return this.init().colors.length;
    }

    static init() {

        var gameColors = window.top.gameColors;
        if (gameColors) {
            //console.log("Colors and Images already initiated");
            return gameColors;
        }
        ColorImages.RED = new ColorImages(
                "RED", 
                ColorImages.#image("redSquare.jpg"), 
                0, 
                765, 
                ColorImages.#image("rsbigstar.jpg"), 
                ColorImages.#image("redkey2.jpg"), 
                ColorImages.#image("redAstroFinal.png"));
        
        ColorImages.ORANGE = new ColorImages(
                    "ORANGE", 
                    ColorImages.#image("orangeSquare.jpg"), 
                    1, 
                    1035, 
                    ColorImages.#image("orbigstar.png"), 
                    ColorImages.#image("ok.jpg"), 
                    ColorImages.#image("orangeAstro.png"));
        
        ColorImages.YELLOW = new ColorImages(
                    "YELLOW", 
                    ColorImages.#image("yellowSquare.jpg"), 
                    2, 
                    990, 
                    ColorImages.#image("ybigstar.jpg"), 
                    ColorImages.#image("yk.jpg"), 
                    ColorImages.#image("yellowAstro.png"));
                    
        ColorImages.GREEN = new ColorImages(
                    "GREEN", 
                    ColorImages.#image("greenSquare.jpg"), 
                    3, 
                    950, 
                    ColorImages.#image("greenStar.png"), 
                    ColorImages.#image("gk.jpg"), 
                    ColorImages.#image("greenAstro.png"));
        
        ColorImages.BLUE = new ColorImages(
                    "BLUE", 
                    ColorImages.#image("blueSquare.jpg"), 
                    4, 
                    910, 
                    ColorImages.#image("blueStar.png"), 
                    ColorImages.#image("bk.jpg"), 
                    ColorImages.#image("blueAstro.png"));
        
        ColorImages.PURPLE = new ColorImages(
                    "PURPLE", 
                    ColorImages.#image("purpleSquare.jpg"), 
                    5, 
                    865, 
                    ColorImages.#image("purpleStar.png"), 
                    ColorImages.#image("pk.jpg"), 
                    ColorImages.#image("purpleAstro.png"));
        
        ColorImages.RAINBOW = new ColorImages(
                    "RAINBOW", 
                    null, 
                    6, 
                    820, 
                    null, 
                    null, 
                    ColorImages.#image("rainbowAstro.png"));
        
        ColorImages.UNKNOWN = new ColorImages(
                    "UNKNOWN", 
                    null, 
                    7, 
                    1080, 
                    null, 
                    null, 
                    null);
        
        ColorImages.borderImage = ColorImages.#image("intergalactic.jpeg");
        ColorImages.whiteImage = ColorImages.#image("whiteSquare.jpg");
        ColorImages.s7Image = ColorImages.#image("S7.png");
        ColorImages.cookieImage = ColorImages.#image("cookienobg.jpg");

        ColorImages.colors = [
            ColorImages.RED,
            ColorImages.ORANGE,
            ColorImages.YELLOW,
            ColorImages.GREEN,
            ColorImages.BLUE,
            ColorImages.PURPLE,
            ColorImages.RAINBOW,
            ColorImages.UNKNOWN
        ];

        console.log("Colors & Images initiated:", ColorImages.colors);
        window.top.gameColors = this;
        return this;
    }
        
    static #image(fileName) {
        const img = new Image();
        img.src = `images/${fileName}`;
        return img;
    }
}
    



