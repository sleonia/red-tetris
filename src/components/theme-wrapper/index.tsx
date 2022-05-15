import { PropsWithChildren, useCallback } from 'react'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import type { ColorScheme } from '@mantine/core'

import { COLOR_SCHEME_KEY, THEMES } from '../../constants'
import { useUserTheme } from '../../hooks'


export const ThemeWrapper = ({ children }: PropsWithChildren<unknown>) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: COLOR_SCHEME_KEY,
        defaultValue: THEMES.light,
        getInitialValueInEffect: true
    })

    const toggleColorScheme = useCallback((value?: ColorScheme): void => {
        setColorScheme(value || (colorScheme === THEMES.dark ? THEMES.light : THEMES.dark))
    }, [colorScheme, setColorScheme])


    useUserTheme(toggleColorScheme)

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
