import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import type { ColorScheme } from '@mantine/core'
import { useState } from 'react'

import { Header } from '../components'

const Root = ({ Component, pageProps }: AppProps) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
    const toggleColorScheme = (value: ColorScheme) => setColorScheme(value)

    return (
        <div>
            <Head>
                <title>Red tetris</title>
                <link rel="icon" href="red-tetris.ico" />
            </Head>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{ colorScheme }}
                >
                    <Component {...pageProps}>
                        <Header />
                    </Component>
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    )
}

export default Root
