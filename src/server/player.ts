import {
    PLAYGROUND_WIDTH,
    PLAYGROUND_HEIGHT
} from '../constants'

const COLORS = [
    'red[6]',
    'grape[6]',
    'indigo[6]',
    'cyan[6]',
    'green[6]',
    'lime[4]',
    'yellow[6]',
    'orange[6]'
] as const

interface IPlayer {
    board: Array<Array<number>>
    move: (direction: 'left' | 'right') => void
    spawn: () => void
    // updateState: () 
}

export class Player implements IPlayer {
    private _board: Array<Array<number>>

    constructor () {
        this._board = Array
            .from({ length: PLAYGROUND_HEIGHT })
            .reduce<Array<Array<number>>>((acc) => {
                acc.push(
                    Array
                        .from({ length: PLAYGROUND_WIDTH })
                        .fill(0) as Array<number>
                )
                return acc
            }, [] as Array<Array<number>>)
    }

    get board () {
        return this._board
    }

    move (direction: 'left' | 'right') {}

    spawn () {}

}
