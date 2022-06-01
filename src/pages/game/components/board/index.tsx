import { useMemo } from 'react'

import {
    useBoardStyles,
    BOARD_WIDTH,
    BOARD_HEIGHT
} from './board.style'

export const Board = () => {
    const { classes } = useBoardStyles()

    const cells = useMemo(() => {
        const CELLS_COUNT = BOARD_WIDTH * BOARD_HEIGHT

        return Array
            .from({ length: CELLS_COUNT })
            .map((_, index) => <div key={index} />)
    }, [])

    return (
        <div className={classes.frame}>
            {cells}
        </div>
    )
}
