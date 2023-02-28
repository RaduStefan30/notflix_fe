import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const Protected = (props: { children: any }) => {
  const { token } = useAppSelector((state: any) => state.auth);
  const navigate = useNavigate();
  if (token) return props.children;

  useEffect(() => {
    if (!token) navigate("../login", { replace: true });
  }, [token]);
};

export default Protected;
