/*ÖVNING 1 - HÄMTA ELEMENT*/

// Hämta ut det element som har id item:
var myItem = document.getElementById("item");
console.log(myItem);

// Hämta ut alla <p>-element
var arrP = document.getElementsByTagName("p");
console.log(arrP);
// Resulterar i en HTML-Collection.

// Hämta ut det första <p>-elementet:
console.log(arrP[0]);

// Hämta ut det sista <p>-elementet:
console.log(arrP[arrP.length-1]);

// Hämta ut alla element med klassen myList
// Här skrivs alla properties ut! Två element ingår i klassen.
var myList2 = document.getElementsByClassName("myList");
console.log(myList2);

// Hämta ut alla children av klassen myList med hjälp av .children
// Det blir två listor i loggen eftersom den inre också hör till klassen
// Man kan titta ända in i alla element
for (i = 0; i < myList2.length; i++) {
	console.log(myList2[i].children);
}

// Hämta ut alla föräldrar till <p> med hjälp av .parentElement
// Samma article är parent till alla
for (i = 0; i < arrP.length; i++) {
	console.log(arrP[i].parentElement);
}


//------------------------------------------------------------
/*ÖVNING 2 - ÄNDRA ELEMENT*/
//------------------------------------------------------------

//Ändra så att det sista <p>-elementet har en annan färg 
//på texten än de andra <p>-elementen.
arrP[0].style = "color: red;";
//arrP[arrP.length-1].style = "color: blue;";
//alt
arrP[arrP.length-1].style.color = "blue";

//Ändra så att alla <li> har en större font-size.
//Det behövs en loop
var arrLi = document.getElementsByTagName("li");
for (i = 0; i < arrLi.length; i++) {
	//arrLi[i].style = "font-size: 150%;";
	//alt
	arrLi[i].style.fontSize = "100px";
}

//Ändra rubriken i <h1> till något annat än "En rubrik här".
var rubrik = document.getElementsByTagName("h1");
rubrik[0].innerHTML = "Hej";
// Gör det enkelt för dig och sätt ett id istället?

//Ändra bakgrundsfärgen på .parentElement() till <p>
for (i = 0; i < arrP.length; i++) {
	//arrP[i].parentElement.style = "background-color: green;";
	//alt
	arrP[i].parentElement.style.background = "green";
}


/*Ta bort det första <p>-elementet
 med hjälp av parent.removeChild().*/
 var parent = arrP[1].parentElement;

// arrP[0] === p
 parent.removeChild(arrP[0]);

//----------------------------------------------------------
// ÖVNING 3 - EVENTS
//----------------------------------------------
//Hämtar ut alla list items

var listItems = document.getElementsByTagName("li");

//Loopar igenom alla element av typen li. 
for(var i = 0; i < listItems.length; i++){
    //För varje element, lägg till en klick-eventlistener.
    //Funktionen som ska köras är att logga ut vad som finns
    //inuti list itemet.
    listItems[i].addEventListener("click", function(){
        console.log(this.innerHTML);
        })
}


//Kör koden ovan och klicka på varje <li>-element.

//Console.logga istället ut parent 
//till varje element som klickas på.
/*
var megaList = document.getElementsByTagName("li");

for(var i = 0; i < megaList.length; i++){
    megaList[i].addEventListener("click", function(){
        console.log(this.parentElement);
        })
}
*/


var babyList = document.getElementsByTagName("li");

for(var i = 0; i < babyList.length; i++){
    babyList[i].addEventListener("click", function(){
        console.log(this.children);
        })
}

// Vad är skillnaden mellan det ovanför och nedanför?
// children vs childNodes?
// Svar: children returnerar element, 
// childNodes returnerar även textnoder o.s.v.
/*
for(var i = 0; i < babyList.length; i++){
    babyList[i].addEventListener("click", function(){
        console.log(this.childNodes);
        })
}
*/

// Gör så att klick-funktionen tar bort varje element...
// Jespers lösning, obs. annat arraynamn
for(var i = 0; i < liItems.length; i++) {
	liItems[i].addEventListener("click", function(){
		console.log(this);
		this.parentElement.removeChild(this);
	})
}