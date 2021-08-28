//Business Logic

function PizzaParlor(topping, topping1, size) {
  this.topping = topping;
  this.topping1 = topping1
  this.size = size;
  this.cost = 0;
}

PizzaParlor.prototype.orderPizza = function () {
  return this.topping + this.topping1 + this.size;
};

PizzaParlor.prototype.costOfOrder = function () {
  if (this.size === "small") {
    this.cost += 10;
  } else if (this.size === "medium") {
    this.cost += 15;
  } else if (this.size ==="large"){
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
    newPizzaParlor.orderPizza();
    newPizzaParlor.costOfOrder();
   $("#pizzaOrder").html(newPizzaParlor.orderPizza());
    $("#pizzaCost").html(newPizzaParlor.cost);
  });
});
