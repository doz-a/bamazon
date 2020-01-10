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

function questionTwo(id) {
    inquirer
        .prompt({
            name: "unitAmount",
            message: "How many units of the product would you like to buy?"
        })
        .then(function (answer) {

            connection.query(`SELECT * FROM bamazon WHERE item_id = ?`, [id], function (err, res) {
                if (err) throw err;
                if (res[0].quantity > parseInt(answer.unitAmount)) {
                    console.log(answer.unitAmount + " of item bought!")
                }
                else {
                    console.log(`There's not enough, maximum quantity you can buy is ${res[0].quantity}`);
                }
                console.log(res[0].quantity);
            })
            connection.end();
        })
}

populateProducts();
// connection.query(`SELECT * FROM bamazon`, function (err, res) {
//     if (err) throw err;
//     console.log(res[0].product_name);
// })
// connection.end();
// inquirer
// prompt
// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.
