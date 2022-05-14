import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import { useMantineTheme, useMantineColorScheme } from '@mantine/core'

const COLOR_SCHEME_KEY = 'color-scheme-key'

export const useTheme = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    const [targetReached, setTargetReached] = useState(false)
    const [localStorageValue, setLocalStorageValue] = useLocalStorage({ key: COLOR_SCHEME_KEY })

    const updateTarget = (event: MediaQueryListEvent) => {
        if (event.matches) {
            setTargetReached(true)
        } else {
            setTargetReached(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const themeMedia = window.matchMedia('(prefers-color-scheme: dark)')

            themeMedia.addListener(updateTarget)

            if (themeMedia.matches) {
                setTargetReached(true)
            }

            return () => {
                themeMedia.removeListener(updateTarget)
            }
        }
        return void 0
    }, [])
    const newTheme = targetReached ? 'dark' : 'light'
    toggleColorScheme(newTheme)
    // TODO add to localstorage
    // setLocalStorageValue(newTheme)

}
