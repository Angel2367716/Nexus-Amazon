require('dotenv').config();
const mysql = require("mysql");
const inquirer = require("inquirer");
//========================================================================================================================================
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    productsTable();
});
//========================================================================================================================================
const productsTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {

            console.log(
                "Item id: " + res[i].item_id + " || " +
                "Product: " + res[i].product_name + " || " +
                // "Department: " + res[i].department_name + " || " +
                "Price: $" + res[i].price + " || " +
                "quantity: " + res[i].stock_quantity +
                "\n");
        }
        askCustomer(res);
    });
}

//========================================================================================================================================
//========================================================================================================================================


const askCustomer = function (res) {
    inquirer.prompt([{
        name: "itemID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        validate: function (value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "quantity",
        type: "input",
        message: "How many units would you like to buy?",
        validate: function (value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function (answer) {
        // console.log(res[answer.itemID]);
        const result = res.filter(product => product.item_id == answer.itemID);
        console.log(result[0].stock_quantity);
        if((result[0].stock_quantity - answer.quantity)>0){
            connection.query("UPDATE products SET stock_quantity='"+(result[0].stock_quantity - answer.quantity)+"' WHERE product_name='"+result[0].product_name + "'", function (err, res2){
                console.log("Product Bought!");
                productsTable();
            })
        }else {
            console.log("Invalid Selection, please try again");
            askCustomer();
        }
    })
}