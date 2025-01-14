import express from "express";
import mainController from "../controller/mainController.js";
import adminController from "../controller/adminController.js";

import upload from '../middlewares/multerConfig.js';

const router = express.Router();

router.get("/", mainController.homePage);
router.get("/a-propos", mainController.aboutPage);
router.get("/catalogue", mainController.cataloguePage);
router.get("/produit/:id", mainController.productPage);
router.get("/contact", mainController.contactPage);
router.get("/login", adminController.loginPage);
router.post("/login", adminController.loginPost);
router.get("/page-admin", adminController.adminPage);
router.post("/page-admin", upload.single('image'), adminController.adminPost);

export default router;
