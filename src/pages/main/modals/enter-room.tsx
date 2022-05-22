import { Modal, Input, ActionIcon } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { useTranslation } from 'next-i18next'
import Copy from 'tabler-icons-react/dist/icons/copy'
import CopyOff from 'tabler-icons-react/dist/icons/copy-off'

import type { ModalsProps } from './types'

export const EnterRoomModal = ({ opened, onClose }: ModalsProps) => {
    const { t } = useTranslation()
    const clipboard = useClipboard({ timeout: 500 })


    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={t('main.modal.title')}
            centered
        >
            <Input
                placeholder={t('main.modal.input.placeholder')}
                rightSection={(
                    <ActionIcon
                        title={t('main.modal.action-icon.copy')}
                        onClick={() => clipboard.copy('Hello, world!')}
                    >
                        {clipboard.copied ? <CopyOff /> : <Copy />}
                    </ActionIcon>
                )}
            />
        </Modal>
    )
}
