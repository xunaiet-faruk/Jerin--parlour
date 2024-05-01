

const MakeAdmin = () => {
    return (
        <div className="mt-20">
            <div className="bg-white h-[220px] px-5 py-4 rounded-xl">
              <div className="flex items-center gap-5">
                
                     <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold text-xl"> Email</span>

                            </div>
                            <input type="text" placeholder="John@gmail.com" className="input input-bordered w-[500px]" />

                        </label>  
                        </div> 
                            <div className="mt-10">
                        <button type="submit" className="border-2 px-7 py-2 rounded-md font-semibold hover:bg-[#F63E7B] bg-[#F63E7B] text-white hover:text-white  border-[#F63E7B]">Submit</button>

                                </div>        
              </div>

            </div>
        </div>
    );
};

export default MakeAdmin;