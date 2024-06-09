import React, { useState } from "react";
import { auth } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signUp = (e) => {
    e.preventDefault();
    // Add your signup logic here
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    );
  };

  return (
    <div className="auth">
      <h2>Sign Up</h2>
      <form onSubmit={signUp} className="form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={handleEmailChange}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
