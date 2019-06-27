/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect, navigate } from "@reach/router";
import { useUser, useUserUpdater } from "../contexts/user";
import { logout } from "../services/user";

const API_RESTAURANT_URL = "http://localhost:4000/api/restaurants";

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
    <div>
      Home
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  );
}

export default Home;
