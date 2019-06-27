import React from "react";
import { useDispatch } from "react-redux";

import { addProduct, listRestaurants } from "./actions";

export function useAddProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(addProduct(id)), [dispatch]);
}

export function useListRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(listRestaurants()), [dispatch]);
}
