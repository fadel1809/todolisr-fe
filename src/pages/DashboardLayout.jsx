/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar, NavbarLogin } from "../components";
import { Wrapper } from "../assets/wrappers/dashboarLayout";
const DashboardLayout = () => {
  return (
    <Wrapper>
      <div>
        <NavbarLogin />
        <div className="flex mt-0">
          <Sidebar />

          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardLayout;
