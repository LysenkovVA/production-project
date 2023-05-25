import {login} from "./commands/login";

Cypress.Commands.add("login", login);

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(login?: string, password?: string): Chainable<void>
    }
  }
}
