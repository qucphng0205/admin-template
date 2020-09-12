import { createStore, applyMiddleware } from "redux";
import logger from "";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.sagas";
import rootReducer from "./root.reducer";

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
const middlewares = [];

if (process.env.NODE_ENV == "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, ...middlewares);

// sagaMiddleware.run(rootSaga);

export default store;
