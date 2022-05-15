declare module 'tabler-icons-react/dist/icons/*' {
    import type { FC, SVGAttributes } from 'react'

    interface IconProps extends SVGAttributes<SVGElement> {
        color?: string;
        size?: string | number;
    }

    type Icon = FC<IconProps>
    const icon: Icon
    export default icon
}
