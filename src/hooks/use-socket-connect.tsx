import { useEffect, useState } from 'react'
import { showNotification } from '@mantine/notifications'
import { useTranslation } from 'next-i18next'
import CircleCheck from 'tabler-icons-react/dist/icons/circle-check'
import AlertCircle from 'tabler-icons-react/dist/icons/alert-circle'

import { useSocket } from '../context'

export const useSocketConnect = () => {
    const { t } = useTranslation()
    const socket = useSocket()
    const [isConnection, setIsConnection] = useState(false)

    useEffect(() => {
        if (isConnection) {
            if (socket.disconnected) {
                showNotification({
                    title: t('notification.disconnect.title'),
                    message: t('notification.disconnect.message'),
                    color: 'red',
                    icon: <AlertCircle
                        size={48}
                        strokeWidth={1.5}
                        color={'black'}
                    />
                })
            }

            if (socket.connected) {
                showNotification({
                    title: t('notification.connect.title'),
                    message: '',
                    color: 'blue',
                    autoClose: 2000,
                    icon: <CircleCheck
                        size={48}
                        strokeWidth={1.5}
                    />
                })
                setIsConnection(false)
            }
        }

        return () => {
            socket.disconnect()
        }
    }, [isConnection, socket, socket.connected, socket.disconnected])

    return () => {
        console.log(1)
        socket.connect()
        setIsConnection(true)
    }
}
