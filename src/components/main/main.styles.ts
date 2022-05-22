import type { CSSObject } from '@mantine/styles'
import { createStyles } from '@mantine/core'

export const smallerSmPaper = (opened: boolean): CSSObject => ({
    display: opened ? 'none' : '',
    height: '50%',
    width: '100%'
})

export const largerSmPaper: CSSObject = {
    width: '50%'
}

export const useMainStyles = createStyles(() => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center'
    },
    paper: {
        height: '50%'
    },
    center: {
        height: '100%'
    }
}))
