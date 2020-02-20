import * as types from "./types";

export const addArticles = articles => ({
  type: types.ADD_ARTICLES,
  payload: { articles }
});
 