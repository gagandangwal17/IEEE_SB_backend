import mongoose,{ Schema } from "mongoose";

interface ContactUsModel {
    name: string;
    email: string;
    message: string;
    mobile: number;
}

const ContactUsSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    mobile: { type: Number, required: true },
});

const ContactUs = mongoose.model<ContactUsModel>("ContactUs", ContactUsSchema);

export default ContactUs;