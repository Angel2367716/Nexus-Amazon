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
    console.log("Connected as id " + connection.threadId);
    productsTable();
});

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


const askCustomer = function () {
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
        if((res[id].stock_quantity - answer.quantity)>0){
            connection.query("UPDATE products SET ? WHERE ?",[{
                stock_quantity:answer.quantity
            },{
                item_id: answer.itemID
            }], function (err, res){
                console.log("Product Bought!");
                productsTable();
            })
        }else {
            console.log("Invalid Selection, please try again");
            askCustomer();
        }
    })
}


// const askCustomer = function () {
//     inquirer.prompt([{
//         name: "itemID",
//         type: "input",
//         message: "What is the ID of the product you would like to buy?",
//         validate: function (value) {
//             if (isNaN(value) == false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }, {
//         name: "quantity",
//         type: "input",
//         message: "How many units would you like to buy?",
//         validate: function (value) {
//             if (isNaN(value) == false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }]).then(function (answer) {
//         if((res[id].stock_quantity - answer.quantity)>0){
//             connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity - answer.quantity)+"' WHERE product_name='"+itemID + "'", function (err, res2){
//                 console.log("Product Bought!");
//                 productsTable();
//             })
//         }else {
//             console.log("Invalid Selection, please try again");
//             askCustomer();
//         }
//     })
// }


// const askCustomer = function () {
//     inquirer.prompt([{
//         name: "itemID",
//         type: "input",
//         message: "What is the ID of the product you would like to buy?",
//         validate: function (value) {
//             if (isNaN(value) == false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }, {
//         name: "quantity",
//         type: "input",
//         message: "How many uinits would you like to buy?",
//         validate: function (value) {
//             if (isNaN(value) == false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }]).then(function(answer){
//         connection.query("SELECT * FROM products", function(err, res){
//             if(err) throw err;
//             let chosenItem;
//             for (let i=0; i<res.length; i++){
//                 if(res[i].item_id == parseFloat(answer.itemID)){
//                     chosenItem = res[i];
//                     console.log(res[i].item_id);
//                     console.log(parseFloat(res.itemID));
//                     console.log("Your product is " + JSON.stringify(chosenItem));
//                     askCustomer();
//                 }
//             }
//         })
//     })
// }