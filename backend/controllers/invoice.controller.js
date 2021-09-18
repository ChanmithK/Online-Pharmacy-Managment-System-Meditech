const models = require('../models');

var con = require('../config/connection');

function invoice(req,res){
    const nic =req.params.nic;
    console.log(nic);

    var sql = "SELECT orders.id, invoices.invoice_id, invoices.createdAt,invoices.amount FROM invoices, orders WHERE orders.ph_status ='processing' AND  orders.id=invoices.order_id and invoices.nic="+nic;

    con.query(sql, function (err, result) {
        if (err){
            console.error(err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
    }

    function View_invoice(req,res){
        const id =req.params.id;
        var sql = "SELECT invoices.order_id, invoices.invoice_id, invoices.createdAt,invoices.amount,invoice_medicines.med_name,invoice_medicines.quantity,invoice_medicines.total  FROM invoices, invoice_medicines WHERE invoice_medicines.invoiceID=invoices.id and invoices.id="+id;
    
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
        invoice:invoice,
        View_invoice:View_invoice
    }
