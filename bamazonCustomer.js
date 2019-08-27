require('dotenv').config();
const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showProducts();
});

const showProducts = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {

            console.log(
                "Item id: " + res[i].item_id + " || " +
                "Product: " + res[i].product_name + " || " +
                // "Department: " + res[i].department_name + " || " +
                "Price: $" + res[i].price + " || " +
                // "Stock: " + res[i].stock_quantity +
                "\n");
        }
        customerPromt(res);
    });
}

const customerPromt = function (res) {
    inquirer.prompt([{
        name: 'productID',
        type: 'input',
        message: "Type in the Id of the product you would like to buy"
    }, {
        name: 'quantity',
        type: 'input',
        message: 'How many products would you like to buy?'
    }]).then(function (res) {

        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            
          });
      });
    };