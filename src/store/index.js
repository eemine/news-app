import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import articles from "./articles/reducers";
import article from "./article/reducers";
import categories from "./categories/reducers";
import allHeadlines from "./allHeadlines/reducers";
import topNews from "./topNews/reducers";

const rootReducer = combineReducers({
  articles,
  article,
  categories,
  allHeadlines,
  topNews
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
