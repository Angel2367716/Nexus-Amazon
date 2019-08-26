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
    createTable();
});

const createTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {

            console.log(
                "Item: " + res[i].item_id + " || " +
                "Product: " + res[i].product_name + " || " +
                "Department: " + res[i].department_name + " || " +
                "Price: $" + res[i].price + " || " +
                "Stock: " + res[i].stock_quantity + "\n");
        }
        customerPromt(res);
    });
}

const customerPromt = function (res) {
    inquirer.prompt([{
        name: 'choice',
        type: 'input',
        message: "What would you like to buy?"
    }]).then(function (answer) {
        const correct = false;
        for (let i = 0; i < res.length; i++) {
            if (res[i].product_name == answer.choice) {
                correct = true;
                const product = answer.choice;
                const id = i;
                inquirer.prompt({
                    name: "quant",
                    type: "input",
                    messgae: "How many items would you like to buy?",
                    validate: function(value){
                        if(isNaN(value) == false){
                            return true;
                        } else { return false;}
                    }
                }).then (function(answer){
                    if ((res[id].stock_quantity-answer.quant)>0){
                        connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity-answer.quant)+"' WHERE product_name='" + product_name + "'", function(err, res2){
                            console.log("This Product has been bought, we hope you enjoy it!");
                            createTable();
                        })
                    }else {
                        console.log("That's not a valid option!");
                        customerPromt(res);
                    }
                })
            }
        }
    })
}