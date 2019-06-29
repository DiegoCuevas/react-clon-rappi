const initialState = {
  user: null,
  cart: {},
  restaurant: { name: "default", menu_items: [] },
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

    case "LIST_RESTAURANTS": {
      return {
        ...state,
        restaurants: action.payload
      };
    }

    case "SELECT_RESTAURANT": {
      return {
        ...state,
        restaurant: action.payload
      };
    }


    case "ADD_MENU_ITEM": {
      if (!state.cart.hasOwnProperty(action.payload.item.id)) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.item.id]: {
              ...action.payload.item,
              quantity: 1
            }
          }
        };
      }
      return {
        ...state
      }
    }
    
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
