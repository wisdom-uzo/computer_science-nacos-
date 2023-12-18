import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    matricNo: {
      type: String,
      required: true,
      unique: true,
    },
    level: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);



const paymentSchema = new mongoose.Schema({
  reference: { type: String, required: true }, // Payment reference from Paystack
  amount: { type: String, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true },
  email: {type: String, required: true},
  matricNo: {type: String, required: true},
  fullName: {type: String,required: true },
  level: {type: String,required: true},
  paymentType : {type: String,required: true},
},
{ timestamps: true }
);


export const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
