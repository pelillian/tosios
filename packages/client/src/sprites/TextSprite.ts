import { Text, TextStyle } from 'pixi.js';

export class TextSprite extends Text {
    constructor(text: string, fontSize: number, anchorX: number, anchorY: number, style?: object) {
        super(
            '',
            new TextStyle({
                fontSize,
                fill: '#ffffff',
                fontFamily: 'Josefin Sans',
                align: 'left',
                fontWeight: 'bold',
                ...style,
            }),
        );
        this.anchor.set(anchorX, anchorY);
        this.text = text;
    }

    // Getters
    get left() {
        return this.x;
    }

    get right() {
        return this.x + this.width;
    }

    get top() {
        return this.y;
    }

    get bottom() {
        return this.y + this.height;
    }
}
