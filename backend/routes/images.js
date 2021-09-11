const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');



const router = express.Router();

router.post('/upload/:nic',imageUploader.upload.single('file'), imageController.upload);
router.get("/show/:nic", imageController.show);


module.exports = router; 