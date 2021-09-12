var con = require('../config/connection');

function index(req,res){
    const nic =req.params.nic;
    console.log(nic);

    var sql = "SELECT orders.id, orders.createdAt,invoices.amount, orders.ph_status FROM invoices, orders WHERE orders.id=invoices.order_id";

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
        index:index
    }
