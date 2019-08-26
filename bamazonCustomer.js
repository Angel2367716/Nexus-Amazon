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
      
    });
}