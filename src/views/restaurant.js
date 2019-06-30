/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect } from "@reach/router";

import ListProducts from "../components/listProducts";
import { useUser, useRestaurant, useCart } from "../selectors";

import { useSelectRestaurant, useResetCart } from "../action-hooks";

const header = {
  display: "flex",
  flexDirecction: "column",
  paddingBottom: "14px",
  borderBottom: "1px solid #ebebeb"
};

const title = {
  color: "#333",
  fontSize: "26px",
  fontWeight: "700",
  marginBottom: "5px"
};

const hours = {
  fontSize: "14px",
  display: "block",
  color: "#7d7d7d"
};

const infoDelivery = {
  display: "flex",
  fontSize: "14px",
  marginTop: "15px"
};

const info = {
  display: "flex",
  flexDirection: "column",
  marginRight: "30px",
  "&:firstChild": {
    color: "#7d7d7d",
    fontSize: "12px"
  },
  "&:lastChild": {
    fontSize: "16px",
    color: "#333"
  }
};

const data = {
  paddingLeft: "25px"
};

const restaurantImg = {
  position: "relative",
  width: "350px",
  height: "150px"
};

const img = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  borderRadius: ".5em"
};

function Restaurant({ id }) {
  const selectRestaurant = useSelectRestaurant();
  const restaurant = useRestaurant();
  const resetCart = useResetCart();
  const cart = useCart();

  React.useEffect(() => {
    selectRestaurant(id);
  }, []);

  React.useEffect(() => {
    window.onpopstate = function() {
      if (Object.keys(cart).length > 0) {
        if (window.confirm("Leaving the restaurant will reset your card")) {
          resetCart();
        } else {
          window.history.go(1);
        }
      }
    };

    return () => {
      window.onpopstate = null;
    };
  });

  const user = useUser();
  if (!user) return <Redirect to="login" noThrow />;

  return (
    <section>
      <div css={header}>
        <div css={restaurantImg}>
          <img
            css={img}
            src="https://images.rappi.pe/restaurants_background/742-1545950757.png?d=720x720&e=webp"
            alt="restaurant"
          />
        </div>
        <div css={data}>
          <h1 css={title}>{restaurant.name}</h1>
          <span css={hours}>08:30 am - 11:30 pm</span>
          <span css={hours}>
            {restaurant.address && restaurant.address.name}
          </span>
          <div css={infoDelivery}>
            <div css={info}>
              <span>Domicilio:</span>
              <strong>S/. 5.00</strong>
            </div>
            <div css={info}>
              <span>Entrega:</span>
              <strong>35 min</strong>
            </div>
          </div>
        </div>
      </div>
      <ListProducts />
    </section>
  );
}

export default Restaurant;
