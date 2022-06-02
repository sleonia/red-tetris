export type ServerToClientEvents = {
    roomCheck: (roomId: string) => void
    roomCreate: (roomId: string) => void
    newGame: () => void
    startGame: () => void
    pauseGame: () => void
}

export type ClientToServerEvents = {
    joinRoom: (hasRoom: boolean) => void
    newGame: (roomId: string) => void
    startGame: () => void
    pauseGame: () => void
    newState: () => void
}
