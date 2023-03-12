import {loginByUsername} from "./loginByUsername";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("loginByUsername.test", () => {
    // // Мокаем
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // // Перед каждым тестом
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test("success login", async () => {
    //     const userValue = {username: "123", id: "1"};
    //     mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));
    //     const action = loginByUsername({username: "123", password: "123"});
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     // Метод вызвался
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // Async thunk отработал без ошибки
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    //
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test("error login", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
    //     const action = loginByUsername({username: "123", password: "123"});
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     // Метод вызвался
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // Async thunk отработал без ошибки
    //     expect(result.meta.requestStatus).toBe("rejected");
    //
    //     expect(result.payload).toBe("error");
    // });

    test("success login", async () => {
        const userValue = {username: "123", id: "1"};

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({data: userValue}));
        const result = await thunk.callThunk({username: "123", password: "123"});

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // Метод вызвался
        expect(thunk.api.post).toHaveBeenCalled();
        // Async thunk отработал без ошибки
        expect(result.meta.requestStatus).toBe("fulfilled");

        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk({username: "123", password: "123"});

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // Метод вызвался
        expect(thunk.api.post).toHaveBeenCalled();
        // Async thunk отработал без ошибки
        expect(result.meta.requestStatus).toBe("rejected");

        expect(result.payload).toBe("error");
    });
});
