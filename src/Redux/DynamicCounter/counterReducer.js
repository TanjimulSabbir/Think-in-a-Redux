import { DyDECREMENT, DyINCREMENT } from "./actionTypes"

const initialState = {
    value: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DyDECREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case DyINCREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
          return state;
    }
}

export default counterReducer;