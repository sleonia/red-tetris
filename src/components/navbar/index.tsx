import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
    Navbar as MantineNavbar,
    Anchor,
    Text,
    Stack
} from '@mantine/core'
import { DeviceGamepad, Home } from 'tabler-icons-react'

import type { AppShellComponentsProps } from '../types'

import { useNavbarStyles } from './navbar.style'

export const Navbar = ({ opened }: Pick<AppShellComponentsProps, 'opened'>) => {
    const { classes } = useNavbarStyles()
    const { t } = useTranslation()

    return (
        <MantineNavbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 200 }}>
            <Stack spacing="sm">
                <Link href="/">
                    <Anchor tabIndex={0} className={classes.link}>
                        <Home strokeWidth={1.5} size={28} />
                        <Text size="xl" className={classes.text}>{t('navbar.link.home')}</Text>
                    </Anchor>
                </Link>
                <Link href="/game">
                    <Anchor tabIndex={0} className={classes.link}>
                        <DeviceGamepad strokeWidth={1.5} size={28} />
                        <Text size="xl" className={classes.text}>{t('navbar.link.game')}</Text>
                    </Anchor>
                </Link>
            </Stack>
        </MantineNavbar>
    )
}
