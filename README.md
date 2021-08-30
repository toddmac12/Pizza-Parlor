# _{Application Name}_
Project
Pizza Parlor
#### _{Brief description of application}_
A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
#### By _**{List of contributors}**_
Anthony McRae
## Technologies Used

HTML
CSS
Bootstrap
VSCode
JQuery
Git

### Description

Project
Pizza Parlor
A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.



## Test
1 Test: pizza object constructor with properties for toppings size, cost. 

Code: function PizzaParlor(topping, size, cost){
    this.topping = topping;
    this.size = size;
    this.cost =1;}
const pizzaChesse = new PizzaParlor ("chesse","large","10");

Expected Output: {
  cost: 1,
  size: "large",
  topping: "chesse"
}

2 Test: add prototype fucntion to order pizza toppings and size.

Code: this.topping ="mushroom"
Expected Output: "mushroom"

3 Test: add prototype function to calcaulate cost of pizza order by size.

Code: this.size ="large"

Expected Output:"large" 

4 Test: Test to calculation of cost of pizza

Code: if (this.size === "small") {
    this.cost += 10;

Expected Output: small pizza = 10

5 Test: List items ordered

Code: PizzaParlor.prototype.orderPizza = function () {
  return this.topping + this.topping1 + this.size;

Expected Output: PepperoniMushroomSmall


## Setup/Installation Requirements

To clone and run from GitHub Repo:

In bash at a folder of your choice, type the following:
$ git clone https://github.com https://toddmac12.github.io/Pizza-Parlor/
$ code .
Link to GH Pages to view web page on Git Hub
Use a program such as VSCode to view and run the program.
Alternatively, see links below to open in your browser using the Reach this webpage through the browser of your choice using the Active gh-pages link

Recommend using the most up to date version of your browser.

Links to GitHub repositories can be run in VSCode or a similar application.


## Known Bugs

No known issues.

## License
Copyright (c) 2021 Anthony McRae

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

anthonytoddmcrae@gmail.com