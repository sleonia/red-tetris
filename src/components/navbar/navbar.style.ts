import { createStyles } from '@mantine/core'

export const useNavbarStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        marginLeft: theme.spacing.xs
    }
}))
