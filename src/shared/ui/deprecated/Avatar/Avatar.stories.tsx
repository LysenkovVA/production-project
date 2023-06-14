import { Avatar } from "./Avatar";
import AvatarImg from "./storybook.jpg";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        size: 150,
        src: AvatarImg,
        alt: "avatar"
    }
};

export const Small = {
    args: {
        size: 50,
        src: AvatarImg,
        alt: "avatar"
    }
};
