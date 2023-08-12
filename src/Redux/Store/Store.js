import { applyMiddleware, createStore } from "redux";
import rootReducer from "../RootReducer/RootReducer";
import myLogger from "../Middleware/Mylogger";
import logger from "redux-logger"

const store = createStore(rootReducer,applyMiddleware(logger,myLogger))


export default store;