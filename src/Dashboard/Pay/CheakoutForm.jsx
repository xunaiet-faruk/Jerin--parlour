import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import './Cheakoutform.css';
import UseAxios from "../../Hooks/Axiossecure/UseAxios";
import UseServices from "../../Hooks/Axiossecure/UseServices";
import { AuthContext } from "../../Component/Authentication/Providers/Authprovider";

const CheakoutForm = () => {
    const [transitionId, setTranstionId] =useState('');
    const {user} =useContext(AuthContext)
    const [clientSecrets,setSecreact] =useState('')
    const axiosSecure = UseAxios()
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [, services] = UseServices();
    const totalPrice = services.reduce((total, item) => total + parseFloat(item.price), 0);

    useEffect(() => {
        console.log("Total Price:", totalPrice);
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setSecreact(res.data.clientSecret);
            })
            .catch(error => {
                console.error("Error creating payment intent:", error);
            });
    }, [axiosSecure, totalPrice]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            console.log("PaymentMethod:", paymentMethod);
            setErrorMessage('');
            
        }

        const {paymentIntent, error:confirmError} =await stripe.confirmCardPayment(clientSecrets, {
            payment_method :{
                card :card,
                billing_details :{
                    email : user?.email || "anonymouse" ,
                    name: user?.displayName || "anonymouse" 
                }
            }
        })
        if(confirmError){
            console.log("error payment");
        }else{
            console.log(paymentIntent,"sucess payment intent ");
            if(paymentIntent.status === "succeeded"){
                console.log("transintion id",paymentIntent.id);
                setTranstionId(paymentIntent.id)
            }
        }
    };

    return (
        <div className="form-container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <input 
                    type="text" 
                    name="name" 
                
                    className="py-2 rounded-md border-r border-[#F63E7B] w-full px-3" 
                    placeholder="Enter name" 
                />
                <input 
                    type="email" 
                    name="email" 
                  
                    className="py-2 rounded-md border-r border-[#F63E7B] w-full px-3" 
                    placeholder="Enter email" 
                />
                <input 
                    type="text" 
                    name="address" 
                 
                    className="py-2 rounded-md border-r border-[#F63E7B] w-full px-3" 
                    placeholder="Enter address" 
                />
                <input 
                    type="number" 
                    name="phone" 
                 
                    className="py-2 rounded-md border-r border-[#F63E7B] w-full px-3" 
                    placeholder="Enter phone" 
                />
              
                <div className="input-field py-2 rounded-md border-r border-[#F63E7B] w-full px-3 bg-gray-50">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#495057',
                                    '::placeholder': {
                                        color: '#6c757d',
                                    },
                                },
                                invalid: {
                                    color: '#e3342f',
                                },
                            },
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecrets}
                    className="py-3 px-6 rounded-lg font-semibold text-white bg-[#F63E7B] hover:bg-[#d0526d] transition duration-300"
                >
                    Pay
                </button>
                {errorMessage && <div className="text-red-500 mt-2 text-center">{errorMessage}</div>}
                {transitionId && <p className=" text-center mt-2">Your Transition id : <span className="text-green-500">{transitionId}</span></p>}
            </form>
        </div>
    );
};

export default CheakoutForm;
