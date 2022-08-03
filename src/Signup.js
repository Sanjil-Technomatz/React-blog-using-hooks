import React from "react";
import { withRouter } from "react-router";
import background from "./images/1.jpg";
import { useState } from "react";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    if (name !== "" && email !== "" && password !== "") {
      props.history.push("/login");
    }
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "100vh",
          width: "100%",
        }}
      >
        <form style={{ width: "100%", textAlign: "center" }}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className="form-group">
            <label className="fs-3">
              Name:
              <input
                type="text"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="fs-3">
              Email:
              <input
                type="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label className="fs-3 ">
              Password:
              <input
                type="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
          </div>

          <br />
          <button className="btn btn-dark btn-lg " onClick={handleClick}>
            {" "}
            Sign Up{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default withRouter(Signup);
