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
      colWidths: [10, 30, 30, 20, 20]
  });

  products()

  function products() {

    connection.query("SELECT * FROM products", function(err, res) {
   
      for  (var i = 0; i < res.length; i++) {
        var id = res[i].id;
        var product = res[i].product_name;
        var department = res[i].department_name;
        var price = res[i].price;
        var stock = res[i].stock_quantity;


        table.push(
          [id, product, department, price, stock]
          );   
      }

      console.log(table.toString());
        userChoice()
    });
  } 
} 
  
function userChoice() {
  inquirer
    .prompt([
    {
      name: "choice",
      type: "input",
      message: "What product ID would you like?"
    },
    {
      name: "units",
      type: "input",
      message: "How many units of the product would like to buy?"
    }
  ])
  .then(function(answer) {
    connection.query("SELECT * FROM products WHERE id=?", answer.choice, function(err, res) {
      for  (var i = 0; i < res.length; i++) {
        if (answer.choice > res[i].stock_quantity) {
          console.log("Insufficient quantity!");
        }
        else {
          console.log("Order was successfully submitted");
          var newStock = (res[i].stock_quantity - answer.units);
          var idChoice = (answer.choice);
          var totalPrice = (answer.units * res[i].price);

          console.log("Your total order was $" + totalPrice);

          connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: newStock}, {id: idChoice}]);
          moreItems();
        }
      }
    })
  })  
}

function moreItems() {
  inquirer
    .prompt([
    {
      name: "more",
      type: "confirm",
      message: "Would you like another item?",
      default: true
    }
  ])
  .then(function(yesNo) {
    console.log(yesNo.more);

    if (yesNo.more === true){
      showTable();
    }
    else {
      connection.end()
    } 
  });
}


  
