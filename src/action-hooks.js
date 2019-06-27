import React from "react";
import { useDispatch } from "react-redux";

import {
  addProduct,
  listRestaurants,
  removeProduct,
  reset,
  login,
  logout
} from "./actions";

export function useLogin() {
  const dispatch = useDispatch();
  return React.useCallback(user => dispatch(login(user)), [dispatch]);
}

export function useLogout() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(logout()), [dispatch]);
}

export function useAddProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(addProduct(id)), [dispatch]);
}

export function useRemoveProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(removeProduct(id)), [dispatch]);
}

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useListRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(listRestaurants()), [dispatch]);
}
