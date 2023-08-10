import { Request, Response } from "express";
import Register from "../models/resgister.module";

const register= async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, mobile, address, domain, role} = req.body;
        const newRegister = new Register({ firstName, lastName, email, mobile, address, domain, role });
        await newRegister.save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (err: any) {
        res.status(500).json({ message: "Error sending message" });
    }
}

export default register;