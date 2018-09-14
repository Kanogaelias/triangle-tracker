var firstValue = parseInt(prompt("firstValue"));
var secondValue = parseInt(prompt("secondValue"));
var thirdValue = parseInt(prompt("thirdValue"));

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
