// Multiply
/*
function multiply(a, b){
    console.log(a * b);
}

multiply(8,4);
*/

//-------------------------------------------
// Calculate

/*
function calculate(param1, param2, param3){
    console.log(param1 * param2 / param3);
}

calculate(2,3,4);
*/

//-----------------------------------------
// Maxing, relaxing, acting all cool
// + Maxing, not relaxing

/*
function highestNumber(a,b){
    if (isNaN(a) || isNaN(b)){
        console.log("Inte ett nummer");
    }
    else{
        if (a > b)
        {
            console.log(a);
        }
            else if(b > a)
        {
            console.log(b);
        }
            else
        {
            console.log("Samma värde");
        }
    }
}

highestNumber(4, 4);
*/

//--------------------------------------
// Refaktorera

/*

function multiply(a, b) {
    return (a * b);
}

var multiplyAnswer = multiply(5, 5);
console.log(multiplyAnswer);


function calculate(param1, param2, param3) {
    return (param1 * param2 / param3);
}

var calculateAnswer = calculate(2, 3, 4);
console.log(calculateAnswer);

function highestNumber(a, b) {
    var r = "";
    
    if (isNaN(a) || isNaN(b)) {
        r = "false";
    }
    else {
        if (a > b) {
            r = a.toString;
        }
            else if(b > a) {
            r = b.toString;
        }
            else {
            r = "Samma värde";
        }
    }
    return r;
}

var highestNumberAnswer = highestNumber(4, 4);
console.log(highestNumberAnswer);

*/

//---------------------------------------------------
// Maju Machine Reborn

/*
function mjauMachine(mjau) {

while (mjau != 0)
    {
        var meow = "";
        
        for (i = 1; i <= mjau; i++)
            {
                meow += "mjau "
            }
        
        console.log(meow);
        
        mjau = prompt("Hur många mjau vill du ha?");
    }

console.log(":(");
}

var mjau = prompt("Hur många maju vill du ha?");
mjauMachine(mjau);
*/
//------------------------------------------
// The Horror
/*
// Original
function the Horror() {
console.log('The horror! The Horror!')
}
*/

/*
// I en variabel
var theHorror = function() {
console.log('The horror! The Horror!')};

theHorror();
*/

/*
// När sidan laddas
(function() {
    console.log('The horror! The Horror!')
})();
*/


/*
// Med argument
var theHorror = function(num) {
console.log(num)
}
theHorror(2);
*/

//---------------------------
// Even and Odd

/*Denna loop ska du nu göra om till en funktion som tar 2 parametrar. * Första parametern ska
vara siffran som loppen ska räkna ner ifrån, alltså hur många värden funktionen ska gå igenom. *
Andra parametern ska vara om funktionen ska skriva ut jämna eller ojämna värden (even or odd)*/

/*
// Original
var num = 10;
while(num >= 0)
{
    if (num % 2 == 0)
        {
            console.log(num);
        }
    num--;
}
*/

/*
function evenOdd (countStart, evenOrOdd) {
    if (evenOrOdd == "even") {
        while (countStart >= 0)
        {
            console.log(countStart);
            countStart--;
        }
    }
    else if (evenOrOdd == "odd") {
        while (countStart >= 1)
        {
            console.log(countStart);
            countStart--;
        }
    }
    else {
        console.log("Felskrivning")
    }
}

evenOdd(10, "even");

*/
//-------------------------------------------
// Calcy

/*
function noobCaclc(a, b) {
    var product = 0;
    for (i = b; b >= 1; b--) {
        product += a;
    }
    console.log(product);
}

noobCaclc(5, 5);
*/

//-------------------------------
// String Checker

/*
function strCount(str) {
    return "Strängen du matade in är " + str.length + " tecken lång";
}

console.log(strCount("abc"));

*/
//--------------------------------
// String Converter

/*
function convertString(str, upperOrLowerCase) {
    if (upperOrLowerCase == "lower") {
        str = str.toLowerCase();
    }
    else if (upperOrLowerCase == "upper") {
        str = str.toUpperCase();
    }
return str;
}

console.log(convertString("Bla", "lower"));
*/

//---------------------------------------
// String extractor

/*There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)*/



function finalLetter(str) {
    var final = str.substr((str.length - 1), 1);
    return final;
}

var str = "Whoopiie";
console.log(finalLetter(str));