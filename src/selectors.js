import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useCart() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useUser() {
  return useSelector(state => {
    if (state.user) {
      return Object.values(state.user);
    } else {
      return null;
    }
  }, shallowEqual);
}

export { useRestaurants, useCart, useUser };
