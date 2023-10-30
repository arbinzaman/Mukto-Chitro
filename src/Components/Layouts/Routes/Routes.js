import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../../PrivateRoute/PrivateRoute'
import ServiceDetails from '../../Pages/Home/ServiceDetails';
import Reviews from '../../Pages/Home/Reviews';
import Services from '../../Pages/Home/Services';
import AddService from '../../Pages/Home/AddService';
import ErrorPage from './ErrorPage';


const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://citro-golpo.vercel.app/servicesforhome')
            
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>,

        },
        {
            path:'/login',
            element:<Login></Login>,

        },
        {
            path:'/register',
            element:<Register></Register>,

        },
        {
            path:'/*',
            element:<ErrorPage></ErrorPage>,

        },
        {
            path:'/addService',
            element:<PrivateRoute><AddService></AddService></PrivateRoute>,

        },
        {
            path:'/reviews',
            element:<PrivateRoute><Reviews></Reviews></PrivateRoute>,
            // loader:()=>fetch('https://citro-golpo.vercel.app/reviews')

        },
        { 
            path:'/services',
            element:<Services></Services>,
            loader:()=>fetch('https://citro-golpo.vercel.app/services')

        },
        
        {
            path: "/services/:id",
            loader: ({ params }) =>
              fetch(`https://citro-golpo.vercel.app/services/${params.id}`),
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
          },
      ]
    }
  ]);
  export default router;