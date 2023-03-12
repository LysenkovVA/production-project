import {ProfileSchema, ValidateProfileError} from "../types/profile";
import {profileActions, profileReducer} from "./profileSlice";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {updateProfileData} from "entities/Profile";

const data = {
    username: "admin",
    age: 30,
    country: Country.Russia,
    lastname: "Ivanov",
    first: "Ivan",
    city: "Moscow",
    currency: Currency.RUB,
};

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({readonly: true});
    });

    test("test cancelEdit", () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {username: ""}};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test("test updateProfile", () => {
        const state: DeepPartial<ProfileSchema> = {form: {username: "123"}};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: "123456"
            })
        )).toEqual({
            form: {
                username: "123456"
            }
        });
    });

    // Тестирование экстра редюсеров

    test("test updateProfile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test("test updateProfile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, "")
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
