import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import firstReducer from "./first/firstReducer";

const reducers = combineReducers({
  first: firstReducer
});

const middleware = applyMiddleware(promise, thunk);
const store = createStore(reducers, middleware);

export default store;
