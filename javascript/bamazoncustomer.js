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
            console.log(`|| ID: ${res[i].item_id} || Item Name: ${res[i].product_name} || Price: $${res[i].price} || Quantity: ${res[i].quantity} || Department: ${res[i].department_name}`);
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
            console.log(`${answer.getId}`);
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

                    // Subtracts units bought from the quantity on mySQL
                    connection.query(`UPDATE bamazon SET quantity = quantity - ${answer.unitAmount} WHERE item_id = ${id}`);

                    // Displays information on item bought 
                    console.log(`${answer.unitAmount} of ${res[0].product_name} bought! 
Total price was $${answer.unitAmount * res[0].price} 
There are ${res[0].quantity - answer.unitAmount} of ${res[0].product_name} left.
Thank you for your business (/)<(0.0)>(/)`);
                    connection.end();
                }
                else {
                    // Displays information on the item that cant be bought 
                    console.log(`The purchase was unsuccessful, there is not enough in stock, the maximum quantity of ${res[0].product_name} you can buy is ${res[0].quantity}`);
                    connection.end();
                }
            })
        })
}
// Initializes product display on node start 
populateProducts();