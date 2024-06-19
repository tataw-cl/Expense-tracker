import React from "react";
import { useAuth } from "./auth/context/AuthContext";
import { useNavigate } from "react-router-dom";


export const Header = ({ title }) => {
  const navigate = useNavigate();
  async function signOUT(){
    try {
     await logOut();
      return navigate("/login");
    }
    catch(error){
      console.error(error);
      alert(error.message);
    }
  }
  const { currentUser } = useAuth();
  const { logOut } = useAuth();
  return (
    <div>
      {currentUser && <h2>Welcome, {currentUser.email}!</h2>}
      <h2>{title} <button className="Link" onClick={signOUT}>LOG OUT</button></h2>
    </div>
  );
};
