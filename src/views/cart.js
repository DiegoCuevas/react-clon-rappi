/** @jsx jsx */
import React from "react";
import CardProduct from "../components/cardProduct";

import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useUser, useCart, useRestaurant } from "../selectors";
import {
  useAddMenuItem,
  useDecreaseQuantity,
  useDeleteFromCart
} from "../action-hooks";
import { Redirect } from "@reach/router";

function Cart() {
  const user = useUser();
  const cart = useCart();
  const addMenuItem = useAddMenuItem();
  const decreaseQuantity = useDecreaseQuantity();
  const deleteFromCart = useDeleteFromCart();
  const restaurant = useRestaurant();

  const cssOrden = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "30px"
  };
  const cssResult = {
    borderStyle: "groove",
    display: "flex",
    justifyContent: "space-between",
    margin: "23px"
  };
  const styleButtonQuantity = {
    width: "70px",
    height: "20px",
    border: "solid 1px #efefef",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 5px",
    marginLeft: "auto"
  };

  const styleButtonPlusMinus = {
    cursor: "pointer",
    color: "#3AC69F"
  };

  function handleClick(item) {
    addMenuItem(item);
  }
  function handleDecrease(item) {
    if (item.quantity > 1) {
      decreaseQuantity(item);
    } else deleteFromCart(item);
  }

  if (!user) return <Redirect to="login" noThrow />;
  return (
    <>
      <section
        css={{
          margin: "0 1em",
          flexFlow: "column"
        }}
      >
        {Object.values(cart).map(element => {
          return (
            <article css={cssOrden} key={element.id}>
              <span>{element.name}</span>
              <div css={styleButtonQuantity}>
                <span
                  css={styleButtonPlusMinus}
                  onClick={() => handleDecrease(element)}
                >
                  -
                </span>
                <span>{element.quantity}</span>
                <span
                  css={styleButtonPlusMinus}
                  onClick={() => handleClick(element)}
                >
                  +
                </span>
              </div>
              <div css={{ width: "80px", marginLeft: "20px" }}>
                <span>$/. {element.price * element.quantity}</span>
              </div>
            </article>
          );
        })}

        <article css={cssResult}>
          <span css={{ margin: "10px" }}>Total</span>{" "}
          <span css={{ margin: "10px" }}>
            $/.{" "}
            {Object.values(cart).reduce((acc, item) => {
              return acc + item.quantity * item.price;
            }, 0)}
          </span>
        </article>

        <Link
          css={{
            margin: "20px",
            padding: "10px",
            backgroundColor: "tomato",
            textDecoration: "none",
            fontSize: "15px",
            border: "none",
            color: "white"
          }}
          to={"/ubication/" + restaurant.id}
        >
          Confirm{" "}
        </Link>
      </section>
    </>
  );
}

export default Cart;
