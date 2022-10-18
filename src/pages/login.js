import { Outlet, Link } from "react-router-dom";
import "./CSS/login.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [loginid, setLoginid] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(
    "Please Fill required Information"
  );
  const [showBtns, setShowBtns] = useState(true);
  useEffect(() => {
    if (loginid == "" || password == "") {
      setShowError("Please Fill required Information");
    } else {
      setShowError("Looks Good!");
    }
  }, [loginid, password]);
  useEffect(() => {
    if (showError == "Looks Good!") {
      setShowBtns(false);
    } else {
      setShowBtns(true);
    }
  }, [showError]);
  const onSubmit = (evt) => {
    evt.preventDefault();
    fetch("http://localhost:3001/api/authentication", {
      method: "POST",
      body: JSON.stringify({ loginid, password }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("logged in");
          window.location.href = `/`;
        } else {
          const error = new Error(res.user);
          setShowError("Loginid or Password wrong");
          throw error;
        }
      })
      .catch((err) => {
        setShowError("Something went wrong, Try again.");
        console.error(err);
      });
  };
  if (props.isLoggedIn) {
    return (
      <div className="row">
        <h1> Logged In </h1>{" "}
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row">
            <h1> Adminstrative Login </h1> <p> {showError} </p>{" "}
          </div>{" "}
          <form
            onSubmit={onSubmit}
            onReset={() => {
              setShowError("Please Fill required Information");
              setShowBtns(true);
            }}
          >
            <div className="row input-container">
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <input
                    type="text"
                    onChange={(evt) => {
                      setLoginid(evt.target.value);
                      if (evt.target.value == "") {
                        setShowError("Please Fill required Information");
                      } else {
                        setShowError("Looks Good!");
                      }
                    }}
                  />{" "}
                  <label> Username </label>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <input
                    type="password"
                    onChange={(evt) => {
                      setPassword(evt.target.value);
                      if (evt.target.value == "") {
                        setShowError("Please Fill required Information");
                      } else {
                        setShowError("Looks Good!");
                      }
                    }}
                  />{" "}
                  <label> Password </label>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xs-12">
                {" "}
                {(() => {
                  if (!showBtns) {
                    return (
                      <>
                        <button className="btn-lrg submit-btn" type="submit">
                          Proceed {"  "}{" "}
                        </button>{" "}
                        <button
                          className="btn-lrg submit-btn"
                          type="reset"
                          style={{
                            backgroundColor: "var(--text-primary)",
                            color: "var(--shade-red-primary)",
                          }}
                        >
                          Cancel{" "}
                        </button>{" "}
                      </>
                    );
                  }
                })()}{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </>
    );
  }
};

export default Login;
