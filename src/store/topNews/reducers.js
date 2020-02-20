import * as types from "./types";

const topNews = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TOPNEWS: {
      const { topNews } = action.payload;
      return topNews;
    }
    default: {
      return state;
    }
  }
};

export default topNews;
