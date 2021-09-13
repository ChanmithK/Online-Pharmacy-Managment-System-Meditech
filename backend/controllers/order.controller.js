var con = require('../config/connection');
const models = require('../models');

function index(req,res){
    const nic =req.params.nic;
    console.log(nic);

    var sql = "SELECT orders.id, orders.createdAt,invoices.amount, orders.ph_status FROM invoices, orders WHERE orders.id=invoices.order_id and orders.nic="+nic;

    con.query(sql, function (err, result) {
        if (err){
            console.error(err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
    }

    function destroy(req,res){
		const id =req.params.id;
		models.Order.destroy({where: {id:id}}).then(result =>
			res.status(200).json({
				message: "Order delete successfully",
			 })
		).catch(error =>{
			res.status(500).json({
				message: "Order Delete unsucessfully",
				error: error
			 });
		})
	
	}

    function order(req, res) {
        const order = {
            nic: req.body.nic,
            description: req.body.description,
        };
        models.Order.create(order)
            .then(result => {
                res.status(201).json({
                    message: "User created successfully",
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: "something went wrong",
                });
            });
    }


    // function update(req,res){
	// 	const id =req.params.id;
    //     var sql= "UPDATE `orders` SET `description` ="+req.body.description+" WHERE `id` ="+id;

    //     con.query(sql, function (err, result) {
    //         if (err){
    //             console.error(err);
    //         } else {
    //             console.log(result);
    //             res.status(200).send(result);
    //         }
    //     });
    //     }



    
    module.exports ={
        index:index,
        destroy:destroy,
        order:order
        // update:update
    }
