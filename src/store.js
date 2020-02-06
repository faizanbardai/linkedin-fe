import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";
// import feedReducer from "./reducers/feed";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {
    email: "faizan@bardai.com",
    profile: {
      name: null,
      surname: null,
      bio: null,
      area: null,
      title: null,
      experiences: null
    }
  }
  // feed: { allFeeds: null, selectedFeed: null }
};

const combinedReducer = combineReducers({
  user: userReducer
  // feed: feedReducer
});

export default createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
