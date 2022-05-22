import { useTranslation } from 'next-i18next'
import { Anchor, Group, Title } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'

import { useLogoStyles } from './logo.styles'

export const Logo = () => {
    const { classes } = useLogoStyles()
    const { t } = useTranslation('common')

    return (
        <Group>
            <Link href="/">
                <Anchor tabIndex={0} className={classes.logo}>
                    <Image
                        src="/red-tetris.ico"
                        alt={t('logo.alt')}
                        width={28}
                        height={28}
                    />
                    <Title className={classes.logoTitle} order={4}>{t('title')}</Title>
                </Anchor>
            </Link>
        </Group>
    )
}
