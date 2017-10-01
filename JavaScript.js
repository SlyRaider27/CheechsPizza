// Megan Britt
	//Cheech's Pizza
	//09/29/17

var pizzaType = ["Cheese","Veggie","Sausage","Pepperoni","Sly Special"];
var amount = [1,2,3,4,5,6,7,8,9,10];

function pizzaPop(i){
	var type = document.getElementById("pizzaType")
	for (var i = 0; i < pizzaType.length; i++){
		type.innerHTML += "<option value='" + pizzaType[i] + "'>" + pizzaType[i] + "</option>";
	}
}
function numPop(i){
	var num = document.getElementById("pizzaNum")
	for (var i = 0; i < amount.length; i++){
		num.innerHTML += "<option value='" + [i] + "'>" + amount[i] + "</option>";
	}
}

function pizzaPop(i){
	var type = document.getElementById("pizzaType")
	for (var i = 0; i < pizzaType.length; i++){
		type.innerHTML += "<option value='" + pizzaType[i] + "'>" + pizzaType[i] + "</option>";
	}
}

function print(){
	var summary = document.getElementById("summary");
	var subtotal = amount[document.getElementById("pizzaType").selectedIndex] * 13;
	var tax = subtotal * .076;
	var total = tax + subtotal;
	summary.innerHTML = "<h3> Order Summary <br> Name: " + document.getElementById("inputFullName").value + 
	"<br> Phone: " + document.getElementById("inputPhone").value + "<br> Pizza Type: " +	pizzaType[document.getElementById("pizzaType").selectedIndex] +
	"<br>Number of Pizzas: " + amount[document.getElementById("pizzaNum").selectedIndex]+"<br> Subtotal: " + subtotal.toFixed(2) + "<br> Tax: " + tax.toFixed(2) + "<br> Total: " + total.toFixed(2) + "</h3>";
}
window.addEventListener("load", pizzaPop, false);
window.addEventListener("load", numPop, false);
document.getElementById("order").addEventListener("click", print, false);