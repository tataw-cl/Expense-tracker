import React, { useState } from "react";
import { auth } from "./firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "./signUp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = (event) => {
    // Handle registration logic here
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth">
      <h2>SignIn to the expense tracking site</h2>
      <form onSubmit={userInfo} className="form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={userInfo}>
          SignIn
        </button>
      </form>
      <br />
      <button onClick={SignUp}> SignUp</button>
    </div>
  );
};

export default SignIn;
