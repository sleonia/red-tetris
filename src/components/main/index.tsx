import {
    Button,
    Center,
    MediaQuery,
    Paper,
    Stack
} from '@mantine/core'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import type { AppShellComponentsProps } from '../types'
import {
    CreateRoomModal,
    EnterRoomModal
} from '../modals'

import {
    useMainStyles,
    smallerSmPaper,
    largerSmPaper
} from './main.styles'

import { useSocket } from '../../context'
import Router from 'next/router'

export const Main = ({ opened }: Pick<AppShellComponentsProps, 'opened'>) => {
    const { t } = useTranslation()
    const { classes } = useMainStyles()
    const [enterRoomModal, setEnterRoomModal] = useState(false)
    const [createRoomModal, setCreateRoomModal] = useState(false)
    
    const socket = useSocket()

    useEffect(() => {
        socket.on('newGame', (roomId) => {
            console.log('🚀 ~ file: index.tsx ~ line 36 ~ socket.on ~ roomId', roomId)
            Router.push('/game')
        })
    }, [])

    return (
        <>
            <EnterRoomModal opened={enterRoomModal} onClose={() => setEnterRoomModal(false)} />
            <CreateRoomModal opened={createRoomModal} onClose={() => setCreateRoomModal(false)} />
            <div className={classes.main}>
                <MediaQuery
                    smallerThan="sm"
                    styles={smallerSmPaper(opened)}
                >
                    <MediaQuery largerThan="sm" styles={largerSmPaper}>
                        <Paper className={classes.paper} shadow="lg" radius="md" p="md" withBorder>
                            <Center className={classes.center}>
                                <Stack>
                                    <Button variant="outline" onClick={() => {
                                        socket.emit('newGame')
                                    }}>
                                        {t('main.solo-game')}
                                    </Button>
                                    <Button variant="outline">
                                        {t('main.collaborative-game')}
                                    </Button>
                                    <Button variant="outline" onClick={() => setCreateRoomModal(true)}>
                                        {t('main.create-new-game')}
                                    </Button>
                                    <Button variant="outline" onClick={() => setEnterRoomModal(true)}>
                                        {t('main.enter-room')}
                                    </Button>
                                </Stack>
                            </Center>
                        </Paper>
                    </MediaQuery>
                </MediaQuery>
            </div>
        </>
    )
}
