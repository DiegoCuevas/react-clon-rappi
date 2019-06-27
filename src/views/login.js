/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Redirect } from "@reach/router";
import { Card, Button, Input } from "../components/ui";

import { useLogin } from "../action-hooks";
import { useUser } from "../selectors";

function Login() {
  const user = useUser();
  const login = useLogin();
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

  function handleSubmit(event) {
    event.preventDefault();
    login({ email, password });
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
