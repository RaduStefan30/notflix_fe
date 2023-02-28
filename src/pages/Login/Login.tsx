import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SmallInput from "../../components/Inputs/SmallInput/SmallInput";
import Logo from "../../components/Logo/Logo";
import { useAppDispatch } from "../../hooks";
import { login } from "../../store/reducers/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showText, setShowText] = useState(false);

  const handleLearnMore = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowText((prev) => !prev);
  };

  const onSuccess = () => {
    navigate("/browse");
  };

  const onError = () => {
    console.log("error");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    dispatch(login({ email, password }, onSuccess, onError));
  };

  return (
    <div className="login">
      <Logo />
      <div className="login__container">
        <h1 className="login__title">Sign In</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <SmallInput placeholder="Email" id="email" type="text" />
          <SmallInput placeholder="Password" id="password" type="password" />
          <button type="submit" className="btn btn--primary">
            Sign In
          </button>
        </form>
        <div className="login__items">
          <div className="login__remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />
          </div>
          <a href="#" className="login__help link">
            Need help?
          </a>
        </div>
        <div className="login__bottom-text">
          <p className="login__text ">
            New to Netflix?{" "}
            <a href="#" className="link">
              Sign up now.
            </a>
          </p>
          <p className="login__text">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            {!showText ? (
              <a href="" className="link" onClick={handleLearnMore}>
                Learn more.
              </a>
            ) : (
              <p className="login__text">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target={"_blank"}
                  className="link"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target={"_blank"}
                  className="link"
                >
                  Terms of Service
                </a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
