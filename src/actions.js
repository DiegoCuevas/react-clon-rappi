const API_LOGIN_URL = "http://localhost:4000/api/login";
const API_LOGOUT_URL = "http://localhost:4000/api/logout";
const API_RESTAURANT_URL = "http://localhost:4000/api/restaurants";

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

function addProduct(id) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: id
    }
  };
}

function removeProduct(id) {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      id: id
    }
  };
}

function reset() {
  return {
    type: "RESET"
  };
}

export {
  addProduct,
  listRestaurants,
  selectRestaurant,
  removeProduct,
  reset,
  login,
  logout
};
