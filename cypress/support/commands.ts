import * as commonCommands from "./commands/common";
import * as profileCommands from "./commands/profile";
import * as articleCommands from "./commands/article";
import * as commentsCommands from "./commands/comments";
import * as ratingCommands from "./commands/rating";

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

// Команды можно перезаписывать (overwrite) и передавать какой-то флажок когда
// мы автоматически записываем фикстуры или только читаем их или вообще работаем
// с реальным бэкэндом.
// Т.е. в CI можем использовать фикстуры чтобы не перегружать сервак, а в
// релизе использовать реальные данные
