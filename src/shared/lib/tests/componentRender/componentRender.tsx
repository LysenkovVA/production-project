// Обертка для тестируемых компонентов с переводами
import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import {StateSchema, StoreProvider} from "@/app/providers/StoreProvider";
import {ReducersMapObject} from "@reduxjs/toolkit";
// eslint-disable-next-line raudbrand-plugin/layer-imports
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import {Theme} from "@/shared/const/theme";
// eslint-disable-next-line raudbrand-plugin/layer-imports
import "@/app/styles/index.scss";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    // Для тестирования компонентов
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const {
        children,
        options = {}
    } = props;

    const {
        route = "/",
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = "/",
        initialState,
        asyncReducers,
    } = options;

    return render(<TestProvider options={options}>{component}</TestProvider>);
}
