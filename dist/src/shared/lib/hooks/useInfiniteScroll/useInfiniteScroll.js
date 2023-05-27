import { useEffect } from "react";
export function useInfiniteScroll(_a) {
    var callback = _a.callback, triggerRef = _a.triggerRef, wrapperRef = _a.wrapperRef;
    useEffect(function () {
        var wrapperElement = wrapperRef.current;
        var triggerElement = triggerRef.current;
        var observer = null;
        if (callback) {
            var options = {
                root: wrapperElement,
                rootMargin: "0px",
                threshold: 1.0
            };
            observer = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            // за чем следим
            observer.observe(triggerElement);
        }
        return function () {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
