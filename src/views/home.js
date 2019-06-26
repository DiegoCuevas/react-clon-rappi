/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect, navigate } from "@reach/router";

import { useUser, useUserUpdater } from "../contexts/user";
import { logout } from "../services/user";
import { Link } from "@reach/router";
import ListRestaurant from "../components/listRestaurant";

const API_RESTAURANT_URL = "http://localhost:4000/api/restaurants";

const container = {
  "&:h1": {
    fontSize: "21px",
    margin: "0 5px",
    color: "#333"
  }
};

function Home() {
  const user = useUser();
  const updateUser = useUserUpdater();

  React.useEffect(() => {
    if (!user) return;
    fetch(API_RESTAURANT_URL, {
      credentials: "include",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.status = response.status;
          throw error;
        }
        return response;
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        if (error.status === 401) navigate("/login");
      });
  }, [user]);

  async function handleLogoutClick() {
    await logout();
    updateUser({ type: "LOGOUT" });
  }

  if (!user) return <Redirect to="login" noThrow />;

  return (
    <section css={container}>
      <h1>Restaurantes en tu zona</h1>
      <ListRestaurant />
    </section>
  );
}

export default Home;
