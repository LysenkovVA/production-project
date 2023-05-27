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
import { Button } from "@/shared/ui/Button";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";
import { useCounterActions } from "../model/slice/counterSlice";
export var Counter = function () {
    var t = useTranslation().t;
    var counterValue = useCounterValue();
    var _a = useCounterActions(), decrement = _a.decrement, increment = _a.increment;
    var hanldeIncrement = function () {
        increment();
    };
    var handleDecrement = function () {
        decrement();
    };
    return (_jsxs("div", { children: [_jsx("h1", __assign({ "data-testid": "value-title" }, { children: counterValue })), _jsx(Button, __assign({ onClick: hanldeIncrement, "data-testid": "increment-btn" }, { children: t("increment") })), _jsx(Button, __assign({ onClick: handleDecrement, "data-testid": "decrement-btn" }, { children: t("decrement") }))] }));
};
