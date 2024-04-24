

const Appoinment = () => {
    return (
        <div className="mt-32 max-w-screen-2xl mx-auto ">
            <div>
                <h1 className="text-center font-bold text-5xl font-serif">Contact <span className="text-[#F63E7B]">Us</span></h1>
                <p className="text-gray-400 text-center pt-5">The best way to enjoy a treatment at our salon is to book an appointment with the desired esthetician. Fill in <br/> the form below and we will contact you to discuss your appointment.</p>

            </div>

            <div className="flex justify-center items-center gap-12 mt-12">
                <input type="text " placeholder="Your Firstame" className="input border-2 border-gray-100 input-ghost w-full max-w-xs" />
                <input type="text" placeholder="Your Lastname" className="input border-2 border-gray-100 input-ghost w-full max-w-xs" />
            </div>
            <div className="flex justify-center items-center gap-12 mt-5">
                <input type="text " placeholder="Your Phone" className="input border-2 border-gray-100 input-ghost w-full max-w-xs" />
                <input type="text" placeholder="Your Email" className="input border-2 border-gray-100 input-ghost w-full max-w-xs" />
            </div>
            <div className="flex justify-center items-center mt-5">
        <textarea name="" className="border-gray-100 border-2" placeholder="Enter Your Text" id="" cols="90" rows="10"></textarea>
          
            </div>
<div className="flex justify-center items-center ">
                <button type="button" className="relative w-[700px] font-semibold mt-5 inline-block overflow-hidden border-[#F63E7B] px-7 py-2 rounded-full  shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#F63E7B] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#F63E7B]  after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Submit</button>

</div>
        </div>
    );
};

export default Appoinment;