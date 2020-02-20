import * as types from "./types";

const category = (state = [], action) => {
  switch (action.type) {
    case types.GET_CATEGORIES: {
      const { categories } = action.payload;
      return categories;
    }
    default: {
      return state;
    }
  }
};

export default category;
