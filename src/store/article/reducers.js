import * as types from "./types";

const article = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE: {
      const { article } = action.payload;
      return article;
    }
    default: {
      return state;
    }
  }
};

export default article;
