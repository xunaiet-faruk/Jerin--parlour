import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";


const Blog = () => {
    return (
        <div className="mb-20">
            <div className="hero h-[500px] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/g7Mg5nn/image.png)' }}>
                <div className="">
                    <h1 className="text-5xl font-bold text-white ">Blogs</h1>
                    <div className="pt-5 flex justify-center items-center gap-2">
                        <Link to={'/'} className="text-[#F63E7B] font-semibold ">Home</Link>
                        <FaArrowRight />
                        <Link className="font-semibold text-white">Blogs</Link>

                    </div>
                </div>

            </div>

            <h1 className="text-5xl font-serif font-bold text-center p-12">Jerins Blogs <span className="text-[#F63E7B] ">Modern</span></h1>
            
            <div>
                <BlogData/>
            </div>
        </div>
    );
};

export default Blog;