DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE bamazon
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (100) NULL,
  department_name VARCHAR
    (100) NULL,
  price DECIMAL
    (10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY
    (item_id)
);

    INSERT INTO bamazon
        (product_name, department_name, price, quantity)
    VALUES
        ("Diamond pacifier", "Baby stuff", 5000, 71),
        ("Tactical baby carrier", "Baby stuff", 3.30, 900),
        ("Bananas", "Food", 15, 60000),
        ("Apples", "Food", .01, 20),
        ("Backpack with a leash", "Baby stuff", 15, 300),
        ("Crunch Tuna Sushi Roll", "Food", 15, 2000),
        ("Baby Yoda action plushie", "Food", 1999, 5),
        ("Chia Pet", "Miscellaneous", .99, 60000),
        ("A Cat", "Animals", 5, 3000),
        ("Stegosaurus", "Animals", 7, 9000)