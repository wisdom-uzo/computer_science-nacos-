"use client"
  import { usePaystackPayment } from 'react-paystack';
import { addPayment } from '../lib/actions';
  
  

  const Payment =  (userData) => {


    const {data} = userData
    const config = {
        reference: (new Date()).getTime().toString(),
        email: data?.email,
        amount: 250000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_bd3815cd7152ae1952909f874afc14734dbd0d69',
    };  
    
    const onSuccess =  (reference) => {
  
          addPayment({reference: reference.reference, amount: '2500', email:data?.email, fullName:data?.fullName, matricNo:data?.matricNo, currency:"NGN" , status:reference.status,  level: data?.level}); 

    };
  
    const onClose = () => {
      console.log('closed')
    }




    const initializePayment = usePaystackPayment(config);


      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };
  
  
  export default Payment;