import { useNavigate } from "react-router-dom";

const Logo = (props: { path: string }) => {
  const navigate = useNavigate();
  const { path } = props;
  return (
    <img
      src="logo.png"
      className="logo"
      onClick={() => {
        navigate(path);
      }}
    />
  );
};

export default Logo;
