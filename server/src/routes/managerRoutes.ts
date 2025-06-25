import express from 'express';
import{
    getManager,
    updateManager, 
    createManager,
    getManagerProperties,
} from "../controllers/managerControllers"

const router = express.Router();

router.get("/:cognitoId/properties", getManagerProperties); // Specific route first
router.get("/:cognitoId", getManager);                      // General route after
router.put('/:cognitoId', updateManager);
router.post("/", createManager);

export default router;