import express from "express";

// CONTROLER
import mainController from "../controller/controller.js";

// ROUTER
const router = express.Router();

router.get("/", mainController.homePage);
router.get("/a-propos", mainController.aProposPage);
router.get("/catalogue", mainController.cataloguePage);
router.get("/produit/:id", mainController.produitPage);

export default router;
