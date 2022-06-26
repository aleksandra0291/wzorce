import { Brush } from './Brush.js';
import { Pencil } from './Pencil.js';
import { Shape } from './Shape.js';
// FACTORY PATTERN - 
export class ToolsFactory {//  w farbryce mamy zarejestrowane 3 narzędzia pędzel, ołówek i kształty//

    constructor() {
        this.brush = new Brush(20, 'lightblue');
        this.pencil = new Pencil(3, 'red');
        this.shape = new Shape(20, 'red'); //  określenie jak tworzone są  narzędzia w aplikacji
    }

    getTool(tool) { // funkcja selektora zwracająca nam odpowiednią instancję
        switch (tool) {
            case 'brush':
                return this.brush;
            case 'pencil':
                return this.pencil;
            case 'shape':
                return this.shape;
        }
    }

}