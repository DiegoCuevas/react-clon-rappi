import reducer from "./reducer";

test("reducer - default", () => {
  const initialState = {
    cart: [],
    restaurants: [],
    products: []
  };
  const finalState = reducer(initialState, { type: "default" });
  expect(finalState).toEqual(initialState);
});

test("reducer - ADD_PRODUCT", () => {
  const initialState = {
    cart: [],
    restaurants: [],
    products: []
  };

  const finalState = reducer(initialState, {
    type: "ADD_PRODUCT",
    payload: {
      id: 1
    }
  });

  expect(finalState).toEqual({
    ...initialState,
    cart: [...initialState.cart, 1]
  });
});

test("reducer - RESET", () => {
  const initialState = {
    cart: [0],
    restaurants: [
      {
        id: 0,
        name: "Mc Donalds",
        description: "Healthy food"
      }
    ],
    products: [
      {
        id: 0,
        name: "Hamburgesa",
        restId: 0
      }
    ]
  };

  const finalState = reducer(initialState, {
    type: "RESET"
  });

  expect(finalState).toEqual({
    ...initialState,
    cart: []
  });
});
