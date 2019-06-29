/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import CardProduct from "../components/cardProduct";
import { useUser, useCart } from "../selectors";

function Cart() {
  const user = useUser();
  const cart = useCart();


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
    marginLeft: "auto"
  };

  const styleButtonPlusMinus = {
    cursor: "pointer",
    color: "#3AC69F"
  };

  // function handleIncrease(id) {
  //   increaseQuantity(id);
  // }

  // function handleDecrease(id) {
  //   decreaseQuantity(id);
  // }

  // if (!user) return <Redirect to="login" noThrow />;
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
                <span css={styleButtonPlusMinus} >
                  -
                </span>
                <span>{e.quantity}</span>
                <span css={styleButtonPlusMinus}>
                  +
                </span>
              </div>
              <span>$/. {e.price}</span>
            </article>
          );
        })}

        <article css={cssResult}>
          <span css={{ margin: "10px" }}>Total</span>{" "}
          <span css={{ margin: "10px" }}>$/. 80</span>
        </article>
        <button css={{ margin: "20px" }}>Continue</button>
      </section>
    </>
  );
}

export default Cart;
