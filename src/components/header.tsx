import {
    AppShell,
    Navbar,
    Header as MantineHeader,
    Footer,
    ActionIcon,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme
} from '@mantine/core'
// import Sun from 'tabler-icons-react/dist/icons/sun'
import { useTranslation } from 'next-i18next';
import { useTheme } from '../hooks'

export const Header = () => {
    // useTheme()
    const { t, ...rest } = useTranslation('common');
    console.log('🚀 ~ file: header.tsx ~ line 20 ~ Header ~ t', t)
    console.log('🚀 ~ file: header.tsx ~ line 20 ~ Header ~ useTranslation', rest)

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
                <ActionIcon />
                <Text>{t('hello')}</Text>
            </div>
        </MantineHeader>
    )
}
