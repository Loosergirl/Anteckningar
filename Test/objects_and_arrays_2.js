// Pop Pop!
/*
var popArray = [5, "hello", 54, 17, 23];

// Ta bort värden:
for (i = 0; i < 5; i++) {
	popArray.pop();
	console.log(popArray);
}
*/
/*0, 1, 2, 3, 4
popArrays längd ändras. Därför fungerar inte popArray.length.*/
//----------------------------------------------
// Push
// Lägg till ett värde:
/*
popArray.push(12);
console.log(popArray);

// Lägg till två värden:
popArray.push(12, 13);
console.log(popArray);
*/

//--------------------------------------------------------
// Shift
/*
var shiftArray = [5, "hello", 54, 17, 23];

shiftArray.shift();
console.log(shiftArray);
shiftArray.shift();
console.log(shiftArray);

*/

//-------------------------------------------------------
// Unshift:
/*
var unshiftArray = [5, "hello", 54, 17, 23];

// Lägg till värden först:
unshiftArray.unshift(1);
console.log(unshiftArray);
unshiftArray.unshift(2);
console.log(unshiftArray);
*/
//----------------------------------------------------
// Splice
/*
var spliceArray = [5, "hello", 54, 17, 23];

spliceArray.splice(3);
console.log(spliceArray);
*/
/*
var spliceArray = [5, "hello", 54, 17, 23];

var spliceArray2 = spliceArray.splice(3);
console.log(spliceArray2);
*/

//-------------------------------------------------------
// Splice 2 - The Return
/*
var spliceArray = [5, "hello", 54, 17, 23];

var spliceArray2 = spliceArray.splice(2, 2);
console.log(spliceArray2);
*/
//------------------------------------------------------
// concat
/* "Metoden .concat() kan sätta ihop två arrayer till en array. 
Vi har stött på ordet concat förut, det är ett vanligt förekommande ord 
som betyder att man sätter ihop två saker." */

/*
var myArray1 = [1,2,3];
var myArray2 = [4,5,6];

var newArray = myArray1.concat(myArray2);

console.log(newArray);
*/
//------------------------------------------------------------
// Sort1
/*
var sortingArray = [ 45, 23, -5, 12];

sortingArray.sort();

console.log(sortingArray);

*/
//---------------------------------------------------
// Sort2
/*
var crazySort = ["string", "hej", "what", "wordsyo"];

crazySort.sort();

console.log(crazySort);
*/
//-----------------------------------------------------
// Reverse
/*
var crazySort = ["string", "hej", "what", "wordsyo"];

crazySort.sort();
crazySort.reverse();

console.log(crazySort);
*/
//-----------------------------------------------------
//------------------------------------------------------
// Lägg till en funktion i ett objekt
/*
var album = {
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    getContent: function(){
        return "The album "  + this.albumName + " by " + this.artist + " was released in " + this.year;
    },
    releaseCalc: function() {
    	return "This album was released " + (2016 - this.year) + " years ago.";
    }
};

console.log(album.releaseCalc());
*/
//-------------------------------------------------------------
// Object constructor

/*
//Vi skickar med 3 parametrar
function album(albumName, artist, year){
    //Lagrar paramterarna till varje nytt enskilt skapat objekt med this.
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
}

//Genom att kalla på album kan vi nu skapa flera olika objekt med hjälp av album
var newAlbum = new album("Album", "artist", 1873);
var newAlbum = new album("Album", "artist", 1873);

console.log(typeof album);				// Function
console.log(typeof newAlbum);			// Object
console.log(typeof newAlbum.artist);	// String

*/
//---------------------------------------------------------------------------

function weapon(type, damage) {
	this.type = type;
	this.damage = damage;
}

var toothpick =  new weapon("polearm", 10);

// ----------------------------------------------------------------------------
// Slay the monster OCH critta monstret

function monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function() {
        console.log(this.name + " hungry! " + this.name + " kill!");
    }
}

var grublak = new monster("Grublak", 500);

/*
grublak.speak();
*/

function slayMonster(weapon, monster) {
	var damage = weapon.damage;
	var health = monster.health;
	var str = "";

	while (health > 0) {
		damage = weapon.damage;
		str = "";
		var randomNumber = Math.random();

		if (randomNumber >= 0.8)
		{
			damage = damage * 2;
			str += "Crit! "
		}

		if (weapon.type === "tenta" && monster.name === "Grublak")
		{
			damage = damage * 2;
		}

		health = health - damage;

		if (health < 0)
		{
			health = 0;
		}

		str += monster.name + " takes  " + damage + " damage. " + health + "hp remaining. ";
		console.log(str);
	}

	console.log("Ouch, me dead.");
}

/*
slayMonster(toothpick, grublak);
*/

//--------------------------------------------------------
// Slay all the monsters
var monsterTown = [
new monster("Mutant Chicken", 100),
new monster("Jealous Ex", 1000),
new monster("Potted Plant", 10),
new monster("World Hunger", 5000)
];

for (i = 0; i < monsterTown.length; i++) {
	slayMonster(toothpick, monsterTown[i]);
	console.log(" ");
}
