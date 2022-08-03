import React from "react";
import { withRouter } from "react-router";
import background from "./images/1.jpg";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (
      email === JSON.parse(localStorage.getItem("email")) &&
      password === JSON.parse(localStorage.getItem("password"))
    ) {
      props.history.push("/dashboard");
    } else {
      alert("Wrong email or password");
    }
  };

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
          <h1>Sign In</h1>
          <p>Please fill this form to Login account.</p>
          <hr />
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

          <button onClick={handleClick} className="btn btn-dark btn-lg ">
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </>
  );
}
export default withRouter(Login);
