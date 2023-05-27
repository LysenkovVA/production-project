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
import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useMemo } from "react"; // Импорт из сборки! "@reduxjs/toolkit/dist";
export function buildSlice(options) {
    var slice = createSlice(options);
    var useActions = function () {
        var dispatch = useDispatch();
        // @ts-ignore
        return useMemo(function () { return bindActionCreators(slice.actions, dispatch); }, [dispatch]);
    };
    return __assign(__assign({}, slice), { useActions: useActions });
}
