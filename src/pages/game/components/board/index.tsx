import { useState, useMemo } from 'react'
import { Group, Button } from '@mantine/core'

// FIXME только для проверки отрисовки
import { PieceGenerator } from '../../../../server/piece-generator'
import { useSocket } from '../../../../context'

import {
    useBoardStyles,
    BOARD_WIDTH,
    BOARD_HEIGHT
} from './board.style'

const p = new PieceGenerator()

export const Board = () => {
    const [state, setState] = useState(p.getRandom())
    const socket = useSocket()
    console.log('🚀 ~ file: index.tsx ~ line 19 ~ Board ~ socket', socket.id)

    const { classes } = useBoardStyles()

    const cells = useMemo(() => {
        const CELLS_COUNT = BOARD_WIDTH * BOARD_HEIGHT

        const tmp = Array
            .from({ length: CELLS_COUNT })
            .map((_, index) => <div key={index} />)

        state.forEach((col, colIndex) => {
            col.forEach((cell, cellIndex) => {
                if (cell !== 0) {
                    tmp[(colIndex * BOARD_WIDTH) + cellIndex] = <div className={classes.colored} />
                }
            })
        })

        return tmp
    }, [classes.colored, state])

    return (
        <>
            <Group>
                <Button onClick={() => socket.emit('startGame')}>Start</Button>
                <Button onClick={() => socket.emit('pauseGame')}>Pause</Button>
            </Group>
            <div className={classes.frame}>
                {cells}
            </div>
        </>
    )
}
