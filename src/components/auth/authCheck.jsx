import React from "react";
import { auth } from "./firebase/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Redirect } from "react-router-dom";

export const authCheck = () => {
  const [AuthUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);
  if (AuthUser === null) {
    return <Redirect to="./signUp" />;
  }
  const userSignOut = () => {
    // Add your sign out logic here
    signOut(auth)
      .then(() => {
        console.log("Sign out was successful");
        setAuthUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {AuthUser ? (
        <>
          <p>{`signed in as ${AuthUser.email}`}</p>
          <button onClick={userSignOut}>signOut</button>
        </>
      ) : (
        <p>SignedOut</p>
      )}
    </>
  );
};
