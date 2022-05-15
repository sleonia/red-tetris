import React, { useState } from 'react'
import { AppShell, Aside, MediaQuery, useMantineTheme, Text } from '@mantine/core'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header, Footer } from '../components'
import { THEMES } from '../constants'

export default function AppShellDemo(...rest) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)

    const handleOpened = () => setOpened(!opened)

    return (
        <AppShell
            styles={{
                main: {
                    height: '100vh',
                    background: theme.colorScheme ===  THEMES.dark ? theme.colors.dark[8] : theme.colors.gray[0]
                }
            }}
            // fixed
            asideOffsetBreakpoint="sm"
            header={<Header opened={opened} setOpened={handleOpened} />}
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={<Footer />}
        >
            {/* FIXME какой-то костыль */}
            {rest[0]?.children}
        </AppShell>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common'])
    }
})
