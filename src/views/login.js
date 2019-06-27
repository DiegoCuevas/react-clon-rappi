/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Redirect } from "@reach/router";
import { Card, Button, Input } from "../components/ui";
import { useUser, useUserUpdater } from "../contexts/user";

import { login } from "../services/user";

function Login() {
  const user = useUser();
  const userUpdater = useUserUpdater();
  const [email, setEmail] = React.useState("josh@delivery.pe");
  const [password, setPassword] = React.useState("123456");
  const [error, setError] = React.useState(null);

  if (user) return <Redirect to="/" noThrow />;

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { name, id } = await login({ email, password });
      userUpdater({ type: "LOGIN", payload: { name, email, id } });
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section css={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1 css={{ margin: "3rem 0", fontSize: "2rem", textAlign: "center" }}>
        Login to the Application
      </h1>
      <Card styles={{ marginTop: "3rem" }}>
        <form onSubmit={handleSubmit}>
          <label css={{ display: "block", margin: ".5rem 0" }} htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label
            css={{ display: "block", margin: ".5rem 0" }}
            htmlFor="password"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <Button>Log In</Button>
          {error && (
            <div css={{ color: "red", marginTop: "1rem" }}>Error: {error}</div>
          )}
        </form>
      </Card>
    </section>
  );
}

export default Login;