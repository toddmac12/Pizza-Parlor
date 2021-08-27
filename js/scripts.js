//Business Logic

function PizzaParlor(topping, size, cost) {
  this.topping = topping;
  this.topping2 = topping2
  this.size = size;
  this.cost = 0;
}

PizzaParlor.prototype.orderPizza = function (){};
PizzaParlor.prototype.costOfOrder = function (){};

//User Interface
$(document).ready(function (){
$("form#pizzaOrder").submit(function(event){
event.preventDefault();
const userToppingSelection = $("input:radio[name='topping').attr("id");
});