"use strict";
describe("Роутинг", function () {
    describe("Пользователь не авторизован", function () {
        it("Переход на главную страницу", function () {
            cy.visit("/");
            //cy.get(selectByTestId("MainPage")).should("exist");
            cy.getByTestId("MainPage").should("exist");
        });
        it("Не смогли открыть страницу профиля, редирект на главную страницу", function () {
            cy.visit("/profile/1");
            //cy.get(selectByTestId("MainPage")).should("exist");
            cy.getByTestId("MainPage").should("exist");
        });
        it("Попытка открыть несуществующий маршрут", function () {
            cy.visit("/adasdfasdfadsf");
            //cy.get(selectByTestId("NotFoundPage")).should("exist");
            cy.getByTestId("NotFoundPage").should("exist");
        });
    });
    describe("Пользователь авторизован", function () {
        beforeEach(function () {
            cy.login();
        });
        it("Переход на страницу профиля", function () {
            cy.visit("/profile/4");
            cy.getByTestId("ProfilePage").should("exist");
        });
        it("Переход на страницу со списком статей", function () {
            cy.visit("/articles");
            cy.getByTestId("ArticlesPage").should("exist");
        });
    });
});
