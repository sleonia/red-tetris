import { createStyles } from '@mantine/core'

const BORDER_WIDTH = 2

export const PLAYGROUND_WIDTH = 10
export const PLAYGROUND_HEIGHT = 20
export const BOARD_WIDTH = PLAYGROUND_WIDTH + BORDER_WIDTH
export const BOARD_HEIGHT = PLAYGROUND_HEIGHT + BORDER_WIDTH

const CELL_SIZE = '30px'

export const useBoardStyles = createStyles((theme) => ({
    frame: {
        display: 'grid',
        gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${CELL_SIZE})`,
        justifyContent: 'center',

        '& > div': {
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor: theme.colors.gray[3],
            border: `1px solid ${theme.colors.dark[5]}`
        }
    }
}))
