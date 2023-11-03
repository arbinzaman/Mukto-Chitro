import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/UseAdmin";

const DashBoardLayouts = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>

            <li>
              <Link to="/dashboard/mybookings">My Bookings</Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/addapackage">Add A Package</Link>
                </li>
                <li>
                  <Link to="/dashboard/addaevent">Add A Event</Link>
                </li>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbookings">All Bookings</Link>
                </li>
                <li>
                  <Link to="/dashboard/addaeventcatagory">
                    Add A Event Category
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayouts;
