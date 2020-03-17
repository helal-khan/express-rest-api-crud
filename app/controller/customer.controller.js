const db = require('../config/db.config.js');
const Customer = db.customer;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    Customer.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age
    }).then(customer => {
        // Send created customer to client
        res.send(customer);
    });
};

// FETCH all Customers
exports.findAll = (req, res) => {
    Customer.findAll().then(customers => {
        // Send all customers to Client
        res.send(customers);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
    console.log(req.params.customerId);
    const id = req.params.customerId;
    Customer.findAll({
        where: { id: id }
      }).then(customers => {
          if(customers.length==0){
            res.status(404).send("Customer not found with id = " + id);
          }else{
            res.send(customers);
          }
    });
    // Customer.findById(req.params.customerId).then(customer => {
    //     res.send(customer);
    // });
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.customerId;
    Customer.update({ firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age },
        { where: { id: req.params.customerId } }
    ).then(() => {
        res.status(200).send("updated successfully a customer with id = " + id);
    });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
    const id = req.params.customerId;
    Customer.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
};