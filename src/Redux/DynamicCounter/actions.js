import { DyDECREMENT, DyINCREMENT } from "./actionTypes"


export const Dyincrement = (value) => {
    return {
        type: DyINCREMENT,
        payload: value,
    }
}

export const Dydecrement = (value) => {
    return {
        type: DyDECREMENT,
        payload: value,
    }
}