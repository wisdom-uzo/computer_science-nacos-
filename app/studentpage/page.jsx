import React from 'react'
import { auth, signOut } from '../auth';
import Payment from '../components/Payment';
import { getAllUserPayment } from '../lib/actions';
import { Card } from '@mui/material';
import PaymentHistory from '../components/PaymentHistory';
import { MdLogout } from 'react-icons/md';

  

 

const page = async () => {

const {user} = await auth()
const payments = await getAllUserPayment(user.email)


    
  return (
    <div className='w-full md:w-[80%] mx-auto'>
      <Card variant={5} className='my-5 h-[20rem] flex flex-col justify-center p-3'>
        <div className="">
          <h2 className="font-bold text-[1.5rem] text-gray-700">Wellcome ✨🎉<br /> 
          <span>{user.fullName}</span> <br /> to your own personal NACOS portal👨‍💻👩‍💻</h2>

          <p className='mt-[3rem]'>Trust you had a wonderfull day</p>
        </div>
      </Card>


      <Card variant={5} className='p-5'>
         <h2 className="font-bold text-[1.5rem] text-gray-700">Payment</h2>


         <Payment data={user} 
                  domePrice={'2500.00'}
                  paymentType={'Departmental Fee/Nacos'} 
                  amount={250000} />

         <Payment data={user} 
                  domePrice={'3500.00'} 
                  paymentType={'Departmental week'} 
                  amount={350000} />

        <h2 className="font-bold mt-5 text-[1.5rem] text-gray-700">Payment history</h2>

      <PaymentHistory data={payments} />

      <form
        action={async () => {
          "use server";
         await signOut();
        }}
      >
        <button className="flex items-center gap-2 cursor-pointer p-5">
          <MdLogout />
          Logout
        </button>
      </form>

      </Card> 

      

      
    </div>
  )
}

export default page

{/* <Payment data={user} /> */}
      