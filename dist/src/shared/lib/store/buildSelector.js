import { useSelector } from "react-redux";
export function buildSelector(selector) {
    var useSelectorHook = function () {
        return useSelector(selector);
    };
    return [useSelectorHook, selector];
}
