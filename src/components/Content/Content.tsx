import { Outlet } from "react-router-dom";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import SideBar from "../Nav/SideBar/SideBar";

const Content = () => {
  return (
    <div className="content">
      <SideBar />
      <div className="content__wrapper">
        <Outlet />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Content;
