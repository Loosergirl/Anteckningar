var myDiv = document.createElement('div');	// Skapa en div. Det måste stå just 'div'.
var myP = document.createElement('p');		// Ny paragraf.
var myNode = document.createTextNode("Satan va kul JavaScript är!");
myP.appendChild(myNode);			// Lägg till node som child till p.
myDiv.appendChild(myP);
document.body.appendChild(myDiv);	// Måste skriva document.body, inte body

myP.id = 'text';					// Blir inte blått i Sublime men funkar.

document.getElementById('text').innerHTML = "Satan vad tråkigt JavaScript är";	
// Byter det mellan taggarna till detta

document.getElementById('text').style = 'color: red;';
// Skriv som i CSS! Semikolon är nödvändigt.

//Extrauppgift
var myUl = document.createElement('ul');		// Skapa lista
document.body.appendChild(myUl);				// Lägg in listan

for (i = 1; i <= 3; i++) {
	var myLi = document.createElement('li');	// Skapa listicle
	var myNr = document.createTextNode(i);		// SKapa textnod. 
	myLi.appendChild(myNr);						// Lägg in textnoden i listicle:n.
	myUl.appendChild(myLi);						// Lägg in listicle:n i listan.
}

/*Textnoder är text.*/