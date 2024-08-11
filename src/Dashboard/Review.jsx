import UseAxios from "../Hooks/Axiossecure/UseAxios";


const Review = () => {
    const axiosSecure=UseAxios()
    const handleClick =async(e) =>{
        e.preventDefault()
        const form =event.target;
        const name =form.name.value;
        const company =form.company.value;
        const details = form.details.value;
        const Allinfo ={name,company,details}
        console.log(Allinfo);
        axiosSecure.post('/Review',Allinfo)
        .then(res =>{
            console.log(res.data);
        })
    }
    return (
        <div className="mt-20 ">
            <div className=" ">
               <form onSubmit={handleClick} className="space-y-5">
                    <input type="text" placeholder="Enter your name" name="name" id="" className="py-3 px-3 rounded-md  w-[550px]" /><br />
                    <input type="text" placeholder="Company’s name, Designation" name="company" id="" className="py-3 px-3 rounded-md  w-[550px]" /><br />
                    <textarea type="text" rows={6} placeholder="Description" name="details" id="" className="px-3 rounded-md  w-[550px]" /><br />
                    <button type="submit" className="border-2 px-10 py-2 rounded-md font-semibold hover:bg-[#f56d9a] bg-[#F63E7B] text-white hover:text-white  border-[#F63E7B]">Submit</button>

               </form>

            </div>
            
        </div>
    );
};

export default Review;