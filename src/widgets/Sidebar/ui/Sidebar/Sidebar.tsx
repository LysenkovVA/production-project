import { classNames } from "shared/lib/classNames/classNames";
import {memo, useState} from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import {SidebarItemsList} from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                /* eslint-disable-next-line i18next/no-literal-string */
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => {
                    return <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />;
                })}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
