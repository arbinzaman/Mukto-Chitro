import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import Login from '../../Pages/Login/Login';

const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/blog',
            element:<Blogs></Blogs>,

        },
        {
            path:'/login',
            element:<Login></Login>,

        },
      ]
    }
  ]);
  export default router;