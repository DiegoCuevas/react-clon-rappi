/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetOrders, listRestaurants } from "../action-hooks";
import { useGetOrder, useRestaurants, useUser, useOrders } from "../selectors";
import { Redirect } from "@reach/router";

function Orders() {
  const user = useUser();
  const restaurants = useRestaurants();
  const getOrders = useGetOrders();
  React.useEffect(() => {
    getOrders();
  }, [getOrders]);
  const orders = useOrders();
  console.log("-------------------------");
  console.log(orders);
  function getRestaurant(id) {
    return restaurants.find(rest => rest.id === id);
  }
  if (!user) return <Redirect to="/login" noThrow />;
  return (
    <>
      {Object.values(orders).length > 0 ? (
        Object.values(orders).map(order => {
          return (
            <section key={order.id}>
              <div css={{ marginLeft: "1em" }}>
                <p>Order id: {order.id}</p>
                <p>
                  Restaurant:{" "}
                  {getRestaurant(order.restaurant_id) &&
                    getRestaurant(order.restaurant_id).name}
                </p>
                <p>Complete: {order.complete.toString()}</p>
              </div>
            </section>
          );
        })
      ) : (
        <p>You don't have orders</p>
      )}
    </>
  );
}

export default Orders;
