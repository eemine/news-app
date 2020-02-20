import * as types from "./types";

const articles = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ARTICLES: {
      const { articles } = action.payload;
      return articles;
    }
    default: {
      return state;
    }
  }
};

export default articles;
