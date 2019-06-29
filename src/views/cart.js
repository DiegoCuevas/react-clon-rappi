/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import CardProduct from "../components/cardProduct";
import { useUser, useCart } from "../selectors";
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

  const cssOrden = {
    display: "flex",
    justifyContent: "space-between",
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
    marginLeft: "auto",
  };

  const styleButtonPlusMinus = {
    cursor: "pointer",
    color: "#3AC69F",
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
        {Object.values(cart).map(e => {
          return (
            <article css={cssOrden} key={e.menu_item_id}>
              <span>{e.name}</span>
              <div css={styleButtonQuantity}>
                <span
                  css={styleButtonPlusMinus}
                  onClick={() => handleDecrease(e)}
                >
                  -
                </span>
                <span>{e.quantity}</span>
                <span css={styleButtonPlusMinus} onClick={() => handleClick(e)}>
                  +
                </span>
              </div>
              <span>$/. {e.price * e.quantity}</span>
            </article>
          );
        })}

        <article css={cssResult}>
          <span css={{ margin: "10px" }}>Total</span>{" "}
          <span css={{ margin: "10px" }}>
            $/. {Object.values(cart).reduce((acc, item) => {
              return acc + item.quantity * item.price;
            }, 0)}
          </span>
        </article>
        <button css={{ margin: "20px" }}>Continue</button>
      </section>
    </>
  );
}

export default Cart;
