import { Router } from "express";

import contactus from "../controllers/contact-us.controller";
import register from "../controllers/register.controller";

const router = Router();

router.post("/contact-us", contactus);

router.post("/register", register);

export default router;