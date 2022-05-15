import React, { useState } from 'react'
import { AppShell, Footer, useMantineTheme } from '@mantine/core'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components'

export default function AppShellDemo(...rest) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)

    const handleOpened = () => setOpened(!opened)

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
                }
            }}
            fixed
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={<Header opened={opened} setOpened={handleOpened} />}
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
