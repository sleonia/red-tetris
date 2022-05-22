import {
    Button,
    Center,
    MediaQuery,
    Paper,
    Stack
} from '@mantine/core'
import { useTranslation } from 'next-i18next'

import type { AppShellComponentsProps } from '../../components/types'

import {
    useMainStyles,
    smallerSmPaper,
    largerSmPaper
} from './main.styles'

export const Main = ({ opened }: Pick<AppShellComponentsProps, 'opened'>) => {
    const { t } = useTranslation()
    const { classes } = useMainStyles()

    return (
        <div className={classes.main}>
            <MediaQuery
                smallerThan="sm"
                styles={smallerSmPaper(opened)}
            >
                <MediaQuery largerThan="sm" styles={largerSmPaper}>
                    <Paper className={classes.paper} shadow="lg" radius="md" p="md" withBorder>
                        <Center className={classes.center}>
                            <Stack>
                                <Button variant="outline">
                                    {t('main.solo-game')}
                                </Button>
                                <Button variant="outline">
                                    {t('main.collaborative-game')}
                                </Button>
                                <Button variant="outline">
                                    {t('main.create-new-game')}
                                </Button>
                                <Button variant="outline">
                                    {t('main.enter-room')}
                                </Button>
                            </Stack>
                        </Center>
                    </Paper>
                </MediaQuery>
            </MediaQuery>
        </div>
    )
}
