// Komma åt värden i en Array
/*
var yourArray = [23, 45, 54, 12, 77];
console.log(yourArray[0]);
console.log(yourArray[4]);
// Index 0 & 5.

//------------------------------------------
// Ändra ett värde i en array
yourArray[5] = 1;
*/

/*
// Hur jag gjorde först
for (i = 0; i <= yourArray.length-1; i++) {
	console.log(i + ", ");
}
*/
/*

// Skriv ut hela arrayen inom []-tecken med , mellan värdena
console.log(yourArray);

*/

//----------------------------------
// Loopa genom en array
// Kom ihåg att console.log alltid börjar på ny rad
/*
var bestArray = [1, 2, 3, 4, 5];

for (i = 0; i <= bestArray.length-1; i++) {
	console.log(bestArray[i]);
}
*/

//------------------------------------
// Loopa och multiplicera
/*
var bestArray = [1, 2, 3, 4, 5];
var sum = 1;

for (i = 0; i < bestArray.length; i++) {
	sum *= bestArray[i];
}

console.log(sum);
*/

//-------------------------------------------
// Filtrera array efter längd på innehållet
/*
var okArray = ["fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for (i = 0; i <= okArray.length-1; i++) {
	if (okArray[i].length <= 5) {
		console.log(okArray[i]);
	}
}
*/

//-----------------------------------------
// Filtrera array beroende på innehåll


/*
var okArray = ["fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for (i = 0; i <= okArray.length-1; i++) {
	if (okArray[i].toLowerCase() == "fine") {
		console.log(okArray[i]);
	}
}
*/
//-----------------------------------------
// Filtrera array baserat på sträng eller nummer
/*
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];
var sum = 0;

for (i = 0; i < worstArrayYet.length; i++) {
	if (typeof worstArrayYet[i] === "string") {
		console.log(worstArrayYet[i]);
	}
	else if (typeof worstArrayYet[i] === "number") {
		sum += worstArrayYet[i];
	}
}
console.log(sum);
*/

// Test. Bevis att NULL ÄR ETT NUMMER!
/*
var test = null;
if (isNaN(test) == false) {
	console.log(test);
}
*/