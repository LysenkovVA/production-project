import {Button} from "@/shared/ui/Button";
import {useCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";
import {useCounterActions} from "../model/slice/counterSlice";

export const Counter = () => {

    const {t} = useTranslation();
    const counterValue = useCounterValue();
    const {decrement, increment} = useCounterActions();

    const hanldeIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={hanldeIncrement}
                data-testid="increment-btn"
            >
                {t("increment")}
            </Button>
            <Button
                onClick={handleDecrement}
                data-testid="decrement-btn"
            >
                {t("decrement")}
            </Button>
        </div>
    );
};
