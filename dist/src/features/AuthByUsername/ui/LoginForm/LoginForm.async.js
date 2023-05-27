import { lazy } from "react";
// Чтобы не терялись типы в lazy добавляем дженерик
export var LoginFormAsync = lazy(function () { return import("./LoginForm"); });
