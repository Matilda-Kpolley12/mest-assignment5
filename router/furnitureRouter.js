const router = require("express").Router();

const furnitureController = require("../controllers/furnitureController");

router.get("/", furnitureController.allFurnitures);
router.get("/:id", furnitureController.getFurniture);
router.post("/", furnitureController.createFurniture);
router.patch("/id", furnitureController.updateFurniture);
router.delete("/id", furnitureController.deleteFurniture);

module.exports= router