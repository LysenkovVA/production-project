"use strict";
var profileId = "";
describe("Пользователь заходит на страницу профиля", function () {
    beforeEach(function () {
        cy.visit("");
        cy.login().then(function (data) {
            profileId = data.id;
            cy.visit("profile/".concat(data.id));
        });
    });
    afterEach(function () {
        cy.resetProfile(profileId);
    });
    it("И профиль успешно загружается", function () {
        cy
            .getByTestId("ProfileCard.firstname")
            .should("have.value", "TestFirstName");
    });
    it("И редактирует его", function () {
        var newFirstName = "new";
        var newLastName = "lastname";
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId("ProfileCard.firstname").should("have.value", newFirstName);
        cy.getByTestId("ProfileCard.lastname").should("have.value", newLastName);
    });
});
