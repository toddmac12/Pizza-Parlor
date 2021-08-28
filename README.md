# _{Application Name}_
Project
Pizza Parlor
#### _{Brief description of application}_
A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
#### By _**{List of contributors}**_

## Technologies Used

HTML
CSS
Bootstrap
VSCode

### Description

Project
Pizza Parlor
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

Objectives
Your code will be reviewed for the following objectives:

Constructors and prototypes are used successfully.
Application works as expected.
Plain English specs are included in your README.
Project is in a polished, portfolio-quality state.
The prompt’s required functionality and baseline project requirements are in place by the deadline.
What is a polished, portfolio-quality state?
When a project is both polished and in a portfolio-quality state, this means:

You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure.
You are following the best practices and coding conventions we teach.
What are the baseline project requirements?
All independent coding projects at Epicodus have these baseline requirements:

A complete and informative README
The project's commit history demonstrates that the project’s required work schedule and hours have been met:
8 hours completed on Friday is required for full-time students
4 hours completed over the weekend is required for part-time students
Completion of the project based on the prompt and objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.
Further Exploration
If you finish meeting the objectives for this project, consider adding additional features, such as:

Style your site with CSS and images.
Allow users to order more than one pizza with different toppings.
Display the list of pizzas ordered as links that can be clicked for details.
Offer a delivery option that then requires address information.

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
$ git clone https://github.com
$ code .
Use a program such as VSCode to view and run the program.
Alternatively, see links below to open in your browser using the Reach this webpage through the browser of your choice using the Active gh-pages link

Recommend using the most up to date version of your browser.

Links to GitHub repositories can be run in VSCode or a similar application.

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

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