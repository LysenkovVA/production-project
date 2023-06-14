import {AppImage} from "./AppImage";
import Img from "./storybook.jpg";

export default {
    title: "shared/AppImage",
    component: AppImage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
};

export const Normal = {
    args: {
        src: Img,
        width: 200,
        height: 200
    }
};
