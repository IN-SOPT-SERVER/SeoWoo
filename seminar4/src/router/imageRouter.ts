import { Router } from "express";
import { body } from "express-validator";
import { imageController } from "../controller";
import { auth, upload } from "../middlewares";

const router: Router = Router();

router.post("/", upload.single("file"), imageController.uploadImage);

export default router;
