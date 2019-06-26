import React from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "./actions";

export function useAddProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(addProduct(id)), [dispatch]);
}
