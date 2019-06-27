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

export { addProduct, listRestaurants, listProducts, removeProduct, reset };
