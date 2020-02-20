import * as types from "./types";

const headline = (state = [], action) => {
  switch (action.type) {
    case types.ADD_HEADLINES: {
      const { allHeadlines } = action.payload;
      return allHeadlines;
    }
    default: {
      return state;
    }
  }
};

export default headline;
