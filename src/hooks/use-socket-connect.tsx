import { useEffect, useState } from 'react'
import { showNotification } from '@mantine/notifications'
import { useTranslation } from 'next-i18next'
import CircleCheck from 'tabler-icons-react/dist/icons/circle-check'
import AlertCircle from 'tabler-icons-react/dist/icons/alert-circle'

import { useSocket } from '../context'
import { useAppDispatch } from '../__data__'
import { setUserId } from '../__data__/slices'

export const useSocketConnect = () => {
    const { t } = useTranslation()
    const socket = useSocket()
    const dispatch = useAppDispatch()
    const [state, setState] = useState<'connect' | 'disconnect' | null>(null)

    socket.on('connect', () => {
        dispatch(setUserId(socket.id))
        setState('connect')
    })

    socket.on('disconnect', () => setState('disconnect'))

    useEffect(() => {
        if (state === 'disconnect') {
            showNotification({
                title: t('notification.disconnect.title'),
                message: t('notification.disconnect.message'),
                color: 'red',
                icon: <AlertCircle size={48} strokeWidth={1.5} />
            })
            setState(null)
        } else if (state === 'connect') {
            showNotification({
                title: t('notification.connect.title'),
                message: '',
                color: 'blue',
                autoClose: 2000,
                icon: <CircleCheck size={48} strokeWidth={1.5} />
            })
            setState(null)
        }

    }, [state])
}
