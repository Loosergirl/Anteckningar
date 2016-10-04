/*
function sayMyName() {
	var name = 'My Name';

	function logMyName(){
		console.log("Hello my name is " + name);
	}

	return logMyName;
}

var myName = sayMyName();
myName();

*/

/*Variabeln blir hela raden med console.log*/

/*Med console.log skrivs ut:
	function logMyName(){
		console.log("Hello my name is " + name);
	}
*/
//-----------------------------------------------------
// Följa en closure

/*

var hidden = mystery();
var result = hidden(3);
console.log(result);

function mystery(){
  var secret = 2;
  function mystery2 ( multiplier ) { 
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

// Svar 18?

*/

//-------------------------------------------
// Skapa en hierarki

/*
function createPerson(ts) {
	var nameMe = function(name){
		console.log("Hej jag heter " + name + " och är " + ts + " på Nackademin");
	}
	return nameMe;
}

var teacher = createPerson('lärare');
var student = createPerson('student');

student('Steffe');
teacher('Jesper');

*/

var multi = *;
var x = 2;
var y = 3;
var sum = x + multi + y;
console.log(sum);