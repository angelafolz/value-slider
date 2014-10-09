var sqfoot;
var initialhousevalue;
var housevalue;
var avgsfvalue = 100; // assuming $100 per square foot
var adjust = 0.025; // assuming each of the factors will increase/decrease initial house value by 2.5%
var conditionslider, renovationslider, factor3slider, factor4slider;
conditionslider = renovationslider = factor3slider = factor4slider = 0;



function initialValue() {
	housevalue = initialhousevalue = sqfoot * avgsfvalue;
}

function adjustValue(val, prevval) {
	housevalue += initialhousevalue * adjust * (val - prevval);
}

function displayValue() {
	document.getElementById("housevalue").style.left = (sqfoot / 20) + "px";
	document.getElementById("housevalue").style.bottom = (housevalue / 2000) + "px";
	document.getElementById("valuenum").innerHTML = "$" + housevalue.toString();
}



document.getElementById("submit").addEventListener("click", function() {
	sqfoot = document.getElementById("sqfoot").value;
	initialValue();
	displayValue();
	document.getElementById("housevalue").style.display = "block";
});

document.getElementById("condition").addEventListener("change", function() {
	adjustValue(this.value, conditionslider);
	conditionslider = this.value;
	displayValue();
});
document.getElementById("renovation").addEventListener("change", function() {
	adjustValue(this.value, renovationslider);
	renovationslider = this.value;
	displayValue();
});
document.getElementById("factor3").addEventListener("change", function() {
	adjustValue(this.value, factor3slider);
	factor3slider = this.value;
	displayValue();
});
document.getElementById("factor4").addEventListener("change", function() {
	adjustValue(this.value, factor4slider);
	factor4slider = this.value;
	displayValue();
});
