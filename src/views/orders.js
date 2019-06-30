/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGetOrders, listRestaurants } from "../action-hooks";
import { useGetOrder, useRestaurants, useUser, useOrders } from "../selectors";
import { Redirect } from "@reach/router";

const linkStyle = {
  textDecoration: "none",
  border: "1px solid",

  color: "#000",
  margin: "10px 5px",
  minWidth: "30%",
  "@media (max-width: 768px)": {
    minWidth: "100%"
  }
};

function Orders() {
  const user = useUser();
  const restaurants = useRestaurants();
  const getOrders = useGetOrders();
  React.useEffect(() => {
    getOrders();
  }, [getOrders]);
  const orders = useOrders();
  function getRestaurant(id) {
    return restaurants.find(rest => rest.id === id);
  }
  if (!user) return <Redirect to="/login" noThrow />;
  return (
    <>
      {Object.values(orders).length > 0 ? (
        Object.values(orders).map(order => {
          return (
            <section css={linkStyle} key={order.id}>
              <div css={{ marginLeft: "1em" }}>
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
