import {getCounter} from "./getCounter";
import {StateSchema} from "@/app/providers/StoreProvider";

describe("getCounter", () => {
    test("should return counter value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        // Ожидаем что селектор вернет нужный участок стейта
        expect(getCounter(state as StateSchema)).toEqual({value: 10});
    });
});
