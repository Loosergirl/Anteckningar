// Räknare för antalet saker på listan:
var counter = 0;
var idCounter = "";

function add() {
    // Räknare för antalet saker på listan:
    counter++;
    idCounter += "i";

	// Hämta värdet:
    var x = document.getElementById("listicle").value;

    // Skapa en ny div med en bullet point och knappar i sig:
    var newDiv = document.createElement('div');
    var newUl = document.createElement('ul');
    var newLi = document.createElement('li');
    var newNode = document.createTextNode(x);
    var moveButton = document.createElement('button');
	var removeButton = document.createElement('button');
	moveButton.innerHTML = "Klar";
	removeButton.innerHTML = "Ta bort";

    // Identifiering
    moveButton.id = 'moveButton';
    removeButton.id = 'removeButton';
    newDiv.id = idCounter;
    newDiv.class = 'bulletBox';

    // Sätt ihop allting:
    var todo = document.getElementById("todo");
    todo.appendChild(newDiv);
    newDiv.appendChild(newUl);
    newDiv.appendChild(moveButton);
    newDiv.appendChild(removeButton);
    newUl.appendChild(newLi);
    newLi.appendChild(newNode);

	moveButton.addEventListener("click", move());
	removeButton.addEventListener("click", remove());

    // Spara:
    function save () {
        return newDiv.id;
    }
}

function move() {
	// Ta loss
    var divArray = document.getElementsByClassName('bulletBox');





    var parent = div.parentElement;
    parent.removeChild(div);

    // Sätt fast
    var done = document.getElementById("done");
    done.appendChild(div);
    
}

function remove() {
    console.log(idCounter);

/*
    // Ta loss
    var parent = div.parentElement;
    parent.removeChild(div);
    */
}
