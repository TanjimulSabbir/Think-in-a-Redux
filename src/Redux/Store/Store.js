import { createStore } from "redux";
import counterReducer from "../Counter/counterReducer";
import rootReducer from "../RootReducer/RootReducer";

const store = createStore(rootReducer)


export default store;