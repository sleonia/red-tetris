import { Modal, Input, ActionIcon } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { useTranslation } from 'next-i18next'
import Copy from 'tabler-icons-react/dist/icons/copy'
import CopyOff from 'tabler-icons-react/dist/icons/copy-off'
import { useSelector, useDispatch } from 'react-redux'

import type { ModalsProps } from './types'

import { increment, decrement, incrementByAmount } from '../../../__data__/counter'

export const EnterRoomModal = ({ opened, onClose }: ModalsProps) => {
    const { t } = useTranslation()
    const clipboard = useClipboard({ timeout: 500 })




    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

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
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </Modal>
    )
}
