import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";

const Protected = (props: { children: any }) => {
  const { auth } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  if (auth) return props.children;

  useEffect(() => {
    if (!auth) navigate("../login", { replace: true });
  }, [auth]);
};

export default Protected;
