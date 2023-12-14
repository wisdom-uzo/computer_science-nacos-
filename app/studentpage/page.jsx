'use client'
// import React from 'react'
// import { auth, signOut } from '../auth';
// import Payment from '../components/Payment';
// import { useSession } from 'next-auth/react'
// import { getAllUserPayment } from '../lib/actions';

  

 

// const page = async () => {

// const {user} = await auth()
// const payments = await getAllUserPayment(user.email)
// console.log(payments)

    
//   return (
//     <div>student page
//       <Payment data={user} />
//       <form
//         action={async () => {
//           "use server";
//           await signOut();
//         }}
//       >
//         <button>
          
//           Logout
//         </button>
//       </form>
//     </div>
//   )
// }

// export default page


import { useState } from 'react';

// Example student data
const student = {
  username: 'cool_student123',
  email: 'cool@student.com',
  hashedPassword: '********', // Hashed password for security reasons
  fullName: 'Cool Student',
  matricNo: 'ABC123',
  level: '200',
  phone: '123-456-7890',
};

const StudentPage = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handlePayment = () => {
    // Handle payment logic here (e.g., API call, payment processing)
    console.log(`Payment of $${paymentAmount} successful!`);
    // You can add your payment handling functionality here
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Student Information</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4">
          <p><span className="font-bold">Username:</span> {student.username}</p>
          <p><span className="font-bold">Email:</span> {student.email}</p>
          <p><span className="font-bold">Password:</span> {student.hashedPassword}</p>
          <p><span className="font-bold">Full Name:</span> {student.fullName}</p>
          <p><span className="font-bold">Matric No:</span> {student.matricNo}</p>
          <p><span className="font-bold">Level:</span> {student.level}</p>
          <p><span className="font-bold">Phone:</span> {student.phone}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Make Payment</h2>
          <input
            type="number"
            className="border border-gray-300 p-2 mb-2"
            placeholder="Enter payment amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handlePayment}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
