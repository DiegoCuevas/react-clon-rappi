/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Card } from "./ui";

const container = {
  display: "flex",
  flexWrap: "wrap"
};

const name = {
  fontSize: "16px",
  color: "#333",
  fontWeight: "400",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  display: "block"
};

const description = {
  fontSize: "12px",
  color: "#9faab7",
  margin: "0",
  minHeight: "12px",
  textOverflow: "ellipsis",
  display: "block",
  whiteSpace: "nowrap",
  overflow: "hidden"
};

const separetor = {
  color: "#9faab7",
  display: "inline-block",
  verticalAlign: "top",
  fontSize: "5px",
  padding: "0 5px"
};

const data = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#333",
  textAlign: "right"
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  minWidth: "33%",
  "@media (max-width: 768px)": {
    minWidth: "100%"
  }
};

const card = {
  "@media (max-width: 768px)": {
    borderRadius: "0px",
    borderTop: "1px solid #e5edef",
    borderButtom: "1px solid #e5edef"
  }
};

function ListProducts() {
  return (
    <section css={container}>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
      <Link css={linkStyle} to="/restaurant">
        <Card css={card}>
          <span css={name}>Tanta</span>
          <span css={description}>Desayuno - Internacional</span>
          <span css={data}>
            Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
          </span>
        </Card>
      </Link>
    </section>
  );
}

export default ListProducts;
