import {fetchProfileData} from "./fetchProfileData";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

const data = {
    username: "admin",
    age: 30,
    country: Country.Russia,
    lastname: "Ivanov",
    first: "Ivan",
    city: "Moscow",
    currency: Currency.RUB,
};

describe("fetchProfileData.test", () => {
    test("success", async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk();

        // Метод вызвался
        expect(thunk.api.get).toHaveBeenCalled();
        // Async thunk отработал без ошибки
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();
        
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
