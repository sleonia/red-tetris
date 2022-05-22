import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@mantine/core'
import { appWithTranslation, useTranslation } from 'next-i18next'

import { ThemeWrapper } from '../components'

import { GlobalStyles } from './index.styles'

const Root = ({ Component, pageProps }: AppProps) => {
    const { t } = useTranslation()

    return (
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
    )
}

export default appWithTranslation(Root)
