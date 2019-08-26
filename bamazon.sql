create database bamazon;
use bamazon;

CREATE TABLE products (
  item_id int NOT NULL AUTO_INCREMENT,
  product_name varchar(200) NOT NULL,
  department_name varchar(50) NOT NULL,
  price integer (30) NOT NULL,
  stock_quantity integer(30) NOT NULL,
  PRIMARY KEY (item_id)
);

alter table products modify product_name varchar(200);

 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (3501, "Lenovo Yoga 720", "Electronics", 789.29, 3);
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (3502, "Acer Predator Helios 300", "Electronics", 999.99, 15);
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (3503, "Lenovo Flex 5 Touch 2-in-1", "Electronics", 1499.77, 6);
 
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (4504, "MILAEM Archery Recurve Bow Sight Scope Sight Pin", "Sports & Outdoors", 17.99, 36);
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (4505, "SinoArt ILF Bow Riser Recurve Archery Bows Handle", "Sports & Outdoors", 89.99, 8);
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (4506, "Nika Archery Hunting Recurve Bow Raptor ILF Limbs", "Sports & Outdoors", 239.99, 4);
 
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (7507, "SMETA Counter Depth French Door Refrigerator Bottom Freezer", "Appliances", 1998.00, 8);
  insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (7508, "Thor Kitchen Automatic Ice-maker", "Appliances", 2299.00, 13);
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (7509, "Bosch S800 21 CF 4-Door Counter-Depth French Door", "Appliances", 3522.15, 3);
 insert into products ( item_id, product_name, department_name, price, stock_quantity)
 values (7510, "Electrolux IQ-Touch Built-in 32” All Refrigerator EI32AR80QS & All Freezer EI32AF80QS With ECP8472SS 84 Inch Double Louvered Trim Kit in Stainless Steel", "Appliances", 3699.00, 10);
 
 select * from products;