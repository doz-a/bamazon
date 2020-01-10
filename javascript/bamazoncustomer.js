var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5weetswisher",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query(`SELECT * FROM bamazon`, function (err, res) {
    if (err) throw err;
    console.log(res[0].product_name);
})
connection.end();
// inquirer
// prompt
// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.
