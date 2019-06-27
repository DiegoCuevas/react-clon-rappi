const API_LOGIN_URL = "http://localhost:4000/api/login";
const API_LOGOUT_URL = "http://localhost:4000/api/logout";

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

async function listRestaurants() {
  const response = await fetch("http://localhost:4000/api/restaurants");
  const payload = await response.json();
  return { type: "LIST_RESTAURANTS", payload };
}

async function listProducts() {
  const response = await fetch("http://localhost:4000/api/orders");
  const payload = await response.json();
  return { type: "LIST_PRODUCTS", payload };
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
  listProducts,
  removeProduct,
  reset,
  login,
  logout
};
