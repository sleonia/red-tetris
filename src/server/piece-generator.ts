import { rotate90 } from '2d-array-rotation'

import type { Piece } from '../types'

import pieces from './pieces.json'

interface IPieceGenerator {
    getRandom: () => Piece
    rotate: (piece: Piece) => Piece
}

export class PieceGenerator implements IPieceGenerator {
    private pieces: Array<Piece>

    constructor () {
        this.pieces = pieces
    }

    public getRandom () {
        const index = Math.floor(Math.random() * (this.pieces.length - 1))
        return this.pieces[index]
    }

    // eslint-disable-next-line class-methods-use-this
    public rotate (piece: Piece) {
        return rotate90(piece) as Piece
    }
}
