const initialState = {
  cart: [],
  restaurants: [
    {
      id: 0,
      name: "Mc Donalds",
      description: "Healthy food"
    },
    {
      id: 1,
      name: "Venomous",
      description: "Healthy food"
    }
  ],
  products: [
    {
      id: 0,
      name: "Hamburgesa",
      restId: 0
    },
    {
      id: 1,
      name: "Hamburgesa",
      restId: 1
    },
    {
      id: 2,
      name: "Hamburgesa",
      restId: 0
    },
    {
      id: 3,
      name: "Hamburgesa",
      restId: 1
    }
  ]
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: [...state.cart, action.payload.id]
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
