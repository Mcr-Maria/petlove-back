import express from "express";
import { buscarPorIdRoutes } from "../controllers/concorrenteController.js";
const router = express.Router();    

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await buscarPorIdRoutes(id);
    if (result.type === "error") {
        return res.status(404).json(result);
    }
    res.json(result);
});