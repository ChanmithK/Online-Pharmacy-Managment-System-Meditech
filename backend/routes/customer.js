
const express = require('express') 
const userController = require('../controllers/customer.controller'); 
const checkAuthMiddleware = require('../middleware/check-auth');
 
const router = express.Router(); 
 
router.post("/sign-up", userController.signUp);
router.post("/login", userController.login);
router.get("/:nic", userController.show);
// router.get("/", userController.index); 
router.post("/:nic", userController.update); 
router.delete("/:nic", checkAuthMiddleware.checkAuth, userController.destroy);
module.exports = router;