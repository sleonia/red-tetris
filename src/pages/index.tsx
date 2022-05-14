import React, { useState } from 'react'
import {
    AppShell,
    Navbar,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme
} from '@mantine/core'

import { Header } from '../components'

export default function AppShellDemo (...rest) {
    console.log('🚀 ~ file: index.tsx ~ line 16 ~ AppShellDemo ~ rest', rest)
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
                }
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Text>Application navbar</Text>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
          Application footer
                </Footer>
            }
            // header={<Header />}
        >
            {rest[0]?.children}
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    )
}
