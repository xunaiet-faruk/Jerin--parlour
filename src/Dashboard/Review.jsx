

const Review = () => {
    return (
        <div className="mt-20 ">

            <div className="space-y-5 ">
                <input type="text" placeholder="Enter your name" name="" id="" className="py-3 px-3 rounded-md  w-[550px]" /><br />
                <input type="text" placeholder="Company’s name, Designation" name="" id="" className="py-3 px-3 rounded-md  w-[550px]" /><br />
                <textarea type="text" rows={6} placeholder="Description" name="" id="" className="px-3 rounded-md  w-[550px]" /><br/>
                <button type="submit" className="border-2 px-10 py-2 rounded-md font-semibold hover:bg-[#F63E7B] bg-[#F63E7B] text-white hover:text-white  border-[#F63E7B]">Submit</button>


            </div>
            
        </div>
    );
};

export default Review;