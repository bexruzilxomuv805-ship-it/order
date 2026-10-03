import { Router } from "express";
import { orderController } from "../controllers/order.controller.js";
import orderValidation from "../middlewares/order.validator.js";

const router = Router();

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", orderValidation.validateCreate, orderController.create);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.delete);

export default router;
