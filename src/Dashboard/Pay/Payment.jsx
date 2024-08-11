import { Elements } from '@stripe/react-stripe-js';
import UseServices from '../../Hooks/Axiossecure/UseServices';
import { loadStripe } from '@stripe/stripe-js';
import CheakoutForm from './CheakoutForm';
import image from '../../../public/pay.png';
import image2 from '../../../public/paypal.png';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API);

const Payment = () => {
    const [, services] = UseServices();

    const totalPrice = services.reduce((total, item) => total + parseFloat(item.price), 0);

    return (
        <div className='mt-20'>
            <div className='flex justify-end items-end'>
                <div className='bg-white border-b-2 animate-pulse border-[#F63E7B] isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5 w-56 h-28 rounded-xl flex flex-col justify-center items-center'>
                    <h1 className='text-xl font-semiold text-black'>Your Total Payments</h1>
                    <p className='font-bold'><span className='text-[#F63E7B]'>$ </span> {totalPrice}</p>
                </div>
            </div>

            <div className='-mt-32 w-[500px]'>
                <div className='flex items-center gap-8'>
                    <div>
                        <h1 className="text-lg pt-4 text-gray-400 font-semibold">You Can Payments</h1>

                    </div>
                    <div className='flex gap-10 items-center mt-3'>
                        <div>
                            <img className="w-24" src={image} alt="payment option" />
                        </div>
                        <div>
                            <img className="w-16" src={image2} alt="paypal option" />
                        </div>
                    </div>

                    </div>
                </div>
               
                <Elements stripe={stripePromise}>
                    <CheakoutForm />
                </Elements>
            </div>
    );
};

export default Payment;
