/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import { useRestaurants, useCart, useUser } from "../selectors";
import { useLogout, useListRestaurants } from "../action-hooks";

import { Redirect, navigate } from "@reach/router";

const API_RESTAURANT_URL = "http://localhost:4000/api/restaurants";

function Home() {
  const user = useUser();
  const listRestaurants = useListRestaurants();
  const logout = useLogout();
  const restaurants = useRestaurants();

  React.useEffect(() => {
    // if (!user) return;
    listRestaurants();
  }, []);

  async function handleLogoutClick() {
    logout();
  }

  // if (!user) return <Redirect to="login" noThrow />;

  return (
    <div>
      Home
      <button onClick={handleLogoutClick}>Log out</button>
      <div> {JSON.stringify(restaurants)}</div>
    </div>
  );
}

export default Home;
