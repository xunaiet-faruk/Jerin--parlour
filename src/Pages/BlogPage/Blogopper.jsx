import React from 'react';

const Blogopper = () => {
    return (
        <div className=" bg-cover bg-fixed mt-[200px] mb-12  h-[400px] " style={{ backgroundImage: 'url(https://i.ibb.co/KygcFRj/image.png)' }}>


            <div className="flex justify-center items-center  ">
                <div className="pt-5 ">
                    <img className="w-60  ml-[150px] animate-pulse" src="https://i.ibb.co/1X0Ptfp/image-removebg-preview-71.png" alt="" />
                    <div className="space-y-4 text-center">
                        <h1 className="text-[#f6e4dc] uppercase pl-8 text-5xl font-bold ">Student  </h1>
                        <h1 className="text-[#f6e4dc] uppercase pl-8 text-2xl font-bold ">Discount  </h1>
                        <button className="uppercase  ml-8 bg-[#F63E7B]  text-white font-semibold px-6 py-1 rounded-xl">Discover Now</button>
                        <p className="uppercase pl-8 text-[#f6e4dc] text-sm font-semibold">Unlock 15% student discount at chantalle with student beans id.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogopper;