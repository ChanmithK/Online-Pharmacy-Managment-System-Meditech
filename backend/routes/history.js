const express = require('express') 
const historyController = require('../controllers/history.controller'); 
const checkAuthMiddleware = require('../middleware/check-auth');
 
const router = express.Router(); 
 
router.get("/", historyController.history); 

module.exports = router;