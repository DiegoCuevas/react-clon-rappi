const API_RESTAURANT_URL = "http://localhost:4000/api/restaurants";
const API_RESTAURANT_ID_URL = "http://localhost:4000/api/restaurants/:id";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function restaurant() {
  const response = await fetch(API_RESTAURANT_URL, {
    credentials: "include",
    headers: {
      "Content-Type": "aplication/json"
    }
  });
  if (!response.ok) throw createError(response);
  return await response.json();
}
async function restaurantId(id) {
  const response = await fetch(API_RESTAURANT_ID_URL, {
    credentials: "include"
  })
}
