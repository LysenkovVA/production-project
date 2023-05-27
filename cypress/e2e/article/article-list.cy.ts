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

    // TODO Поиск и сортировка
});
