export type ServerToClientEvents = {
    roomCheck: (roomId: string) => void
    roomCreate: (roomId: string) => void
}

export type ClientToServerEvents = {
    joinRoom: (hasRoom: boolean) => void
}
