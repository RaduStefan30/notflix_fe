import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      src="logo.png"
      className="logo"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default Logo;
