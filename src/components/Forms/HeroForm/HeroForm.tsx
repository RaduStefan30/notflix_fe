import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import GetStartedButton from "../../Buttons/GetStartedButton/GetStartedButton";
import BigInput from "../../Inputs/BigInput/BigInput";

const HeroForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "auth/update",
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
