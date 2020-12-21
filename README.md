# javascript-code-example
Create a function that simulates a vending machine.


Given an amount of money (in cents to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
The coins used for the change are the following: [500, 200, 100, 50, 20, 10]
The return value is an object with 2 properties:
  - product: the product name that the user selected.
  - change: an array of coins (can be empty, must be sorted in descending order).

Available products:
Number,Price,Name
1,100,Orange juice
2,200,Soda
3,150,Chocolate snack
4,250,Cookies
5,180,Gummy bears
6,500,Condoms
7,120,Crackers
8,220,Potato chips
9,80, Small snack

Example: vendingMachine(products, 200, 7) ➞ { product: 'Crackers', change: [ 50, 20, 10 ] }
