import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./ArticleViewSelector.module.scss";
import {memo} from "react";
import ListIcon from "@/shared/assets/icons/list-24-24.svg";
import TiledIcon from "@/shared/assets/icons/tiled-24-24.svg";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {Icon} from "@/shared/ui/Icon/Icon";
import {ArticleView} from "../../model/consts/consts";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <div
            className={classNames(cls.ArticleViewSelector, {}, [className])}
        >
            {viewTypes.map((viewType, index )=> (
                <Button
                    key={index}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames("", {[cls.notSelected]: viewType.view !== view}, )}
                    />
                </Button>
            )
            )}
        </div>
    );
});
