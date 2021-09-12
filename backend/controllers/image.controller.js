var con = require('../config/connection');
function upload(req,res){
    if(req.file.filename){
        res.status(201).json({
          message: "Image Upload Succesfully",
          url: req.file
        });
    }else{
        res.status(500).json({
            message: "Image Upload Error!!",
          });
    }
}

function show(req,res){
    const nic =req.params.nic;
    console.log(nic);
	var sql = "SELECT * FROM `orders` WHERE nic="+nic;

    con.query(sql, function (err, result) {
        if (err){
            console.error(err);
        } else {
            console.log(result);
            let reply = {
              
                image: result[0],
            }
            res.status(200).json(reply);
        }
    });
    
	
}


module.exports ={
    upload:upload,
    show:show
}