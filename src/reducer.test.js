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

test("reducer - LIST_RESTAURANTS", () => {
  const initialState = {
    cart: [],
    restaurants: [],
    products: []
  };

  const finalState = reducer(initialState, {
    type: "LIST_RESTAURANTS",
    payload: [
      {
        id: 3,
        name: "restaurant example",
        price_type: "low",
        address: {
          name: "Av. sSS 123",
          latitud: "0.12",
          longitud: "1.233"
        }
      },
      {
        id: 4,
        name: "restaurant example",
        price_type: "low",
        address: {
          name: "Av. sSS 123",
          latitud: "0.12",
          longitud: "1.233"
        }
      }
    ]
  });

  expect(finalState).toEqual({
    cart: [],
    restaurants: [
      {
        id: 3,
        name: "restaurant example",
        price_type: "low",
        address: {
          name: "Av. sSS 123",
          latitud: "0.12",
          longitud: "1.233"
        }
      },
      {
        id: 4,
        name: "restaurant example",
        price_type: "low",
        address: {
          name: "Av. sSS 123",
          latitud: "0.12",
          longitud: "1.233"
        }
      }
    ],
    products: []
  });
});

test("reducer - REMOVE_PRODUCT", () => {
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
    type: "REMOVE_PRODUCT",
    payload: { id: 0 }
  });

  const expectedState = {
    cart: [],
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
  expect(finalState).toEqual(expectedState);
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
