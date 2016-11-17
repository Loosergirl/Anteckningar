/*
Lägga till en syssla i listan ska bestå av:
Ett element där användaren kan skriva in text t.ex. ”Lära mig JavaScript”.
En knapp med lämplig text som trycks på för att lägga till texten i rutan till listan
*/
// Klart om det fungerar.

/*
”Att göra”-listan i sig ska bestå av:
* Flera sysslor (om användaren har lagt till en syssla, annars ska listan vara tom).
* Förutom att varje syssla innehåller "Att göra-texten" ska det även finnas knappar kopplade till sysslan för att ändra innehållet:
  - Markera sysslan som klar
  - Ta bort sysslan
* När man markerat sysslan som klar ska sysslan läggas i en "Färdiga sysslor"-lista.

*/

function add() {
	// Hämta ut input
	var action = document.getElementById("listicle").value;

	// Skapa nya saker
	var marginDiv = document.createElement('div');
	var bulletPoint = document.createElement('li');
	var bulletItem = document.createTextNode(action);
	// jag tror action ska vara för texten in
	var moveButton = document.createElement('button');
	var removeButton = document.createElement('button');
	moveButton.id = 'moveButton';
	removeButton.id = 'removeButton';

	// Sätt ihop
	marginDiv.appendChild(moveButton);
	marginDiv.appendChild(removeButton);
	marginDiv.appendChild(bulletPoint);
	bulletPoint.appendChild(bulletItem);
	document.getElementById("todo");
	document.todo.appendChild(marginDiv);

	// Få knapparna att fungera
	moveButton.addEventListener("click", done());
	removeButton.addEventListener("click", remove());
}

function done() {

}

function remove() {

}