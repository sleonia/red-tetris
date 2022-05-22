import { useAppSelector } from '../../__data__'

export default function Game () {
    const roomId = useAppSelector((state) => state.roomId)

    return (
        <div>
            <p>
                roomId: {roomId.value}
            </p>
            <p>
                game page
            </p>
        </div>
    )
}
