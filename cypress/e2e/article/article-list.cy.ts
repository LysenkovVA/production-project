describe("Пользователь заходит на страницу со списком статей", () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit("/articles");
        });
    });
  
    afterEach(() => {
    
    });
  
    it("Статьи успешно загружаются", () => {
        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);

    });

    it("Статьи успешно загружаются (пример с фикстурами)", () => {
        cy.intercept("GET", "**/articles?*", {fixture: "articles.json"});
        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);

    });

    it.skip("Пример пропуска теста", () => {
        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    });

    // TODO Поиск и сортировка
});
