var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, Suspense, useCallback } from "react";
import { Text, TextSize } from "@/shared/ui/Text";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { VStack } from "@/shared/ui/Stack";
import { Loader } from "@/shared/ui/Loader";
export var ArticleDetailsComments = memo(function (props) {
    var className = props.className, id = props.id;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (_jsxs(VStack, __assign({ gap: "16", max: true, className: classNames("", {}, [className]) }, { children: [_jsx(Text, { size: TextSize.L, 
                //className={cls.commentTitle}
                title: t("Комментарии") }), _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(AddCommentForm, { onSendComment: onSendComment }) })), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments })] })));
});
