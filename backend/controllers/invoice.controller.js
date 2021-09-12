const models = require('../models');

var con = require('../config/connection');

function invoice(req,res){
    const nic =req.params.nic;
    console.log(nic);

    var sql = "SELECT orders.id, invoices.invoice_id, invoices.createdAt,invoices.amount FROM invoices, orders WHERE orders.id=invoices.order_id";

    con.query(sql, function (err, result) {
        if (err){
            console.error(err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
    }

    module.exports ={
        invoice:invoice
    }
