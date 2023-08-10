import { Request, Response } from "express";
import ContactUs from "../models/contact-us.module";

const contactus= async (req: Request, res: Response) => {
    try {
        const { name, email, message, number} = req.body;
        const newContactUs = new ContactUs({ name, email, message,number });
        await newContactUs.save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (err: any) {
        res.status(500).json({ message: "Error sending message" });
    }
}

export default contactus;