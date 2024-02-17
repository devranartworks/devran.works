import { SocialProps } from "../types/socialTypes"
import { IconGithub, IconLinkedIn, IconMail } from "./../components/Icons/index"

const socialData: { socialLink: SocialProps[] } = {
    socialLink: [
        {
            platform: "E-POSTA",
            label: "Contact yilmaz.ev@outlook.com",
            icon: IconMail,
            IconProps: { width: "22px", height: "22px" },
            link: "mailto:yilmaz.ev@outlook.com",
        },
        {
            platform: "LINKEDIN",
            label: "@yilmazev connect on LinkedIn",
            icon: IconLinkedIn,
            IconProps: { width: "22px", height: "22px" },
            link: "https://www.linkedin.com/in/yilmazev/",
        },
        {
            platform: "GITHUB",
            label: "@yilmazev view on Github",
            icon: IconGithub,
            IconProps: { width: "22px", height: "22px" },
            link: "https://github.com/yilmazev",
        },
    ],
}

export default socialData