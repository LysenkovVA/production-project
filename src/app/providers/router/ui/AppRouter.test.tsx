import AppRouter from "./AppRouter";
import {getRouteAbout, getRouteAdmin, getRouteProfile} from "@/shared/const/router";
import {screen} from "@testing-library/react";
import {componentRender} from "@/shared/lib/tests/componentRender/componentRender";
import {UserRole} from "@/entities/User";

describe("app/providers/router/ui/AppRouter", function () {
    test("Страница должна отрендериться", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout()
        });

        // Поскольку страница грузится лениво используем асинхронно
        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });

    test("Страница не найдена", async () => {
        componentRender(<AppRouter />, {
            route: "/afafadfads"
        });

        // Поскольку страница грузится лениво используем асинхронно
        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });

    test("Редирект неавторизованного пользователя на главную", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1")
        });

        // Поскольку страница грузится лениво используем асинхронно
        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ к закрытой странице для авторизованного пользователя", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        // Поскольку страница грузится лениво используем асинхронно
        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ запрещен (отсутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        // Поскольку страница грузится лениво используем асинхронно
        const page = await screen.findByTestId("ForbiddenPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ разрешен (присутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        });

        // Поскольку страница грузится лениво используем асинхронно
        const page = await screen.findByTestId("AdminPanelPage");
        expect(page).toBeInTheDocument();
    });
});
