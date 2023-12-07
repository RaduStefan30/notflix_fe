const NavLink = (props: { children: string }) => {
  return <a className="nav__link link">{props.children}</a>;
};

export default NavLink;
