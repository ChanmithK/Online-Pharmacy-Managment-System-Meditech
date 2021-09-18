const express = require('express') 
const invoiceController = require('../controllers/invoice.controller'); 
const checkAuthMiddleware = require('../middleware/check-auth');
 
const router = express.Router(); 
 
router.get("/:nic", invoiceController.invoice); 
router.get("/view/:id", invoiceController.View_invoice); 

module.exports = router;