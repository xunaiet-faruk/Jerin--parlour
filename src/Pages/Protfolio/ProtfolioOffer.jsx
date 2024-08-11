

const ProtfolioOffer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className=" bg-fixed object-cover bg-no-repeat mt-[200px] mb-12  h-[700px] " style={{ backgroundImage: 'url(https://ld-wp73.template-help.com/wordpress/prod_8818/v2/wp-content/uploads/2019/07/bg6.jpg)' }}>
             <div className="flex">

                    <div>
                        <img className="w-[300px]" src="https://i.ibb.co/F0bPNc1/post4-removebg-preview.png" alt="" />
                    </div>
                    <div className=" py-40">
                        <div className="space-y-6">
                            <h1 className="text-5xl text-center font-semibold">Get All Special Offers!</h1>
                            <p className="text-center">Sign up for our newsletter and get all the latest tips and tricks to <br />polish your nails at a good rate!</p>

                        </div>
                        <div className="my-5">
                            <input type="email" name="" id="" className="w-[500px] py-4 rounded-l-full px-5" placeholder="Enter Email" />
                            <button className="bg-[#F63E7B] text-white h-[55px] px-12 rounded-r-full text-lg font-semibold">Submite</button>
                        </div>

                    </div>

             </div>
            </div>
        </div>
    );
};

export default ProtfolioOffer;