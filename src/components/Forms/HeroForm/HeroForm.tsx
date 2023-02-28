import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetStartedButton from "../../Buttons/GetStartedButton/GetStartedButton";
import BigInput from "../../Inputs/BigInput/BigInput";

const HeroForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "user/update",
      payload: {
        email,
      },
    });
    console.log(email);
    navigate("/login");
  };

  return (
    <form className="hero__form" method="get" onSubmit={handleSubmit}>
      <p className="hero__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
        <BigInput
          placeholder="Email address"
          autocomplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <GetStartedButton />
      </div>
    </form>
  );
};

export default HeroForm;
