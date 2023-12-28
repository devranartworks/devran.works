import { IconProps } from "./iconTypes"

export interface SocialProps {
    platform: string,
    label: string,
    icon: React.FC<IconProps>,
    IconProps: IconProps,
    link: string
}