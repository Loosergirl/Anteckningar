// Skapa ett objekt
/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

console.log(album);
*/
//--------------------------
// Skriv ut innehållet i ett objekt
/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

console.log(album["albumName"]);
console.log(album.albumName);

*/
//--------------------------
// Skapa en kopia av ett objekt
/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

var dublett = album;

console.log(album, dublett);

*/
//----------------------------------
// Ta bort en egenskap från ett objekt
/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

var dublett = album;

delete dublett.year;

console.log(album, dublett);

// Försvinner från båda p.g.a samma plats i minnet.

*/
//--------------------- --------------
// Ändra ett värde i ett objekt
/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

var dublett = album;

album.albumName = "Idol 2000";

console.log(album, dublett);

// Båda ändras p.g.a. samma plats i minnet

*/
//--------------------------------------
// Loopa genom ett objekt
/* for..in-loopen låter oss enkelt 
loopa igenom properties i ett objekt. */

/*
for (property in object) {
	console.log(property);
}
*/

/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

for(i in album){
    console.log(i);
}
*/

//------------------------------
// Loopa igenom properties
/*
var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

*/
/*
// Hur man gör:
for (i in album) {
	console.log(album[i]);
}
*/

/*
for (i in album) {
	console.log(i, album[i]);
}

*/
//----------------------------
// En funktion som skriver ut objektet



var album = {
	albumName: "Idol",
	artist: "Måns",
	year: 2000
};

var str = "The album ";

function printContent(album) {
	for (i in album) {
		str += album[i];
		if (i == "albumName")
		{
			str += " by ";
		}
		else if (i == "artist")
		{
			str += " was released in ";
		}
		else
		{
			str += ".";
		}
	}
	return str;
}

	console.log(printContent(album));

	