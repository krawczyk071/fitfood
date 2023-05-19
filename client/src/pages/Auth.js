import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  const [isUser, setIsUser] = useState(true);
  function toggleUser() {
    setIsUser((prev) => !prev);
  }
  return (
    <div className="container">
      {isUser ? (
        <Login toggleUser={toggleUser} />
      ) : (
        <Signup toggleUser={toggleUser} />
      )}
    </div>
  );
};

export default Auth;
