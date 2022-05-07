import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");

  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  if (user) {
    navigate("/");
  }
  let message;
  if (error) {
    message = error.message;
  }
  return (
    <div className="container d-flex align-items-center justify-content-center ">
      <Form className="w-50 m-auto form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        {message}
        <button type="submit" className="btn bg-black  d-block mx-auto golden">
          Log-In
        </button>

        <p className="mt-3 text-center">
          Don't Have an Account?
          <span
            onClick={handleRegister}
            className="btn btn-link text-decoration-none "
          >
            Register
          </span>
        </p>
        <p className="mt-3 text-center">
          Forget Password?
          <span className="btn btn-link text-decoration-none ">
            Reset Password
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Login;
