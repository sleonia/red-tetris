import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@mantine/core'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { Provider } from 'react-redux'

import { store, wrapper } from '../__data__/store'
import { ThemeWrapper } from '../components'

import { GlobalStyles } from './index.styles'

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
                    <Component {...pageProps} />
                </ThemeWrapper>
            </div>
        </Provider>
    )
}

export default appWithTranslation(wrapper.withRedux(Root))
