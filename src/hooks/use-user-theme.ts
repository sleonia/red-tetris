import { useEffect, useState } from 'react'
import { useMantineColorScheme } from '@mantine/core'

import { THEMES } from '../constants'

type ToggleColorScheme = ReturnType<typeof useMantineColorScheme>['toggleColorScheme']

export const useUserTheme = (toggleColorScheme: ToggleColorScheme) => {
    const [target, setTargetReached] = useState<null | boolean>(null)

    const updateTarget = (event: MediaQueryListEvent) => {
        if (event.matches) {
            setTargetReached(true)
        } else {
            setTargetReached(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const themeMedia = window.matchMedia(`(prefers-color-scheme: ${THEMES.dark})`)

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

    useEffect(() => {
        if (target === true) {
            toggleColorScheme(THEMES.dark)
        } else if (target === false) {
            toggleColorScheme(THEMES.light)
        }
    }, [target, toggleColorScheme])
}
