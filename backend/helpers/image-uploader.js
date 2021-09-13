var con = require('../config/connection');
const multer = require('multer');
const path = require('path');
var name;
// const FirebaseService = require("../service/firebase.service");
// FirebaseService.uploadFileToFirebaseStore( '/uploads' , name );

const storage = multer.diskStorage({
 destination:function(req, file ,cb){
     cb(null, './uploads' );

 },
  
 filename: function(req, file ,cb){
    const nic =req.params.nic;
     var nameMain =  new Date().getTime();
     name =nameMain+ path.extname(file.originalname);
     console.log(req)
      var sql= "UPDATE `orders` SET `prescription` ="+nameMain+" WHERE `nic` ="+nic;
    // var sql = "INSERT INTO orders (nic,prescription) VALUES ('200021702506','1631469523416')";
     con.query(sql, function (err, result) {
    });
     cb(null, name);
 }

});

const fileFilter = (req, file ,cb) => {
   if(file.mimetype === 'image/jpeg' ||file.mimetype === 'image/png'){
     cb(null,true);
   }else{
       cb(new Error('Unsupported file'), false);
   }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize:1024*1024*10
    },
    fileFilter:fileFilter
});

module.exports= {
    upload:upload
}