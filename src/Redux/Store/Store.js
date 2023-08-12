import { applyMiddleware, createStore } from "redux";
import rootReducer from "../RootReducer/RootReducer";
import myLogger from "../Middleware/Mylogger";

const store = createStore(rootReducer,applyMiddleware(myLogger))


export default store;