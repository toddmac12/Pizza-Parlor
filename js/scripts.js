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
$(document).ready(function() {
    $('button').click(function() {
        var value = $("input[type=radio][name=topping]:checked").val();
        if (value) {
            alert(value);
        }
        else {
            alert('Nothing is selected');
        }
    })
});