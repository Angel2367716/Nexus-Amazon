# Nexus-Bamazon
This application is an amazon-like storefront that utilizes MySQL. The application allows an user to take in orders from customers and deplete stock from the store's inventory through the use of the command line. 

## Technologies Used:
* [dotenv](https://www.npmjs.com/package/dotenv)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [mysql](https://www.npmjs.com/package/mysql)

## Using Bamazon<h3>
 1. Open the console command and use the node command to run bamazonCustomer.js
  ![](images/bamazon1.png)
  
 2. Afer running the initial commmand a list of available itmes will populate and the application will prompt the user to type in an item id.
  ![](images/bamazon2.png)

 3. Select the item you would like to purchase. On this example, we are using item id 4504 which corresponds to the Milaem Archery Recurve Bow sight. 
  ![](images/bamazon3.png)

 4. Chossing the item id will prompt the user to specify how many items they would like to purchase. We will be choosing 10 items. 
  ![](images/bamazon4.png)

 5. After selecting the amount of items to purchase, the application will restart from step 3, the database will update the amount of available items and the items on the store will display on the command line.
  ![](images/bamazon4.png)
  ![](images/bamazon5.png)
