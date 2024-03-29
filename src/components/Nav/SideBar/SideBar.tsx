import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const SideBar = () => {
  const linkClasses = "sidebar__link link";

  const activeLinkClasses = (isActive: boolean) =>
    isActive ? linkClasses + " sidebar__active" : linkClasses;
  return (
    <div className="sidebar">
      <Logo path="home" />
      <div className="sidebar__links">
        <NavLink
          to="home"
          className={({ isActive }) => activeLinkClasses(isActive)}
        >
          <span className="sidebar__text">Home</span>
        </NavLink>
        <NavLink
          to="movies"
          className={({ isActive }) => activeLinkClasses(isActive)}
        >
          <span className="sidebar__text">Movies</span>
        </NavLink>
        <NavLink
          to="series"
          className={({ isActive }) => activeLinkClasses(isActive)}
        >
          <span className="sidebar__text">Series</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
