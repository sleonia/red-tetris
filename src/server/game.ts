export interface IGame {
    startGame: () => void
    pauseGame: () => void
    // createPlayer
    // updateState
}

export class Game implements IGame {
    private id: string

    constructor (id: string) {
        this.id = id
    }

    startGame () {}

    pauseGame () {}
}
