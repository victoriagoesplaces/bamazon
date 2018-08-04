var mysql      = require('mysql');
var inquirer   = require("inquirer");
var Table      = require('cli-table');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  8889,
  user     : 'root',
  password : 'root',
  database : "bamazon"
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
   showTable();
  });


  function showTable() {
    var table = new Table({
        head: ['item_id', 'product_name', 'department_name','price', 'stock_quantity'], 
        colWidths: [10, 30, 30, 20, 10]
    });
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
     
    });
  } 
  
  
  
  
//   connection.end();