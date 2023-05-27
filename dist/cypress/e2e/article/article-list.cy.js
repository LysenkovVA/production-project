"use strict";
describe("Пользователь заходит на страницу со списком статей", function () {
    beforeEach(function () {
        cy.login().then(function (data) {
            cy.visit("/articles");
        });
    });
    afterEach(function () {
    });
    it("Статьи успешно загружаются", function () {
        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    });
    // TODO Поиск и сортировка
});
