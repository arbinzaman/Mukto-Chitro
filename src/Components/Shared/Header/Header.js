import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

        const { user, logOut } = useContext(AuthContext);
        const handleLogOut = () => {
            logOut()
                .then(() => { })
                .catch(error => console.error('error'))
        }
    return (
        <div>
            <nav>
                <div className="navbar bg-base-300">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>

                                {
                            user?.uid ?
                                <>

                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/reviews">My Reviews</Link></li>
                                <li><Link to="/addService">Add Service</Link></li>

                                  </>   :<></>  
                                  }


                                <li><Link to="/blogs">BLog</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Chitro Golpo</Link>
                    </div>
                    <div className="navbar-end">


            
                        {
                            user?.uid ?
                                <>
                                    <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>
                                    <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                                </>
                                :
                                <>
                                    <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                                    <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                                </>
                        }


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;