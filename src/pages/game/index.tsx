import { useState } from 'react'
import { Header } from '../../components'
import { useAppSelector } from '../../__data__'

import { Board } from './components'

export default function Game() {
    const roomId = useAppSelector((state) => state.roomId)
    const [opened, setOpened] = useState(false)
    const handleOpened = () => setOpened(!opened)
    return (
        <div>
            <Header opened={opened} setOpened={handleOpened} />
            <p>
                roomId: {roomId.value}
            </p>
            <p>
                game page
            </p>
            <Board />
        </div>
    )
}
