const models = require('../models');

// var con = require('../config/connection');

// function invoice(req,res){
//     const nic =req.params.nic;
//     console.log(nic);

//     var sql = "SELECT customers.nic, customers.firstName, customers.lastName, invoices.orderId, invoices.invoiceID FROM customers, invoices WHERE customers.nic=invoices.nic";

//     con.query(sql, function (err, result) {
//         if (err){
//             console.error(err);
//         } else {
//             console.log(result);
//             res.status(200).send(result);
//         }
//     });
 function invoice(req,res){
    const nic =req.params.nic;
    models.Invoice.findAll({where:{nic:nic}}).then(result =>{
        console.log(result);
        res.status(200).send(result);
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong"
        })
    });
 
 }

    module.exports ={
        invoice:invoice
    }
