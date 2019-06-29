import React from "react";
import { useDispatch } from "react-redux";

import {
  addMenuItem,
  listRestaurants,
  selectRestaurant,
  decreaseQuantity,
  deleteFromCart,
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

export function useAddMenuItem() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(addMenuItem(item)), [dispatch]);
}

export function useDecreaseQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(decreaseQuantity(item)), [dispatch]);
}

export function useDeleteFromCart() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(deleteFromCart(item)), [dispatch]);
}

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useListRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(listRestaurants()), [dispatch]);
}

export function useSelectRestaurant() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(selectRestaurant(id)), [dispatch]);
}
