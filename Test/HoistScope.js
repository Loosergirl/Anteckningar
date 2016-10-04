// Felsök koden

// Original. Gör inte så här.

/*
var name = prompt('Skriv ditt namn');
greeting(name);

var greeting = function(name){
    console.log("Hello there" + name);
};

*/

/*
var name = prompt('Skriv ditt namn');
greeting(name);

function greeting(name){
    console.log("Hello there " + name);
};
*/

/*
// Anonym funktion:
var saveFunction = function() {
	// Do stuff
}

*/
//---------------------------------------
// Scoping:
/*Det är bra om variabler inuti funktioner
inte heter samma sak som sina globala motsvarighter.*/
//----------------------------
// Hoisting

/*
var hoisterFunction = function() {
  var a = 1;
  alert(a + " " + b + " " + c);
  var b = 2;
  var c = 3;
};

hoisterFunction();

*/

// Svar: Variablerna finns redan. 
// Däremot finns inte deras tilldelade värden.

/* Rätt svar: Alerten skriver 1 undefined undefined.*/

//----------------------------------------------------------
// Hoisting 2
// Vad kommer console-loggas?

/*

function getMysteryNumber(){
  function choosenMystery() {
    return 12;
  }

  return choosenMystery;

  function choosenMystery() {
    return 7;
  }
}

var answer = getMysteryNumber();
console.log(answer());

*/

/* Först skapas en funktion i funktionen. Den returnerar 12.
Sedan returnerar den yttre funktionen den inre.
Varför skapas den inre funktionen? Den yttre hoppar iväg när return kommer!
Det som loggas ut är 12. */
// Fel!

/*Rätt svar: Funktionerna hoistas upp. Därför returneras 7.*/
//----------------------------------------------------------------------------
// Wow, more hoisting
// Vad kommer loggas?

/*

function oddFunction () {

  function secret(){
    var unused3;
  }

  var result;

  function secret(){
    var unused1;
  }

  result = secret;

  function secret(){
    var unused2;
  }

  return result;
}
console.log(oddFunction());

*/

/*1:a inre funktionen gör inget.
2:a inre funktionen gör inget.
3:e inre funktionen gör inget.
Alla inre funktioner heter samma sak.
Dante tror att det är ok att skriva bara secret som en funktion och att man inte behöver skriva secret()
Dante tror att undefined skrivs ut.*/

/*Rätt svar: HELA funktionen skrivs ut efter hoisting:

  function secret(){
    var unused2;
  }

"I det här fallet returnerar vi en funktion. Dock så använder vi inte den funktionen eller lagrar den på något sätt. 
När vi då console.loggar oddFunction kommer konsollen att skriva ut själva funktionen 
och inte vad funktionen returnerar."

*/

//-----------------------------------
// Hey Brother

/*
function heyBrother(){
	console.log("Hej hej på dig min bror");
}

setInterval(heyBrother, 1000);

*/

/* Räknaren till vänster betyder att det skrivs ut flera gånger.*/

//----------------------------
// heyBrother delay


/*
function heyBrother(){
	console.log("Hej hej på dig min bror");
}


setTimeout(heyBrother, 3000);

*/

// alternativ tolkning:
/*
setTimeout(setInterval(heyBrother, 1000), 3000);
*/

//-----------------------------------------------
// Anonymous Brother

/*
var anonymousBrother = function() {
	console.log("Hej hej på dig min anonym");
};

setInterval(anonymousBrother, 3000);

*/

//---------------------------------------------------
// Refactor this Brother

/*

function heyBrother(){
	console.log("Hej hej på dig min bror");
}

function myFunction(funct, num) {
	return setInterval(funct, num);
}

myFunction(heyBrother, 3000);

*/
//-------------------------------------------
// Callback
/*

//Sista parametern är en funktion
var impressiveMath = function(x, y, callback){
  var number = x + y;
  //Kallar på vår funktion som vi skickade med som parameter.
  //Argumentet som vi senare skickar med är vår consoleLogger-funktion
  callback(number);
}

//Funktionen som ska köras som callback, tar ett argument
var consoleLogger = function(number){
  console.log("Gotta callback this number: " + number);
}
//Kalla på båda funktionerna, observera argumenten
impressiveMath(5,5, consoleLogger);

*/

/*Här heter det callback. Det är egentligen consoleLogger som matas in.
Eftersom det är en parameter behöver det inte heta samma sak.*/

//------------------------------

/*
var multiply = function(x, y, callback) {
	var answer = x * y;
	callback(answer);
};

var divideAnswer = function(answer) {
	console.log(answer / 2);
};


multiply(2, 4, divideAnswer);

*/

//------------------------------------------------------
//Optional Callback

var multiply = function(x, y, callback) {
	var answer = x * y;
	if(callback) {
		callback(answer);
	}
	else {
		return "You used to call me on my callback";
	}
};

var divideAnswer = function(answer) {
	console.log(answer / 2);
};


multiply(3, 4, divideAnswer);




// Tips till lösning:
/*
//Kolla om en callback finns
if(callback){
  callback();
}

//Kolla om typen av vår callback är en funktion med typeof. typof kan användas på alla sorters variabler
if (typeof callBack == 'function')
*/