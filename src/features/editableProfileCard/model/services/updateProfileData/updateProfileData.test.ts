import {updateProfileData} from "./updateProfileData";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {ValidateProfileError} from "../../types/editableProfileCardSchema";

const data = {
    id: "1",
    username: "admin",
    age: 30,
    country: Country.Russia,
    lastname: "Ivanov",
    first: "Ivan",
    city: "Moscow",
    currency: Currency.RUB,
};

describe("updateProfileData.test", () => {
    test("success", async () => {

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();

        // Метод вызвался
        expect(thunk.api.put).toHaveBeenCalled();
        // Async thunk отработал без ошибки
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    // Серверная ошибка
    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ]);
    });

    // Клиентская ошибка
    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: ""}
            }
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });
});
