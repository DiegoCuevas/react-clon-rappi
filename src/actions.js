async function listRestaurants() {
  const response = await fetch("http://localhost:4000/api/restaurants");
  const payload = await response.json();
  return { type: "LIST_RESTAURANTS", payload };
}

function addProduct(id) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: id
    }
  };
}

export { addProduct, listRestaurants };
