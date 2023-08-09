import { combineReducers } from "redux";
import DynamicCounterReducer from '../DynamicCounter/DynamicCounterReducer';
import counterReducer from "../Counter/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    DynamicCounter: DynamicCounterReducer
})

export default rootReducer;