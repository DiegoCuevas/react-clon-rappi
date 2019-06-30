const initialState = {
  user: null,
  cart: {},
  restaurant: { name: "default", menu_items: [] },
  restaurants: [],
  products: [],
  orders: [],
  order: {}
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

    case "RESET_CART": {
      state.cart = {};
      return {
        ...state,
        cart: {}
      };
    }

    case "ADD_MENU_ITEM": {
      const findMenuItem = state.cart[action.payload.item.id];
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
        ...state,
        cart: {
          ...state.cart,
          [action.payload.item.id]: {
            ...findMenuItem,
            quantity: findMenuItem.quantity + 1
          }
        }
      };
    }

    case "DECREASE_QUANTITY": {
      const findMenuItem = state.cart[action.payload.item.id];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.item.id]: {
            ...findMenuItem,
            quantity: findMenuItem.quantity - 1
          }
        }
      };
    }

    case "DELETE_FROM_CART": {
      const cartUpdated = Object.values(state.cart)
        .filter(item => item.id !== action.payload.item.id)
        .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
      return {
        ...state,
        cart: cartUpdated
      };
    }

    case "ADD_ORDER": {
      return {
        ...state,
        order: action.payload
      };
    }

    case "UPDATE_ORDER": {
      return {
        ...state,
        order: action.payload
      };
    }

    case "GET_ORDERS": {
      return {
        ...state,
        orders: action.payload.reduce((orders, order) => {
          return {
            ...orders,
            [order.id]: order
          };
        }, {})
      };
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
