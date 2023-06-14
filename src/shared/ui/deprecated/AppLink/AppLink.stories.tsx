import {AppLink, AppLinkTheme} from "./AppLink";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        // Нужный аргумент
        to: "/"
    },
    decorators: [RouterDecorator]
};

export const Primary = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY
    }
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     children: "Text",
//     theme: AppLinkTheme.SECONDARY
// };
//
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//     children: "Text",
//     theme: AppLinkTheme.PRIMARY
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SecondaryDark = Template.bind({});
// SecondaryDark.args = {
//     children: "Text",
//     theme: AppLinkTheme.SECONDARY
// };
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];



