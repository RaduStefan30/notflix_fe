import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SignInButton = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const login = () => {
  //   try {
  //     dispatch({
  //       type: "user/login",
  //       payload: {
  //         auth: true,
  //       },
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     navigate("/browse");
  //   }
  // };
  return (
    <Link to="/login" className="btn btn--primary sign-in__button">
      Sign In
    </Link>
  );
};

export default SignInButton;
