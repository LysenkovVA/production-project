import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import MainIcon from "@/shared/assets/icons/main20.svg";
import AboutIcon from "@/shared/assets/icons/about20.svg";
import ProfileIcon from "@/shared/assets/icons/profile20.svg";
import ArticleIcon from "@/shared/assets/icons/article20.svg";
import { SidebarItemType } from "../types/sidebar";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const/router";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: "Главная",
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: "О сайте",
        },
    ];

    // Ссылки только для авторизованных пользователей
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: "Профиль",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: "Статьи",
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
