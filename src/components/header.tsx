import {
    AppShell,
    Navbar,
    Header as MantineHeader,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme
} from '@mantine/core'

import { useTheme } from '../hooks'

export const Header = () => {
    useTheme()

    return (
        <MantineHeader height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={true}
                        // opened={opened}
                        // onClick={() => setOpened((o) => !o)}
                        size="sm"
                        // color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>

                <Text>Application header</Text>
            </div>
        </MantineHeader>
    )
}
