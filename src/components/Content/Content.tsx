import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import SideBar from "../Nav/SideBar/SideBar";

const Content = () => {
  const name = useAppSelector((state) => state.profile.name);
  return (
    <div className="content">
      <SideBar />
      <div className="content__wrapper">
        <Outlet/>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Content;
