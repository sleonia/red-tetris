import type { Piece } from '../types'

import pieces from './pieces.json'

interface IPieceGenerator {
    generatePiece: () => unknown
}

export class PieceGenerator implements IPieceGenerator {
    private pieces: Array<Piece>

    constructor () {
        this.pieces = pieces
    }

    public generatePiece () {
        this.pieces = []
        return {}
    }
}
