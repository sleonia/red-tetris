import type { MantineThemeColors } from '@mantine/core'

type Colors = Extract<keyof MantineThemeColors,
| 'red'
| 'grape'
| 'indigo'
| 'cyan'
| 'green'
| 'lime'
| 'yellow'
| 'orange'
>

// red[6]
// grape[6]
// indigo[6]
// cyan[6]
// green[6]
// lime[4]
// yellow[6]
// orange[6]
