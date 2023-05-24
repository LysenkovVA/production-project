import {NotificationItem} from "./NotificationItem";

export default {
    title: "entities/Notification/NotificationItem",
    component: NotificationItem,
    argTypes: {
        backgroundColor: {control: "color"},
    },
};

export const Normal = {
    args: {
        item: {
            title: "Уведомление",
            description: "Текст уведомления"
        }
    }
};
