export var updateProfile = function (newFirstName, newLastName) {
    // Нажали кнопку редактировать
    cy.getByTestId("EditableProfileCardHeader.EditButton").click();
    // Изменили поля
    cy.getByTestId("ProfileCard.firstname").clear().type(newFirstName);
    cy.getByTestId("ProfileCard.lastname").clear().type(newLastName);
    // Нажали Сохранить
    cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};
export var resetProfile = function (profileId) {
    return cy.request({
        method: "PUT",
        url: "http://localhost:8000/profile/".concat(profileId),
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
