  function calcylator(x, y, arithmetic) {
  var sum = 0;
  if (arithmetic == "*") {
    sum = x * y;
  }
  else if (arithmetic == "-") {
    sum = x - y;
  }
  else if(arithmetic == "+") {
  	sum = x + y;
  }
  else if (arithmetic == "/") {
  	sum = x / y;
  }
  else {
  	console.log("Error");
  }

  return sum;
}