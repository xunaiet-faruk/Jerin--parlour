import image from '../../../public/pay.png'
import image2 from '../../../public/paypal.png'

const Payment = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="space-y-5">
                    <input type="text" name="" id="" className="py-2 rounded-md  w-[550px]" /><br />
                    <input type="text" name="" id="" className="py-2 rounded-md  w-[550px]" /><br />
                    <input type="text" name="" id="" className="py-2 rounded-md  w-[550px]" />


                </div>

                <div>
                    <h1 className="text-lg pt-4 text-gray-400 font-semibold">You Can Payments</h1>
                    <div className='flex gap-10 items-center'>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>  <img src={image2} alt="" /></div>
                        <div>
                            <img className='w-20' src="https://i.ibb.co/8jf0wFR/image.png" alt="" />
                        </div>
                        <div>
                            <img className='w-16' src="https://i.ibb.co/C75NwC1/image.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;