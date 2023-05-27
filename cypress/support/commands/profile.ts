export const updateProfile = (newFirstName: string, newLastName: string) => {
    // Нажали кнопку редактировать
    cy.getByTestId("EditableProfileCardHeader.EditButton").click();
    // Изменили поля
    cy.getByTestId("ProfileCard.firstname").clear().type(newFirstName);
    cy.getByTestId("ProfileCard.lastname").clear().type(newLastName);
    // Нажали Сохранить
    cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: "PUT",
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: "authHeader"
        },
        body: {
            "id": "4",
            "first": "TestFirstName",
            "lastname": "TestLastName",
            "age": 44,
            "currency": "RUB",
            "country": "Russia",
            "city": "Moscow",
            "username": "testuser",
            "avatar": "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg"
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(newFirstName: string, newLastName: string): Chainable<void>,
            resetProfile(profileId: string): Chainable<void>,
        }
    }
}
