var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5weetswisher",
    database: "bamazon"
});

// Connection 
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Need to populate the items in the array on start, then inquirer
function populateProducts() {
    connection.query(`SELECT * FROM bamazon`, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(`| Item Name: ${res[i].product_name} | ID: ${res[i].item_id} | Price: ${res[i].price} | Quantity: ${res[i].quantity} |`);
        }
        // Invokes Inquirer 
        startInquirer();
    })
}

// Inquirer starts here 
function startInquirer() {
    inquirer
        .prompt({
            name: "getId",
            message: "What is the ID of the product you would like to buy?"
        })
        .then(function (answer) {
            console.log(answer.getId);
            // Question two 
            questionTwo(answer.getId);
        })
}

// Question two 
function questionTwo(id) {
    inquirer
        .prompt({
            name: "unitAmount",
            message: "How many units of the product would you like to buy?"
        })
        .then(function (answer) {

            // Selecting from mySQL database and successfully buying item 
            connection.query(`SELECT * FROM bamazon WHERE item_id = ?`, [id], function (err, res) {
                if (err) throw err;
                if (res[0].quantity > parseInt(answer.unitAmount)) {
                    console.log(answer.unitAmount + " of item bought!")

                    // test mas 
                    connection.query(`UPDATE bamazon SET quantity = quantity - ${answer.unitAmount} WHERE item_id = ${id}`);

                    connection.end();
                    // Start test 
                }
                else {
                    console.log(`There's not enough, maximum quantity you can buy is ${res[0].quantity}`);
                    connection.end();
                }
                // console.log(res[0].quantity);
            })
        })
}

populateProducts();
// connection.query(`SELECT * FROM bamazon`, function (err, res) {
//     if (err) throw err;
//     console.log(res[0].product_name);
// })
// connection.end();
