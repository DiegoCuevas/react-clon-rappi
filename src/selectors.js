import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useCart() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

export { useRestaurants, useCart };
