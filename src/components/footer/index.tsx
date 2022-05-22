import { useTranslation } from 'next-i18next'
import {
    Footer as MantineFooter,
    Stack,
    Container,
    Text,
    Divider,
    Group
} from '@mantine/core'

import { ExternalLink } from '../external-link'
import { Logo } from '../logo'

import { useFooterStyles } from './footer.style'

export const Footer = () => {
    const { t } = useTranslation()
    // const { t } = useTranslation('common')
    const { classes } = useFooterStyles()

    return (
        <MantineFooter height={120} p="md">
            <Container>
                <Stack spacing="sm">
                    <Group align="start" position="apart">
                        <Logo />
                        <Text size="md" color="gray">{t('footer.description')}</Text>
                        <Group className={classes.wrapper} spacing="xl">
                            <Stack spacing="xs">
                                <ExternalLink href={t('footer.follow-me-github-link')}>
                                    <Text size="sm">{t('footer.follow-me-github')}</Text>
                                </ExternalLink>
                            </Stack>
                        </Group>
                    </Group>
                    <Divider />
                    <ExternalLink href={t('github.me.link')}>
                        <Text size="sm" color="gray" underline>{t('footer.build-by')}</Text>
                    </ExternalLink>
                </Stack>
            </Container>
        </MantineFooter>
    )
}
