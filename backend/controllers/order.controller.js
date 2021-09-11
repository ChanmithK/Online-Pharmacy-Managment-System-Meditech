const models = require('../models');

function index(req,res){
    const id =req.params.id;
    
    models.Cus_Order.findAll (id).then(result =>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong"
        })
    });
    
    }

    module.exports ={
        index:index
    }
