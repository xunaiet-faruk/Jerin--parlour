import { useContext, useEffect, useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { useLocation, useNavigate, Link} from 'react-router-dom';
import { AuthContext } from "../Providers/Authprovider";
import Swal from 'sweetalert2'
import Loading from "../../Loading";


const Login = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = ['Profile', 'Dashboard', 'Settings', 'Log Out'];

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
    const [register, setRegister] = useState(false);
    const [showName, setShowName] = useState({});
    const navigate =useNavigate();
    const location =useLocation()
    const { user, CreatUser, LoginUser, Logout, loading, UpdateuserProfile, GoogleSignin } =useContext(AuthContext)

    const from =location.state?.from?.pathname || "/"
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        try {
            const res = await CreatUser(email, password);
            const LoggedUser = res.user;
            console.log(LoggedUser);
            await UpdateuserProfile(name, image);
            console.log("user profile update");
            Swal.fire({
                title: "Good job!",
                text: "User created successfully",
                icon: "success"
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };



    const handleLogin =(e) =>{
        e.preventDefault();
        const form = e.target;
        const loginmail = form.loginmail.value;
        const loginpass = form.loginpass.value;
        LoginUser(loginmail,loginpass)
        .then(res =>{
            const user =res.user;
            console.log(user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Login success",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from , {replace :true});
        })
    }


    // Google login  

    const handleGoogle =() =>{
        GoogleSignin()
        .then(res =>{
            console.log(res.user);
            navigate('/')
        })
    }

    return (
        <div>
            <div className=" h-[800px] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/R2PZVtx/image.png)' }}>
                <div className=" pt-14 ">
                  
                    <div className="w-80 md:w-96  lg:w-[800px] mx-auto backdrop-blur-md flex items-center relative overflow-hidden shadow-xl">
                        {/* register form  */}
                        <form onSubmit={handleRegister} className={`p-8 w-full ${register ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`}>
                            <h1 className="text-[#F63E7B] font-bold text-2xl lg:text-4xl pb-4 ">Register</h1>
                            <div className="space-y-1">
                                <label htmlFor="name" className="block">Name</label>
                                <input id="name" name="name" type="name" placeholder="John Doe" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                                <label htmlFor="u_email"  className="block">Email</label>
                                <input id="u_email" name="email" type="u_email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                                <label htmlFor="u_password" className="block">Password</label>
                                <input id="u_password" name="password" type="u_password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                                <label htmlFor="u_password" className="block">Image</label>
                                <div>
                                    <label htmlFor="type2-1" className="flex">
                                        <div className="w-fit whitespace-nowrap  bg-[#F63E7B]  px-2 py-1 text-sm text-white">Choose File</div>
                                        <div className=" flex w-full max-w-[380px] items-center  border-b-[2px] border-[#F63E7B]  px-2 text-sm  text-white">{showName.name ? showName.name : 'No File Chosen'}</div>
                                    </label>
                                    <input min={5} 
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                const imageFile = e.target.files[0]; setShowName(imageFile);
                                            }
                                        }} className="hidden" type="file" name="image" id="type2-1"
                                    />
                                </div>
                            </div>
                            {/* button type will be submit for handling form submission*/}
                            <button type="submit" className="py-2 px-7 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block hover:bg-[#F63E7B] hover:text-white font-bold"> Register</button>
                            <p className="mb-3 text-center text-white">Already have an account? <Link onClick={() => { setRegister(!register); }} className="underline text-[#F63E7B] font-bold">Login</Link></p>
                            <hr />
                            <button onClick={handleGoogle} type="button" className="py-2  px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black hover:shadow-2xl hover:bg-[#f892b4]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>
                          
                        </form> 
                          
                                     {/* img */}
                        <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                            <img src="https://i.ibb.co/d6P8ZKP/image.png" className="object-cover h-full" alt="card navigate ui" />
                        </div>
                        
                        {/* login form */}
                        <form onSubmit={handleLogin} className={`p-8 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                            <h1 className="text-white font-bold text-2xl lg:text-4xl pb-4">Login</h1>
                            <div className="space-y-5">
                                <label htmlFor="_email"  className="block">Email</label>
                                <input id="_email" name="loginmail" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                                <label htmlFor="_password" className="block">Password</label>
                                <input id="_password" name="loginpass" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                            </div>
                           
                            <button type="submit" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block  hover:bg-[#F63E7B] hover:text-white font-bold">Login</button>
                            <p className="mb-3 text-center text-white ">Don&apos;t have an account?<Link onClick={() => { setRegister(!register); }} className="underline text-[#F63E7B] font-bold"> Register</Link></p>
                            <hr />
                            <button type="button" onClick={handleGoogle} className="py-2 hover:shadow-2xl px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg viewBox="-0.5 0 48 48" version="1.1" className="w-6 inline-block mr-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google-color</title> <desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></g></svg>Continue with Google</button>
                          <div className="flex justify-end">
                                <Link to={'/'}> <FaHome className="hover:text-red-500 text-xl" /> </Link> 
                          </div>
                        </form>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};

export default Login;