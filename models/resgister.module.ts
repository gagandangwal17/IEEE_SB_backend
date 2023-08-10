import mongoose, { Schema } from "mongoose";

interface RegisterModel {
    firstName: string;
    lastName: string;
    email: string;
    mobile: number;
    address: string;

    domain:string[];
    role:string;
}

const RegisterSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    domain: { type: Array<String>(), required: true },
    role: { type: String, required: true },
});

const Register = mongoose.model<RegisterModel>("Register", RegisterSchema);

export default Register;
