import { USER_LOCALSTORAGE_KEY } from "../../../src/shared/const/localstorage";
import { selectByTestId } from "../../helpers/selectByTestId";
export var login = function (username, password) {
    if (username === void 0) { username = "testuser"; }
    if (password === void 0) { password = "123"; }
    // Возвращаем тело ответа бекэнда
    return cy.request({
        method: "POST",
        url: "http://localhost:8000/login",
        body: {
            username: username,
            password: password,
        },
    }).then(function (_a) {
        var body = _a.body;
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
};
// Выполнение команды выбора по data-testid
export var getByTestId = function (testId) {
    return cy.get(selectByTestId(testId));
};
