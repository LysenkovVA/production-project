describe("Роутинг", () => {
    describe("Пользователь не авторизован", () => {
        it("Переход на главную страницу", () => {
            cy.visit("/");
            //cy.get(selectByTestId("MainPage")).should("exist");
            cy.getByTestId("MainPage").should("exist");
        });

        it("Не смогли открыть страницу профиля, редирект на главную страницу", () => {
            cy.visit("/profile/1");
            //cy.get(selectByTestId("MainPage")).should("exist");
            cy.getByTestId("MainPage").should("exist");
        });

        it("Попытка открыть несуществующий маршрут", () => {
            cy.visit("/adasdfasdfadsf");
            //cy.get(selectByTestId("NotFoundPage")).should("exist");
            cy.getByTestId("NotFoundPage").should("exist");
        });
    });
    describe("Пользователь авторизован", () => {
        beforeEach(() => {
            cy.login();
        });

        it("Переход на страницу профиля", () => {
            cy.visit("/profile/4");
            cy.getByTestId("ProfilePage").should("exist");
        });

        it("Переход на страницу со списком статей", () => {
            cy.visit("/articles");
            cy.getByTestId("ArticlesPage").should("exist");
        });
    });
});
