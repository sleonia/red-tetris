import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import type { CSSObject } from '@emotion/react'

import { store, wrapper, socket } from '../__data__'
import { ThemeWrapper } from '../components'
import { SocketContext } from '../context'

const GlobalStyles: CSSObject = {
    '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
    }
}

const Root = ({ Component, pageProps }: AppProps) => {
    const { t } = useTranslation()

    return (
        <Provider store={store}>
            <div>
                <Head>
                    <title>{t('title')}</title>
                    <link rel="icon" href="/red-tetris.ico" />
                </Head>
                <ThemeWrapper>
                    <Global styles={GlobalStyles} />
                    <SocketContext.Provider value={socket}>
                        <NotificationsProvider>
                            <Component {...pageProps} />
                        </NotificationsProvider>
                    </SocketContext.Provider>
                </ThemeWrapper>
            </div>
        </Provider>
    )
}

export default appWithTranslation(wrapper.withRedux(Root))
