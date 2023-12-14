"use server";

import { revalidatePath } from "next/cache";
import { Payment, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "../auth";

export const addUser = async (formData) => {
//  const { username, email,fullName, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
const { username, email,fullName, password,matricNo, level, phone, address, isAdmin, isActive } = formData ;

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      fullName,
      matricNo,
      level,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

 // revalidatePath("/dashboard/users");
 // redirect("/dashboard/users");
};

// export const updateUser = async (formData) => {
//   const { id, username, email, password, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData);

//   try {
//     connectToDB();

//     const updateFields = {
//       username,
//       email,
//       password,
//       phone,
//       address,
//       isAdmin,
//       isActive,
//     };

//     Object.keys(updateFields).forEach(
//       (key) =>
//         (updateFields[key] === "" || undefined) && delete updateFields[key]
//     );

//     await User.findByIdAndUpdate(id, updateFields);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to update user!");
//   }

//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/users");
// };
export const addPayment = async (formData) => {
 
  const { 
    reference,
    amount,
    currency,
    status,
    email,
    fullName, 
    matricNo, 
    level,  } = formData ;
  
    try {
      connectToDB();
  
  
      const newPayment = new Payment({
        reference,
        amount,
        currency,
        status,
        email,
        fullName, 
        matricNo, 
        level, 
      });
  
      await newPayment.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to  make payment!");
    }
  };


export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const getAllUserPayment = async (email) => {
  
  try {
    connectToDB()
    const studentPayment = await Payment.find({email : email})
    
    return  studentPayment
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user payments!");
  }
}



export const authenticate = async ( formData) => {
   // const { email, password } = Object.fromEntries(formData);
  const { email, password } = formData;

  try {
    await signIn("credentials", { email, password });
    
  } catch (err) {
    return "Wrong Credentials!";      
  }
};
