import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useCart() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function usePosition() {
  return useSelector(state => {
    if (state.restaurant.address) {
      return state.restaurant.address;
    } else {
      return { name: "examplo", latitud: "0", longitud: "0" };
    }
  }, shallowEqual);
}

function useRestaurant() {
  return useSelector(state => {
    if (state.restaurant) {
      return state.restaurant;
    } else {
      return { restaurant: { name: "default" } };
    }
  }, shallowEqual);
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

export { useRestaurants, usePosition, useCart, useUser, useRestaurant };
