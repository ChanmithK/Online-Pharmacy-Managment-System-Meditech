const express = require('express') 
const invoiceController = require('../controllers/invoice.controller'); 
const checkAuthMiddleware = require('../middleware/check-auth');
 
const router = express.Router(); 
 
router.get("/:nic", invoiceController.invoice); 

module.exports = router;