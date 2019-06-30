const API_LOGIN_URL = "http://localhost:4000/api/login";
const API_LOGOUT_URL = "http://localhost:4000/api/logout";
const API_RESTAURANT_URL = "http://localhost:4000/api/restaurants";
const API_ORDERS_URL = "http://localhost:4000/api/orders";

function selectRestaurant(id) {
  return async dispatch => {
    const response = await fetch(`${API_RESTAURANT_URL}/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) return { type: "DEFAULT" };
    const payload = await response.json();
    dispatch({ type: "SELECT_RESTAURANT", payload });
  };
}

function resetCart() {
  return { type: "RESET_CART" };
}

function login(user) {
  return async dispatch => {
    const response = await fetch(API_LOGIN_URL, {
      method: "POST",
      credentials: "include",
      body: user ? JSON.stringify(user) : "{}",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) return { type: "DEFAULT" };
    const payload = await response.json(); //{ name, id, email }
    dispatch({ type: "LOGIN", payload });
  };
}

function logout() {
  return async dispatch => {
    const response = await fetch(API_LOGOUT_URL, {
      method: "DELETE",
      credentials: "include"
    });
    if (!response.ok) {
      dispatch({ type: "DEFAULT" });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  };
}

function listRestaurants() {
  return async dispatch => {
    const response = await fetch(API_RESTAURANT_URL, {
      credentials: "include",
      headers: {
        "Content-Type": "aplication/json"
      }
    });
    const payload = await response.json();
    if (!response.ok) dispatch({ type: "DEFAULT" });
    dispatch({ type: "LIST_RESTAURANTS", payload });
  };
}

function addMenuItem(item) {
  return {
    type: "ADD_MENU_ITEM",
    payload: {
      item
    }
  };
}

function decreaseQuantity(item) {
  return {
    type: "DECREASE_QUANTITY",
    payload: {
      item
    }
  };
}

function deleteFromCart(item) {
  return {
    type: "DELETE_FROM_CART",
    payload: {
      item
    }
  };
}

function reset() {
  return {
    type: "RESET"
  };
}

function addOrder(order) {
  return async dispatch => {
    const response = await fetch("http://localhost:4000/api/orders", {
      method: "POST",
      credentials: "include",
      body: order ? JSON.stringify(order) : "{}",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) return { type: "DEFAULT" };
    const payload = await response.json();
    dispatch({ type: "ADD_ORDER", payload });
  };
}

function updateOrder(id) {
  return async dispatch => {
    const response = await fetch(`http://localhost:4000/api/orders/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) return { type: "DEFAULT" };
    const payload = await response.json();
    dispatch({ type: "UPDATE_ORDER", payload });
  };
}

function getOrders() {
  return async dispatch => {
    const response = await fetch("http://localhost:4000/api/orders", {
      credentials: "include"
    });
    const payload = await response.json();
    return dispatch({ type: "GET_ORDERS", payload });
  };
}

export {
  addMenuItem,
  listRestaurants,
  selectRestaurant,
  decreaseQuantity,
  deleteFromCart,
  reset,
  login,
  logout,
  resetCart,
  addOrder,
  updateOrder,
  getOrders
};
