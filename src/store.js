import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: null
};

const combinedReducer = combineReducers({
  user: userReducer
});

export default createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
