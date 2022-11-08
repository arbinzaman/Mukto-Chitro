import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Services from '../../Pages/Home/Services';


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
            path:'/services',
            element:<Services></Services>,
            loader:()=>fetch('https://citro-golpo.vercel.app/services')

        },
      ]
    }
  ]);
  export default router;