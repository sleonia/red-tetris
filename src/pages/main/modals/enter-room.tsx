import { useCallback, useEffect, useState } from 'react'
import type { ChangeEventHandler, MouseEventHandler } from 'react'
import { Modal, TextInput, ActionIcon, Button, Stack } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { useTranslation } from 'next-i18next'
import Router from 'next/router'
import Copy from 'tabler-icons-react/dist/icons/copy'
import CopyOff from 'tabler-icons-react/dist/icons/copy-off'

import { change } from '../../../__data__/slices'
import { useAppDispatch, useAppSelector, socket } from '../../../__data__'

import type { ModalsProps } from './types'

export const EnterRoomModal = ({ opened, onClose }: ModalsProps) => {
    const dispatch = useAppDispatch()
    const roomId = useAppSelector((state) => state.roomId)
    const [toggle, setToogle] = useState(false)
    const [error, setError] = useState(false)

    const { t } = useTranslation()
    const clipboard = useClipboard({ timeout: 500 })

    useEffect(() => {
        if (toggle) {
            socket.on('joinRoom', (arg) => {
                if (!arg) {
                    setError(true)
                } else {
                    Router.push('/game')
                }
            })
            setToogle(false)
        }
    }, [toggle])

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        if (error) {
            setError(false)
        }
        dispatch(change(event.target.value))
    }, [dispatch, error])

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        event.preventDefault()
        socket.emit('roomCheck', roomId.value)
        setToogle(true)
    }, [roomId.value])

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={t('main.modal.title')}
            centered
        >
            <form>
                <Stack>
                    <TextInput
                        placeholder={t('main.modal.input.placeholder')}
                        value={roomId.value}
                        error={error ? t('main.modal.error-room') : void 0}
                        onChange={handleChange}
                        rightSection={(
                            <ActionIcon
                                title={t('main.modal.action-icon.copy')}
                                onClick={() => clipboard.copy(roomId.value)}
                            >
                                {clipboard.copied ? <CopyOff /> : <Copy />}
                            </ActionIcon>
                        )}
                    />
                    <Button
                        type="submit"
                        variant="outline"
                        disabled={!roomId.value}
                        onClick={handleClick}
                    >
                        {t('main.modal.submit-button')}
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}
