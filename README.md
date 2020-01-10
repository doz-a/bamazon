# BAMazon
Creating a storefront where a User can buy items.

1/10/2020
Version 1

# Basic Use
BAMazon is a terminal based online store. A user begins by opening the terminal and using the following command:

### node bamazoncustomer.js

This displays available items in the terminal, including price, quantity, department name, and item ID.

Inquirer is also activated, and the user can enter the item ID of the product they wish to buy.

The next prompt appears, asking for the quanity the user would like.

# App Organization
### bamazoncustomer.js
1. npm packages required at the top
2. mySQL connections at the top
3. populateProducts function queries mySQL database bamazon and displays the products available
4. startInquirer function prompts user to enter the ID of the item they would like to buy
5. questionTwo function asks how many units the user would like to purchase, and when input is received, it checks to make sure there are enough of the product. If there is enough product, then a success message appears and the bought items are subtracted from the database. If there is not enough product, a decline message appears

## Technologies used
1. Javascript
2. NodeJS packages
3. mySQL
4. Gyazo for gif creation

## Developers
1. Miguel Delos Santos


# Usage Gifs:

## node bamazoncustomer.js
Initializing the app, queries mySQL and displays product information, as well as invoking inquirer

![Alt Text](x)

## inputting a buy request that is greater than the quantity
Displays a message that the buy was unsuccessful :(

![Alt Text](x)

## inputting an ID and then quantity
In this case id of 3, and 50 of them, displays amount of bananas bought, total price, amount of bananas left

![Alt Text](x)

![Alt Text](https://gyazo.com/8e90642bc4dec6d84a70ce65c7f15df1.gif)

## Readme break time! Random Doggo Gif:

![Alt Text](https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif)

Thanks for reading!

(//)<(0.0)>(//)

1/10/2020