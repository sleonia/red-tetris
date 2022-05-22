import type { CSSObject } from '@emotion/react'

export const GlobalStyles: CSSObject = {
    '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
    }
}
