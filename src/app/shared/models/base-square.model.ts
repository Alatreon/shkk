export class SquareBase {
    pos: SquarePos;

    constructor(squarePos: SquarePos) {
        this.pos = squarePos
    }
}

export class SquarePos {
    posX: number;
    posY: number;
    constructor(posY: number, posX: number) {
        this.posX = posX;
        this.posY = posY;
    }
}

export class SquareInfo {
    color: string;
    status: number;
    type: number;
    scanned: boolean;
    constructor(color: string, status: number, type: number, scanned: boolean) {
        this.color = color;
        this.status = status;
        this.type = type;
        this.scanned = scanned;
    }
}