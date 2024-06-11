import {Cell} from "./Cell"
import { Colors } from "./Colors"

import { King } from "./Figures/King"
import { Queen } from './Figures/Queen'
import { Rook } from "./Figures/Rook"
import { Pawn } from "./Figures/Pawn"
import { Knight } from "./Figures/Knight"
import { Bishop } from "./Figures/Bishop"

export class Board {

    cells: Cell[][] = []

    initCells () {
        for(let i = 0; i < 8; i++) {

             const row: Cell[] = []

            for(let j = 0; j < 8; j++) {
                if((i+j) % 2 === 0) {
                    row.push(new Cell(this, j, i, null, Colors.BLACK))
                } else {
                    row.push(new Cell(this, j, i, null, Colors.WHITE))
                }
            }

            this.cells.push(row)
        }
    }

    getCells(x: number, y: number) {
        return this.cells[y][x]
    }
 
    addQueen() {
        new Queen(Colors.BLACK,this.getCells(3,0))
        new Queen(Colors.WHITE,this.getCells(3,7))
    }

    addKing() {
        new King(Colors.BLACK,this.getCells(4,0))
        new King(Colors.WHITE,this.getCells(4,7))
    }

    addRook() {
        new Rook(Colors.BLACK,this.getCells(0,0))
        new Rook(Colors.WHITE,this.getCells(0,7))
        new Rook(Colors.BLACK,this.getCells(7,0))
        new Rook(Colors.WHITE,this.getCells(7,7))
    }

    addPawn() {
        for(let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK,this.getCells(i,1))
            new Pawn(Colors.WHITE,this.getCells(i,6))
        }
    }

    addKnight() {
        new Knight(Colors.BLACK,this.getCells(1,0))
        new Knight(Colors.WHITE,this.getCells(6,7))
        new Knight(Colors.BLACK,this.getCells(6,0))
        new Knight(Colors.WHITE,this.getCells(1,7))
    }

    addBishop() {
        new Bishop(Colors.BLACK,this.getCells(2,0))
        new Bishop(Colors.WHITE,this.getCells(5,7))
        new Bishop(Colors.BLACK,this.getCells(5,0))
        new Bishop(Colors.WHITE,this.getCells(2,7))
    }
 
    addFigure() {
        this.addQueen()
        this.addKing()
        this.addRook()
        this.addPawn()
        this.addKnight()
        this.addBishop()
    }
}