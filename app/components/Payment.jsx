"use client"
  import { usePaystackPayment } from 'react-paystack';
import { addPayment } from '../lib/actions';
import { Paper } from '@mui/material';
  
  

  const Payment =  (userData) => {


    const {data} = userData 


    const config = {
        reference: (new Date()).getTime().toString(),
        email: data?.email,
        amount: userData.amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_bd3815cd7152ae1952909f874afc14734dbd0d69',
    };  
    
    const onSuccess =  (reference) => {
  
          addPayment({reference: reference.reference, amount: userData.domePrice, email:data?.email, fullName:data?.fullName, matricNo:data?.matricNo, currency:"NGN" , status:reference.status,  level: data?.level, paymentType:userData.paymentType }); 

    };
  
    const onClose = () => {
      console.log('closed')
    }




    const initializePayment = usePaystackPayment(config);


      return (
        <Paper variant='elevation' className='grid grid-cols-3 mb-3 p-3 justify-between items-center'>
          <p className="text-[13px]">{userData.paymentType} </p>
          <p className="text-[13px]"> ₦{userData.domePrice}</p>
            <button className='bg-green-500 text-[12px] px-1 py-2 rounded-lg hover:bg-green-600 font-bold text-white' onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Make Payment</button>
        </Paper>
      );
  };
  
  
  export default Payment;