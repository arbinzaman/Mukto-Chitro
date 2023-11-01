import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Reviews from "../../Pages/Home/Reviews";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3001/event"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/allevent",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:3001/event"),
      },

      {
        path: "/packages",
        element: <PackagesPrice></PackagesPrice>,
        
      },
      {
        path: "/packagedetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3001/packagedetails/location/${params.id}`),
        element: <PackageDetails></PackageDetails>,
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
          element:<Allbookings></Allbookings>
      },
      {
        path: "/dashboard/addapackage",
          element:<AddAPackage></AddAPackage>,
      },
      {
        path: "/dashboard/addaevent",
          element:<AddAEvent></AddAEvent>,
      },
      {
        path: "/dashboard/allusers",
          element:<AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/allbookings",
          element:<Allbookings></Allbookings>,
      },
      {
        path: "/dashboard/addaeventcatagory",
          element:<AddAEventCatagory></AddAEventCatagory>,
      },
    ],
  },
]);
export default router;
