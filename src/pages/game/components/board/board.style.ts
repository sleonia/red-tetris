import get from 'lodash.get'
import { createStyles } from '@mantine/core'

import { PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT } from './../../../../constants'

const BORDER_WIDTH = 2

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
    },
    colored: {
        // FIXME большооооой костыль
        backgroundColor: `${get(theme.colors, 'cyan[6]')} !important`
    }
}))
