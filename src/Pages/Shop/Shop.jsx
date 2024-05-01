import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Shop = () => {

    const [shop,setShop] = useState([])
    useEffect(() =>{
        fetch('./Shop.json')
        .then(res =>res.json())
        .then(data =>setShop(data))
    },[])
    return (
        <div>

            <div className="hero h-[600px] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/QvsfQRQ/image.png)' }}>
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-white ">Our Portfolio</h1>
                    <div className="pt-5 flex justify-center items-center gap-2">
                        <Link to={'/'} className="text-[#F63E7B] font-semibold ">Home</Link>
                        <FaArrowRight />
                        <Link className="font-semibold text-white">Shop</Link>

                    </div>
                </div>

            </div>

            <div>
                <h1 className="text-5xl font-serif font-bold text-center py-9">Jerins  <span className="text-[#F63E7B] ">Shops</span></h1>
                <p className="text-gray-400 text-center">Embark on a journey of beauty and sophistication with our parlour shop's exquisite offerings. Elevate your self-care <br/> routine with our curated  selection of premium skincare, cosmetics, and fragrances. <br/> Discover the perfect blend of luxury and indulgence for a radiant, confident you.</p>
            </div>

            <div>
                <div className="flex justify-end px-20">
                    <select className="select select-bordered w-full max-w-xs font-bold text-black">
                        <option disabled selected>Select Your Choice</option>
                        <option>Hair</option>
                        <option>Cream</option>
                        <option>Oil</option>
                        <option>Makeup </option>
                    </select>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 max-w-screen-2xl mx-auto">
                    {
                        shop.map((item, index) => 
                        <div key={index} className="">

                                <div className="mx-auto   rounded-xl  bg-white px-4 pb-8 pt-4 font-sans dark:bg-[#18181B]">
                                    <div className="relative flex h-48 w-full justify-center lg:h-[420px]">
                                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                            {/* love  */}
                                            <div className="flex items-center"><svg width={30} className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                                            <button className="rounded-xl bg-black px-3 py-1 font-medium text-white duration-200 hover:bg-red-300">{item?.percentage} off</button>
                                        </div>
                                        <img className=" w-full bg-cover rounded-lg bg-black/40" src={item?.image} alt="card navigate ui" />
                                    </div>
                                    <div className="mx-auto w-[85%]  pt-6 text-center font-bold ">
                                        <h6 className="text-xl md:text-base lg:text-lg ">{item?.name}</h6>
                                        <p className="text-center font-semibold text-[#F63E7B] ">$ {item?.price}</p>
                                   
                                    </div>
                                    <div className="flex flex-wrap mt-5 items-center justify-center gap-6 text-sm md:text-base">
                                        <button className="rounded-lg bg-[#Faeae3] text-[#F63E7B] px-7 py-2 font-sans font-bold  duration-300 hover:scale-105 hover:bg-red-500 hover:text-white">View</button>
                                        <button className="flex items-center hover:border-red-500  hover:border-2 px-5 rounded-lg">
                                            <svg  width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g strokeWidth="0"></g> <g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g> <g id="navigateui"> <path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
                                            <span className="text-[#c7c7c5]  hover:text-black hover:font-bold ">Add to Cart</span>
                                        </button>
                                    </div>
                                </div>

                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Shop;