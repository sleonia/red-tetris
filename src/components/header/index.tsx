import {
    Header as MantineHeader,
    ActionIcon,
    MediaQuery,
    Burger,
    useMantineColorScheme
} from '@mantine/core'
import MoonStars from 'tabler-icons-react/dist/icons/moon-stars'
import Sun from 'tabler-icons-react/dist/icons/sun'
import { useTranslation } from 'next-i18next'

import { capitalize } from '../../utils'
import { THEMES } from '../../constants'

export type HeaderProps = {
    opened: boolean
    setOpened: () => void
}

export const Header = ({ opened, setOpened }: HeaderProps) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const { t } = useTranslation('common')

    return (
        <MantineHeader height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={setOpened}
                        size="sm"
                    />
                </MediaQuery>
                <ActionIcon
                    variant="transparent"
                    onClick={() => toggleColorScheme()}
                    title={t('theme-switch', { colorScheme: capitalize(colorScheme) })}
                >
                    {colorScheme === THEMES.dark
                        ? <Sun strokeWidth={1} size={36} />
                        : <MoonStars strokeWidth={1} size={36} />
                    }
                </ActionIcon>
            </div>
        </MantineHeader>
    )
}
