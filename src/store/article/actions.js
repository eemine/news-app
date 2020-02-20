import * as types from "./types";

export const addArticle = article => ({
  type: types.ADD_ARTICLE,
  payload: { article }
});
