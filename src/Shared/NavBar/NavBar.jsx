import { NavLink } from 'react-router-dom';
import logo from '../../assets/programming.png';

const NavBar = () => {

    const menuItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/project'>Project</NavLink></li>
        <li><NavLink to='/skill'>Skills</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar fixed z-10 play max-w-screen-xl border-b-2 shadow-lg bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className="btn btn-ghost text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    <div className="avatar">
                        <div className="w-12 rounded-xl">
                            <img src={logo} />
                        </div>
                    </div>WebApp
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;