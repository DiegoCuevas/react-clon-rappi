const initialState = {
  user: null,
  cart: [],
  restaurant: {},
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
    case "LOGIN": {
      return {
        ...state,
        user: action.payload
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: null
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: [...state.cart, action.payload.id]
      };
    }

    case "LIST_RESTAURANTS": {
      return {
        ...state,
        restaurants: action.payload
      };
    }

    case "SELECT_RESTAURANT": {
      console.log(state);
      return {
        ...state,
        restaurant: action.payload
      };
    }

    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];

      var index = updatedCart.indexOf(action.payload.id);

      if (index > -1) {
        updatedCart.splice(index, 1);
      }

      return {
        ...state,
        cart: updatedCart
      };
    }

    case "RESET": {
      return {
        ...state,
        cart: []
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
