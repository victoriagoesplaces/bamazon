DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products(
  id INTEGER(50) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30),
  department_name  VARCHAR(30),
  price DECIMAL (10.2),
  stock_quantity  INTEGER(100),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent","Camp&Hike", 229.00 , 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hiking Backpack","Camp&Hike", 171.73 , 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camping Chair","Camp&Hike", 51.73 , 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sleeping Bag","Camp&Hike", 118.73 , 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hydro Flask","Camp&Hike", 21.73 , 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammock","Camp&Hike", 24.73 , 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses","Camp&Hike", 55.73 , 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camp Chair","Camp&Hike", 37.73 , 72);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Bed","Camp&Hike", 79.73 , 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cookset","Camp&Hike", 69.73 , 48);

SELECT * FROM products;