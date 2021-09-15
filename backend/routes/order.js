const express = require('express') 
const orderController = require('../controllers/order.controller'); 
const checkAuthMiddleware = require('../middleware/check-auth');
 
const router = express.Router(); 
 
router.get("/:nic", orderController.index); 
router.delete("/:id", orderController.destroy);
router.post("/makeOrder", orderController.order);
router.get("/count/:nic", orderController.processingCount); 
router.get("/pendingCount/:nic", orderController.pendingCount); 
module.exports = router;
