import express from "express"
import { buscar, buscarPorId, coletar, criar, deletar } from "../controllers/missaoController.js"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/missoes/');
    },
    filename: function (req, file, cb) {
        const extensaoArquivo = path.extname(file.originalname);
        const nomeArquivo = `${Date.now()}${extensaoArquivo}`;
        cb(null, nomeArquivo);
    }
});
const upload = multer({ storage });
const router = express.Router()

router.get("/", async (req, res) => {
    res.json(await buscar())
})

router.get("/:id", async (req, res) => {
    res.json(await buscarPorId(req.params.id))
})

router.post("/", upload.single("arquivo"), async (req, res) => {
    res.json(await criar(req, res))
})

router.put("/coleta", async (req, res) => {
    res.json(await coletar(req.body))
})

router.delete("/:id", async (req, res) => {
    res.json(await deletar(req.params.id))
})
export default router