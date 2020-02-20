import * as types from "./types";

export const addTopNews = topNews => ({
  type: types.ADD_TOPNEWS,
  payload: { topNews }
});
