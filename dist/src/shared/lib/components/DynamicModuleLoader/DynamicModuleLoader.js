import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
export var DynamicModuleLoader = function (props) {
    var children = props.children, reducers = props.reducers, 
    // По умолчанию демонтируем всегда
    _a = props.removeAfterUnmount, 
    // По умолчанию демонтируем всегда
    removeAfterUnmount = _a === void 0 ? true : _a;
    var store = useStore();
    var dispatch = useDispatch();
    // Асинхронно добавляем редюсеры
    // Должен отработать только один раз при монтировании компонента
    useEffect(function () {
        var mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(function (_a) {
            var name = _a[0], reducer = _a[1];
            var mounted = mountedReducers[name];
            // Добавляем новый редюсер только если его нет
            if (!mounted) {
                store.reducerManager.add(name, reducer);
                // Для отладки
                dispatch({ type: "@INIT ".concat(name, " reducer") });
            }
        });
        return function () {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var name = _a[0];
                    store.reducerManager.remove(name);
                    // Для отладки
                    dispatch({ type: "@DESTROY ".concat(name, " reducer") });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (_jsx(_Fragment, { children: children }));
};
