import { useNavigate } from "react-router-dom";

const Logo = (props: { path: string }) => {
  const navigate = useNavigate();
  const { path } = props;
  console.log(path);
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
