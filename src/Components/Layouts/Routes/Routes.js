import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Services from "../../Pages/Home/Services";
import AddService from "../../Pages/Home/AddService";
import ErrorPage from "./ErrorPage";
import PackagesPrice from "../../Pages/Packages/PackagesPrice";
import AddAPackage from "../../Dashboard/AddAPackage";
import AddAEvent from "../../Dashboard/AddAEvent";
import DashBoradLayouts from "../DashboardLayouts/DashboardLayouts";
import PrivateRoutes from "../../PrivateRoute/PrivateRoute";
import AllUsers from "../../Dashboard/AllUsers";
import Allbookings from "../../Dashboard/AllBookings";
import AddAEventCatagory from "../../Dashboard/AddAEventCatagory";
import PackageDetails from "../../Pages/PackageDetails/PackageDetails";
import AdminRoute from "./AdminRoutes/AdminRoute";
import MyPackages from "../../Dashboard/MyPackage/MyPackages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://mukto-chitro-server-site.vercel.app/event"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },

      {
        path: "/allevent",
        element: <Services></Services>,
        loader: () => fetch("https://mukto-chitro-server-site.vercel.app/event"),
      },

      {
        path: "/packages",
        element: <PackagesPrice></PackagesPrice>,
      },
      {
        path: "/packagedetails/:id",
        loader: ({ params }) =>
          fetch(`https://mukto-chitro-server-site.vercel.app/packagedetails/location/${params.id}`),
        element: (
          <PrivateRoute>
            <PackageDetails></PackageDetails>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoradLayouts></DashBoradLayouts>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyPackages></MyPackages>,
      },
      {
        path: "/dashboard/addapackage",
        element: (
          <AdminRoute>
            <AddAPackage></AddAPackage>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addaevent",
        element: (
          <AdminRoute>
            <AddAEvent></AddAEvent>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbookings",
        element: (
          <AdminRoute>
            <Allbookings></Allbookings>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addaeventcatagory",
        element: (
          <AdminRoute>
            <AddAEventCatagory></AddAEventCatagory>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbookings",
        element: (
          <AdminRoute>
            <Allbookings></Allbookings>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
