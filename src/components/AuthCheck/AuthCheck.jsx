import React from "react";
import { useNavigate } from "react-router-dom";

const AuthCheck = (props) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("User")) {
      navigate("/login");
    }
  });
  return <>{props.children}</>;
};

export default AuthCheck;