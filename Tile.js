import ColorImages from './ColorImages.js';

export default class Tile {
    constructor(color, image, typeOffset) {
        this.types = ["WHITE", "COLOR", "START", "KEY", "BORDER", "S7", "COOKIE"];
        this.color = color;
        this.row = 0;
        this.col = 0;
        this.typeOffset = typeOffset;
        this.image = image;
    }

    setPosition(rowOffset, colOffset) {
        this.row = rowOffset;
        this.col = colOffset;
        this.id = Tile.generateTileId(this.row, this.col);
    }

    static generateTileId(rowOffset, colOffset) {
        return "R" + rowOffset + "C" + colOffset;
    }

    static BORDER() {
        return new Tile(null, ColorImages.borderImage, 4);
    }

    static START(color) {
        return new Tile(color, color.startImage, 2);
    }

    static KEY(color) {
        return new Tile(color, color.keyImage, 3);
    }

    static WHITE() {
        return new Tile(null, ColorImages.whiteImage, 0);
    }

    static COLOR(color) {
        return new Tile(color, color.tileImage, 1);
    }

    static S7() {
        return new Tile(null, ColorImages.s7Image, 5);
    }

    static COOKIE() {
        return new Tile(null, ColorImages.cookieImage, 6);
    }

    isCookie() {
        return (this.typeOffset == 6);
    }

    isS7() {
        return (this.typeOffset == 5);
    }

    isBorder() {
        return (this.typeOffset == 4);
    }

    isKey() {
        return (this.typeOffset == 3);
    }

    isStart() {
        return (this.typeOffset == 2) ;
    }

    isColor() {
        return (this.typeOffset == 1) ;
    }

    isWhite() {
        return (this.typeOffset == 0) ;
    }


    getColOffset() {
        return this.col;
    }

    getRowOffset() {
        return this.row;
    }
    
    getId() {
        return this.id;
    }

    getImage() {
        return this.image;
    }

    getColor() {
        return this.color;
    }
}
