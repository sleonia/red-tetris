import { useState } from 'react'
import { useMantineTheme, AppShell } from '@mantine/core'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header, Navbar, Footer } from '../components'
import { THEMES } from '../constants'
import { Main } from '../components/main'
import { useSocketConnect } from '../hooks'

export default function App () {
    const theme = useMantineTheme()
    useSocketConnect()
    const [opened, setOpened] = useState(false)
    const handleOpened = () => setOpened(!opened)

    return (
        <AppShell
            styles={{
                main: {
                    height: '100vh',
                    background: theme.colorScheme === THEMES.dark
                        /* comment: get color */
                        /* eslint-disable-next-line no-magic-numbers */
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0]
                }
            }}
            asideOffsetBreakpoint="sm"
            header={<Header opened={opened} setOpened={handleOpened} />}
            navbar={<Navbar opened={opened} />}
            footer={<Footer />}
        >
            <Main opened={opened} />
        </AppShell>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common'])
    }
})
