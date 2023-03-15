import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useCallback, useEffect} from "react";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError
} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country/model/types/country";
import {Text, TextTheme} from "shared/ui/Text/Text";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const {t} = useTranslation("profile");

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Некорректные данные пользователя"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректная страна"),
        [ValidateProfileError.NO_DATA]: t("Отсутствуют данные профиля"),
        [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
    };

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({
            first: value || ""
        }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || ""
        }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({
            city: value || ""
        }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value || 0)
        }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || ""
        }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({
            username: value || ""
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({
            currency
        }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({
            country
        }));
    }, [dispatch]);
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames("", {}, [className])}
            >
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map(err => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;