import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import ServiceDetails from "../../Pages/Home/ServiceDetails";
import Reviews from "../../Pages/Home/Reviews";
import Services from "../../Pages/Home/Services";
import AddService from "../../Pages/Home/AddService";
import ErrorPage from "./ErrorPage";
import PackagesPrice from "../../Pages/Packages/PackagesPrice";
import AddAPackage from "../../Dashboard/AddAPackage";
import AddAEvent from "../../Dashboard/AddAEvent";
// import DashBoradLayout from "../../Dashboard/DashBoardLayouts";
// import PrivateRoutes from "../../PrivateRoute/PrivateRoute";
// import Packagee from '../../Pages/PackagesPrice';

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
        // loader:()=>fetch('https://citro-golpo.vercel.app/reviews')
      },
      {
        path: "/allevent",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:3001/event"),
      },

      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://citro-golpo.vercel.app/services/${params.id}`),
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/packages",
        element: <PackagesPrice></PackagesPrice>,
        // loader:()=>fetch('https://citro-golpo.vercel.app/services'),
      },
      {
        path: "/addapackage",
        element: <AddAPackage></AddAPackage>,
        // loader:()=>fetch('https://citro-golpo.vercel.app/services'),
      },
      {
        path: "/addaevent",
        element: <AddAEvent></AddAEvent>,
        // loader:()=>fetch('https://citro-golpo.vercel.app/services'),
      },
      //   {
      //     path:'/packagee',
      //     element:<Packagee></Packagee>,
      //     loader:()=>fetch('https://citro-golpo.vercel.app/services'),

      // },
    ],
  },

//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoutes>
//         <DashBoradLayout></DashBoradLayout>
//       </PrivateRoutes>
//     ),
//     children: [
//       {
//           path:'/dashboard',
//         //   element:<SelectedItems></SelectedItems>
//       },
//     ],
//   },
]);
export default router;
