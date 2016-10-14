// Create an animal
/*
// Konstruktor
function Animal(name, species) {
	this.name = name;
	this.species = species;
}

// Funktion bunden till Animals prototyp:
var getAnimal = function() {
	return "This " + this.species + " is named " + this.name + "."
}

Animal.prototype.getAnimal = getAnimal;

// Skapa ett nytt Animal:
var cat = new Animal("Bobby", "bobcat");

// Kalla på getAnimal (och console.logga):
console.log(cat.getAnimal());

// Se vilken prototyp djuret har:
console.log(Object.getPrototypeOf(cat));
*/

/*Detta ger en lång utskrift
med information om objektet. */
//------------------------------------------
// Create animals

// Konstruktor, d.v.s. en prototyp
function Animal(name, species) {
	this.name = name;
	this.species = species;
}

// Funktion bunden till Animals prototyp:
var getAnimal = function() {
	return "This " + this.species + " is named " + this.name + ".";
}

Animal.prototype.getAnimal = getAnimal;

// En ny prototyp. 
// Genom call kan Animal ärvas
function Cat(name) {
	Animal.call(this, name, "Cat");
}
Cat.prototype = new Animal();

// Skapa en ny Cat:
var cat = new Cat('Kitty');

// Kalla på getAnimal (och console.logga):
console.log(cat.getAnimal());

