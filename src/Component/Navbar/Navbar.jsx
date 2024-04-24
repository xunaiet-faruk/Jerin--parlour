import { NavLink } from "react-router-dom";
import navbarIcon from '../../../public/Navicon.png'
const Navbar = () => {

    const links = <div className="flex justify-end items-center gap-6 max-w-screen-2xl mx-auto">
        <NavLink

            to="/"
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "font-semibold border-b-4 border-b-[#daa9a9] transition"
                        : "font-semibold hover:border-b-2 hover:border-b-[#fbbbbb] transition"
            }
        >
            <span className="flex items-center gap-2">

                Home
            </span>
        </NavLink>

        <NavLink

            to="/protfolio"
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "font-semibold border-b-4 border-b-[#daa9a9] transition"
                        : "font-semibold hover:border-b-2 hover:border-b-[#fbbbbb] transition"
            }
        >
            <span className="flex items-center gap-2">

                Our-Portfolio
            </span>
        </NavLink>

        <NavLink

            to="/blog"
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "font-semibold border-b-4 border-b-[#daa9a9] transition"
                        : "font-semibold hover:border-b-2 hover:border-b-[#fbbbbb] transition"
            }
        >
            <span className="flex items-center gap-2">

                Blog
            </span>
        </NavLink>

        <NavLink

            to="/portfolio"
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "font-semibold border-b-4 border-b-[#daa9a9] transition"
                        : "font-semibold hover:border-b-2 hover:border-b-[#fbbbbb] transition"
            }
        >
            <span className="flex items-center gap-2">

               Shop
            </span>
        </NavLink>
        <NavLink

            to="/login"
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "font-semibold  transition"
                        : "font-semibold  transition"
            }
        >
            <span className="flex items-center  bg-[#F63E7B] px-5 py-1 rounded-md text-white hover:bg-pink-900   gap-2">

                Login
            </span>
        </NavLink>


    </div>

    return (
        <div>


            <div className="navbar px-12  z-10 bg-[#Faeae3]  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="" href="/"><img src={navbarIcon} alt="" /></a>
                </div>
                <div className="navbar-end   hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;