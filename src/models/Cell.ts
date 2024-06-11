import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./Figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    color: Colors;
    figure: Figure | null;
    board: Board;
    

    constructor(board: Board, x: number, y: number, figure: Figure | null, color: Colors) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.figure = figure
        this.color = color;
    }

}