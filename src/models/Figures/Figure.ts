import { Cell } from "../Cell";
import { Colors } from "../Colors";
import Logo from '../../assets/black-bishop.png';

export enum FiguresName {
    FIGURE = 'Фігура',
    BISHOP = 'Слон',
    KING = 'Король',
    KNIGHT = 'Кінь',
    PAWN = 'Пішак',
    QUEEN = 'Королева',
    ROOK = 'Тура'
}

export class Figure {

    logo: typeof Logo | null;
    color: Colors;
    name: FiguresName;
    cell: Cell;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null
        this.name = FiguresName.FIGURE
        this.id = Math.random()
    }



}