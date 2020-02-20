import * as types from "./types";

export const addHeadlines = allHeadlines => ({
  type: types.ADD_HEADLINES,
  payload: { allHeadlines }
});
