import GetStartedButton from "../../Buttons/GetStartedButton/GetStartedButton";
import BigInput from "../../Inputs/BigInput/BigInput";

const HeroForm = () => {
  return (
    <div className="hero__form">
      <p className="hero__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
        <BigInput type="email" placeholder="Email address" />
        <GetStartedButton />
      </div>
    </div>
  );
};

export default HeroForm;
