import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link to="/login" className="btn btn--primary sign-in__button">
      Sign In
    </Link>
  );
};

export default SignInButton;
