import { CounterSchema } from "entities/Counter";
import {UserSchema} from "entities/User";

// Наша схема
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema
}
