import { Link, NavLink } from "react-router-dom";
import navbarIcon from '../../../public/Navicon.png'
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Authentication/Providers/Authprovider";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const { user, Logout } = useContext(AuthContext)
    const handleLogout =()=>{
        Logout()
    }
    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', close);
        return () => {
            document.removeEventListener('mousedown', close)
        }
    }, []);
    
    const links = <div className="flex justify-end  items-center gap-6 max-w-screen-2xl mx-auto">
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

            to="/shop"
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
      {user ?<>
           
            <div ref={dropDownRef} className="relative mx-auto w-fit text-black">
                <button onClick={() => setOpen((prev) => !prev)}>
                    <img width={40} height={40} className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80" src={user?.photoURL} alt="avatar" />
                    <h1 className="text-[#F63E7B] font-semobold">{user?.displayName}</h1>
                </button>
                <ul className={`${open ? 'visible duration-300' : 'invisible'} absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md`}>
                    
                   <div className="w-36 h-[65px] bg-pink-100 space-y-2 text-center ">
                        <Link to={'/dashboard'} className="text-[16px]  hover:text-pink-400 cursor-pointer pt-5 font-bold">Dashboard</Link>
                        <hr className="border-b border-gray-300"/>
                        <Link onClick={handleLogout} className="text-red-500  font-bold text-md hover:text-pink-800 cursor-pointer">LogOut</Link>
                   </div>
                </ul>
            </div>
      </>
      :
     
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
      }

    </div>

    return (
        <div>


            <div className="navbar fixed z-10  bg-opacity-30  bg-[#Faeae3]  ">
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