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
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";
import { UIReducer } from "@/features/UI";
import { rtkApi } from "@/shared/api/rtkApi";
export function createReduxStore(initialState, asyncReducers) {
    var _a;
    var rootReducers = __assign(__assign({}, asyncReducers), (_a = { counter: counterReducer, user: userReducer, ui: UIReducer }, _a[rtkApi.reducerPath] = rtkApi.reducer, _a));
    var reducerManager = createReducerManager(rootReducers);
    var store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        // Для тестов какие-то данные
        preloadedState: initialState,
        // Для использования аксиоса
        middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                }
            }
        }).concat(rtkApi.middleware); }
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
