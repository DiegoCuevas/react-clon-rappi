/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import ListProducts from "../components/listProducts";

const header = {
  display: "flex",
  flexDirecction: "column"
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
  flexDirecction: "columnn",
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

function Restaurant() {
  return (
    <section>
      <div css={header}>
        <div>image</div>
        <div>
          <h1 css={title}>Tanta</h1>
          <span css={hours}>08:30 am - 11:30 pm</span>
          <div css={infoDelivery}>
            <div css={info}>
              <span>Domicilio:</span>
              <strong>S/. 5.00</strong>
            </div>
            <div css={info}>
              <span>Entrega</span>
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
