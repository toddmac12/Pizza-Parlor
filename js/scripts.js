//Business Logic

function PizzaParlor(topping, topping1, size) {
  this.topping = topping;
  this.topping1 = topping1
  this.size = size;
  this.cost = 0;
}

PizzaParlor.prototype.orderPizza = function () {
  return "You ordered a "+ this.size + " sized pizza with " + this.topping+ " and " + this.topping1 + "." + " The cost of your order is $"+ this.cost +".";
};

PizzaParlor.prototype.costOfOrder = function () {
  if (this.size === "small") {
    this.cost += 10;
  } else if (this.size === "medium") {
    this.cost += 15;
  } else if (this.size === "large") {
    this.cost += 20;
  }
};

//UI Logic
$(document).ready(function () {
  $('button').click(function () {
    const userTopping = $("input[type=radio][name=topping]:checked").val();
    const userTopping1 = $("input[type=radio][name=topping1]:checked").val();
    const userSize = $("input[type=radio][name=size]:checked").val();
    let newPizzaParlor = new PizzaParlor(userTopping, userTopping1, userSize);
    newPizzaParlor.costOfOrder();
    $("#pizzaOrder").html(newPizzaParlor.orderPizza());
     });
});
