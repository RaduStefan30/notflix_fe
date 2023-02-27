import SignInButton from "../../Buttons/SignInButton/SignInButton";
import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";

const NavBar = () => {
  return (
    <nav className="nav">
      <Logo />
      <span className="nav__links">
        <NavLink>Pricing</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>FAQ</NavLink>
        <SignInButton />
      </span>
    </nav>
  );
};

export default NavBar;
