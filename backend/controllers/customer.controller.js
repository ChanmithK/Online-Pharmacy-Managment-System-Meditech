const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator'); 
const { condition } = require('sequelize');


function signUp(req, res) {
	// check if the nic address is already exist
	models.Customer.findOne({ where: { nic: req.body.nic } })
		.then(result => {
			// if nic already exists
			if (result) {
				res.status(409).json({
					message: "nic already exists",
				});
			}

			// if nic does not exist
			else {
				// generate a salt for hashing
				bcryptjs.genSalt(10, function (err, salt) {
					// hashing the password
					bcryptjs.hash(req.body.password, salt, function (err, hash) {
						const customer = {
							nic: req.body.nic,
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							email: req.body.email,
							phone: req.body.phone,
							street: req.body.street,
							city: req.body.city,
							province: req.body.province,
							pCode: req.body.pCode,
							password: hash,
						};

						const schema = {
							nic: {type:"string",optional:false, max:"20"}
						}

						const v = new Validator();
						const validationResponse = v.validate(customer, schema);
						
						if(validationResponse !== true){
                            return res.status(400).json({
                                message:"Validation faild",
								errors: validationResponse
							});
						}

						models.Customer.create(customer)
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
					});
				});
			}
		})
		.catch(error => {});
}

//login function
function login(req,res){
    models.Customer.findOne({where:{nic:req.body.nic}}).then(customer => {
        if(customer === null){
           res.status(401).json({
               message: "Invalid cerdentials !",
            });  
        }else{
            bcryptjs.compare(req.body.password, customer.password, function(err,result){
               if(result){
                    const token = jwt.sign({
                        nic:customer.nic,
                        customerId: customer.customerId
                    },process.env.JWT_KEY,function(err, token){
                       res.status(200).json({
                           message: "Authentication successfully",
                           token:token
                        }); 
                    });
               }else{
                   res.status(401).json({
                       message: "Invalid cerdentials !",
                    });   
               }
            });
        }
    }).catch(error => {
       res.status(500).json({
           message: "Somethong went wrong !",
        }); 
    }); 
}

function show(req,res){
	const nic =req.params.nic;
	
	models.Customer.findOne({where: {nic:nic}}).then(result =>{
		res.status(200).json(result);
	}).catch(error =>{
		res.status(500).json({
			message:"Something went wrong"
		})
	});
	
	}

	function update(req,res){
		const nic =req.params.nic;
		bcryptjs.genSalt(10, function (err, salt) {
		bcryptjs.hash(req.body.password, salt, function (err, hash) {
		const updatedPost={
			nic: req.body.nic,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			phone: req.body.phone,
			street: req.body.street,
			city: req.body.city,
			province: req.body.province,
			pCode: req.body.pCode,	
		} 
	
		models.Customer.update(updatedPost, {where: {nic:nic}}).then(result =>
			res.status(200).json({
				message: "Customer Update successfully",
				post: updatedPost
			 })
		).catch(error =>{
			res.status(500).json({
				message: "Something went wrong",
				error: error
			 });
			});
		});
		})
	
	}

	function destroy(req,res){
		const nic =req.params.nic;
		models.Customer.destroy({where: {nic:nic}}).then(result =>
			res.status(200).json({
				message: "Customer delete successfully",
			 })
		).catch(error =>{
			res.status(500).json({
				message: "Customer Delete unsucessfully",
				error: error
			 });
		})
	
	}

	// function index(req,res){
	// 	const id =req.params.id;
		
	// 	models.Customer.findAll (id).then(result =>{
	// 		res.status(200).json(result);
	// 	}).catch(error =>{
	// 		res.status(500).json({
	// 			message:"Something went wrong"
	// 		})
	// 	});
	// }
		


module.exports ={
    signUp:signUp,
    login:login,
	show:show,
	update:update,
	destroy:destroy,
	// index:index
}