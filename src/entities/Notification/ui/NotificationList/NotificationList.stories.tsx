import {NotificationList} from "./NotificationList";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "entities/Notification/NotificationList",
    component: NotificationList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [StoreDecorator({})]
};

export const Normal = {
    args: {

    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: "GET",
                status: 200,
                response: [
                    {id: "1", title: "Title 1", description: "Description"},
                    {id: "2", title: "Title 3", description: "Description"},
                    {id: "3", title: "Title 3", description: "Description"},
                ],
            },
        ],
    }
};
