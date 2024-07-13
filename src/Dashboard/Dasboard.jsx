import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from 'react-router-dom';
import image from '../../public/Icon.png' 
import { FaShoppingBag } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { FaListUl, FaMoneyCheckDollar } from 'react-icons/fa6';
import { AuthContext } from '../Component/Authentication/Providers/Authprovider';
import Usecard from '../Hooks/Usecard';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const { user } = React.useContext(AuthContext)
    const [cart] =Usecard()

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const admin =true;

    const drawer = (
        <div className='' >
          
          <div className='flex items-center py-1 justify-center gap-4 '>
              
                <img className="size-10 rounded-full bg-slate-500 w-14 h-14 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80" src={user?.photoURL} alt="avatar" />
               <h1 className=' font-semibold text-black'>{user?.displayName}</h1>
          </div>
          
          
            <List>
               
             {
                admin ?
                        <ul className='mt-5'>
                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/orderlist'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >


                                    <div className='flex justify-center items-center gap-4'>
                                        <FaShoppingBag />
                                        <h1>Order List</h1></div>

                                </NavLink>
                            </li>
                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/adminhome'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >


                                    <div className='flex justify-center items-center gap-4'>
                                        <img className='w-6' src="https://i.ibb.co/tbRf4sd/image-removebg-preview-79.png" alt="" />
                                        <h1>Admin Home</h1></div>

                                </NavLink>
                            </li>
                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/add'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <IoMdAdd />
                                        <h1>Add Service</h1></div>


                                </NavLink>
                            </li>


                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/makeadmin'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <RiAdminFill />
                                        <h1>Make Admin</h1></div>


                                </NavLink>
                            </li>

                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/manage'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <MdMiscellaneousServices />
                                        <h1>Manage Services</h1></div>


                                </NavLink>
                            </li>

                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/shopinglist'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <FaListUl />
                                        <h1>Shoping List</h1>
                                        <span className="mb-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-pink-300 text-center text-[12px] text-white ">{cart.length}</span>
                                    </div>



                                </NavLink>
                            </li>

                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/booking'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <MdShoppingCart />
                                        <h1>Booking</h1></div>


                                </NavLink>
                            </li>
                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/pay'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <FaMoneyCheckDollar />
                                        <h1>Payment</h1></div>


                                </NavLink>
                            </li>

                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/review'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <FaRegCommentDots />
                                        <h1>Review</h1></div>


                                </NavLink>
                            </li>
                        </ul>
                        :
                        <>
                        
                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/booking'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <MdShoppingCart />
                                        <h1>Booking</h1></div>


                                </NavLink>
                            </li>

                            <li className='text-center hover:bg-gray-200 rounded-lg hover:border-r-4 hover:border-red-400 py-3 text-lg font-semibold'>
                                <NavLink

                                    to={'/dashboard/review'}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? ""
                                                : ""
                                    }
                                >

                                    <div className='flex justify-center items-center gap-4'>
                                        <FaRegCommentDots />
                                        <h1>Review</h1></div>


                                </NavLink>
                            </li>
                        
                        </>
             }


            </List>
            <Divider />
            <List>
                <NavLink to={'/'}>
                Home
                </NavLink>
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    
    return (
     <div >
            <div>
                <Box sx={{ display: 'flex' }} className="bg-[#f4f3f3] h-[200vh] " >
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Toolbar className='bg-[#fefcfc] text-black '>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" className=''>
                                <div className='font-bold flex justify-between'>
                                    <h1> Dashboard</h1>
                                  
                                </div>
                            </Typography>
                            <div className='absolute right-0'>
                                <img className='animate-spin mr-5' src={image} alt="" />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onTransitionEnd={handleDrawerTransitionEnd}
                            onClose={handleDrawerClose}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Outlet />
                        <Toolbar />

                    </Box>
                </Box>
            </div>

            
     </div>
      

    );
}

ResponsiveDrawer.propTypes = {
    
    window: PropTypes.func,
};

export default ResponsiveDrawer;
