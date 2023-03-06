import {FC, lazy} from "react";
import {LoginFormProps} from "./LoginForm";

// Чтобы не терялись типы в lazy добавляем дженерик
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import("./LoginForm"));

