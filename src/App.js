import './App.css';
import {RouterProvider } from 'react-router-dom';
import router from './Components/Layouts/Routes/Routes';
import Spiner from './Components/Shared/Spiner/Spiner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider fallbackElement={<Spiner></Spiner>} router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
