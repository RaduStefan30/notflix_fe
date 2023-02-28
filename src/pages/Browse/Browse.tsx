import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    try {
      dispatch({
        type: "user/logout",
      });
    } catch (e) {
      console.log(e);
    } finally {
      navigate("/");
    }
  };
  return (
    <div>
      Browse
      <button onClick={logout}>Log out fake</button>
    </div>
  );
};

export default Browse;
