import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import {Page} from "widgets/Page/Page";
import {HStack} from "shared/ui/Stack";
import {ListBox} from "shared/ui/ListBox/ListBox";

const MainPage = memo(() => {
    const {t} = useTranslation("main");

    return (
        <Page>
            {t("Главная страница")}
            <HStack>
                <ListBox
                    defaultValue={"Выберите значение"}
                    onChange={(value:string) => {}}
                    value={undefined}
                    items={[
                        {value: "1", content: "1"},
                        {value: "2", content: "2", disabled: true},
                        {value: "3", content: "3"},
                    ]}
                />
            </HStack>
        </Page>
    );
});

export default MainPage;
