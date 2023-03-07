import { Outlet } from "react-router-dom";
import SideBar from "../../Nav/SideBar/SideBar";

const Content = () => {
  return (
    <div className="content">
      <SideBar />
      <div className="content__wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
