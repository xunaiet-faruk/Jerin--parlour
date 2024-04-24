import { FaClover, FaRightLeft } from "react-icons/fa6";
import BlogModal from "./BlogModal";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const BlogData = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           <div className="flex items-center gap-10">
               <div>
                    <div className="flex gap-5 border-r-4 shadow-2xl hover:shadow-red-500 rounded-xl border-red-500 w-[950px] mt-12  bg-[#Faeae3] ">
                        <div>
                            <img className='w-[300px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-4-570x570.jpg" alt="" />
                        </div>
                        <div className="space-y-3 py-2">

                            <h1 className="text-2xl  text-gray-600 w-[700px] font-bold ">Holiday Haircuts and Styling: Easy Tutorials for Everyone</h1>
                            <p className="w-[700px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, similique? Pariatur, amet sint in explicabo perferendis saepe optio iure sequi.</p>
                            <p className="text-black">Jun 06, 2021</p>
                            <p>by <span className="text-[#F63E7B] font-semibold">xunaiet faruk</span> </p>

                        </div>

                    </div>
                    <div className="flex gap-5 border-r-4 shadow-2xl hover:shadow-red-500 rounded-xl border-red-500 w-[950px] mt-12  bg-[#Faeae3] ">
                        <div>
                            <img className='w-[300px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-4-570x570.jpg" alt="" />
                        </div>
                        <div className="space-y-3 py-2">

                            <h1 className="text-2xl  text-gray-600 w-[700px] font-bold ">Holiday Haircuts and Styling: Easy Tutorials for Everyone</h1>
                            <p className="w-[700px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, similique? Pariatur, amet sint in explicabo perferendis saepe optio iure sequi.</p>
                            <p className="text-black">Jun 06, 2021</p>
                            <p>by <span className="text-[#F63E7B] font-semibold">xunaiet faruk</span> </p>

                        </div>

                    </div>
                    <div className="flex gap-5 border-r-4 shadow-2xl hover:shadow-red-500 rounded-xl border-red-500 w-[950px] mt-12  bg-[#Faeae3] ">
                        <div>
                            <img className='w-[300px]' src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/gallery-4-570x570.jpg" alt="" />
                        </div>
                        <div className="space-y-3 py-2">

                            <h1 className="text-2xl  text-gray-600 w-[700px] font-bold ">Holiday Haircuts and Styling: Easy Tutorials for Everyone</h1>
                            <p className="w-[700px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, similique? Pariatur, amet sint in explicabo perferendis saepe optio iure sequi.</p>
                            <p className="text-black">Jun 06, 2021</p>
                            <p>by <span className="text-[#F63E7B] font-semibold">xunaiet faruk</span> </p>

                        </div>

                    </div>
               </div>

                <div className="space-y-5 -mt-[70px]">
                    <div className="flex  items-center gap-2">
                        <h1 className="uppercase text-gray-600  text-2xl font-bold">Add your blog here</h1>
                        
                            <FaClover className="text-xl animate-spin" />
                        
                    </div>
                   
                    <div>
                        <BlogModal/>
                    </div>
                    <h1 className="text-2xl text-gray-600 pt-7 font-bold ">Archive</h1>
                    <div className="flex justify-evenly items-center gap-12 text-red-500">
                       <div className="space-y-5">
                            <div className="flex items-center  gap-6 ">
                                <FaAngleRight />
                                <p>Jun 2021</p>
                               
                            </div>
                            <div className="flex gap-7 items-center justify-center">
                                <FaAngleRight />
                                <p>Jul 2021</p>
                               
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Aug 2021</p>
                               
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Sep 2021</p>
                               
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Oct 2021</p>
                                
                            </div>
                       </div>

                       <div className="space-y-5">
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Nov 2021</p>
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Dec 2021</p>

                            </div>
                           
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Jan 2021</p>
                                
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Feb 2021</p>
                               
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <FaAngleRight />
                                <p>Mar 2021</p>
                               
                            </div>
                       </div>
                    
                    </div>

                    <h1 className="text-2xl pt-7 text-gray-600 font-bold">Categories</h1>
                    <div className="space-y-4 text-red-500">
                        <div className="flex gap items-center ">
                            <FaAngleRight />
                            <Link to={'/protfolio'}>Hair</Link>
                        </div>
                        <div className="flex  items-center ">
                            <FaAngleRight />
                            <Link to={'/protfolio'}>Makeup</Link>
                        </div>
                        <div className="flex  items-center ">
                            <FaAngleRight />
                            <Link to={'/protfolio'}>Nail</Link>
                        </div>
                        <div className="flex  items-center ">
                            <FaAngleRight />
                            <Link to={'/protfolio'}>HAIR REMOVAL</Link>
                        </div>
                        <div className="flex  items-center ">
                            <FaAngleRight />
                            <Link to={'/protfolio'}>Skin Care</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default BlogData;