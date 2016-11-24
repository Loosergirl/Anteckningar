function add() {
	// Hämta värdet:
    var x = document.getElementById("listicle").value;

    // Kontroll av värdet:
    if (x == null || x == "") {
        console.log("Mata in en sträng istället.")
    }
    else {
        // Skapa en ny div med en bullet point och knappar i sig:
        var newDiv = document.createElement('div');
        var newUl = document.createElement('ul');
        var newLi = document.createElement('li');
        var newNode = document.createTextNode(x);
        var moveButton = document.createElement('button');
        var removeButton = document.createElement('button');
        moveButton.innerHTML = "Klar";
        removeButton.innerHTML = "Ta bort";

        // Sätt id:
        newDiv.id = "littleDiv";
        moveButton.id = "moveButton";
        removeButton.id = "removeButton";

        // Sätt ihop allting:
        var todo = document.getElementById("todo");
        todo.appendChild(newDiv);
        newDiv.appendChild(newUl);
        newDiv.appendChild(moveButton);
        newDiv.appendChild(removeButton);
        newUl.appendChild(newLi);
        newLi.appendChild(newNode);

        // Få knapparna att fungera
        moveButton.addEventListener("click", move);
        removeButton.addEventListener("click", remove);
    }
}

function move() {
	// Ta loss
    var div = this.parentElement;
    var todo = div.parentElement;
    todo.removeChild(div);

    // Sätt fast
    var done = document.getElementById("done");
    done.appendChild(div);

    // Gör om knapp
    // (Jag tyckte det var bättre så här än att ta bort den.)
    var arr = div.children;
    var moveButton = arr[1];
    moveButton.innerHTML = "Inte klar";
    moveButton.removeEventListener("click", move);
    moveButton.addEventListener("click", unmove);
}

function remove() {
    // Ta loss
    var div = this.parentElement;
    var parent = div.parentElement;
    parent.removeChild(div);
}

function unmove() {
    // Ta loss
    var div = this.parentElement;
    var done = div.parentElement;
    done.removeChild(div);

    // Sätt fast
    var todo = document.getElementById("todo");
    todo.appendChild(div);

    // Gör om knapp
    var arr = div.children;
    var moveButton = arr[1];
    moveButton.innerHTML = "Klar";
    moveButton.removeEventListener("click", unmove);
    moveButton.addEventListener("click", move);
}