function triangleTracker() {


// var firstValue = parseInt(document.getElementById('a').value);
// var secondValue = parseInt(document.getElementById('b').value);
// var thirdValue = parseInt(document.getElementById('c').value);
// var outputs = document.getElementById("outputs");

var firstValue = document.getElementById('a').value;
var secondValue = document.getElementById('b').value;
var thirdValue = document.getElementById('c').value;

if(firstValue==secondValue && secondValue==thirdValue && thirdValue==firstValue){
  alert("equilateral triangle");
}
else if(firstValue==secondValue || secondValue==thirdValue || thirdValue==firstValue){
  alert("isosceles");
}
else if(firstValue!==secondValue!==thirdValue){
  alert("scalene");
}
else if(firstValue + secondValue <= thirdValue || firstValue + thirdValue <= secondValue || secondValue + thirdValue <= firstValue) {
  alert("not a triangle");
}
else {
  alert("enter valid values");
}
}
