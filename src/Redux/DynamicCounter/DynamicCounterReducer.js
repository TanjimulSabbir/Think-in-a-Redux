import { DyDECREMENT, DyINCREMENT } from "./actionTypes"

const initialState = {
    value: 0,
}

const DynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DyINCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case DyDECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
}

export default DynamicCounterReducer;