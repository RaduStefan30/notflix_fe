import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logout = () => {
    try {
      dispatch({
        type: "auth/logout",
        payload: { email: "", token: "" },
      });
      dispatch({
        type: "profile/setProfile",
        payload: { name: "", display: true },
      });
    } catch (e) {
      console.log(e);
    } finally {
      navigate("/");
    }
  };
  return <button onClick={logout}>Log out fake</button>;
};

export default LogoutButton;
