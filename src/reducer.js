const initialState = {
  transaction: {},
  categories: {}
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        state
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
