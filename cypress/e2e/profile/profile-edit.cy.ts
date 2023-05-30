let profileId = "";

describe("Пользователь заходит на страницу профиля", () => {
    beforeEach(() => {
        cy.visit("");
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it("И профиль успешно загружается", () => {
        cy.getByTestId("ProfileCard.firstname").should(
            "have.value",
            "TestFirstName",
        );
    });

    it("И редактирует его", () => {
        const newFirstName = "new";
        const newLastName = "lastname";
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId("ProfileCard.firstname").should(
            "have.value",
            newFirstName,
        );
        cy.getByTestId("ProfileCard.lastname").should(
            "have.value",
            newLastName,
        );
    });
});
