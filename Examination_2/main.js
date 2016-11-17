/*
Själva sidan behöver innehålla:

En ruta med text som innehåller själva maträtten som ska visas
En knapp eller något element som går att klicka på för att generera en ny maträtt
En checkbox eller något element som man kryssar i för att få sidan att enbart visa vegetariska alternativ.
*/

/*
Din js-fil behöver innehålla:

En array eller flera olika arrayer med olika maträtter. Det kan ju vara svårt att komma på en lång array med olika maträtter så ni kan i klassen crowdsourcea den om ni vill, d.v.s. sätta ihop en lista tillsammans.
En funktion eller flera funktioner som hämtar en slumpad maträtt från arrayen
Funktionen ska även kunna kolla om funktionen ska returnera en rätt som är vego eller inte vego.
En funktion som lägger till maträtten på hemsidan vid varje klick.
*/


var menu = [
	{name: "Palak Paneer", veg: true, url: "http://www.manjulaskitchen.com/palak-paneer-2016/"},
	{name: "Pannkakor/Plättar"}, veg: true, url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"},
	{name: "Köttbullar med potatismos, gräddsås och stekt löl", veg=false, url: "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"},
	{name: "Baconinlindad kycklingfilé", veg: false, url: "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"},
	{name: "Lasagne och köttfärssås", veg: false, url: "http://www.koket.se/lasagne-med-kottfarssas"},
	{name: "Majsplättar med avokadoröra", veg: true, url:"https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"},
	{name: "Grönkålssoppa med chorizo", veg: false, url: "http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WC143ubhDIV"},
	{name: "Pastagratäng med rökt lax och spenat", veg: false, url: "http://www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"},
	{name: "Morotsbiffar", veg: true, url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"},
	{name: "Vegetarisk pastagratäng", veg: true, url: "https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"}

];

var counter = 0;

function new(counter) {
	
	var vego = document.getElementById('vego');

	var food = menu[counter];
	/*
	i = 1;
	while (vego.checked == true && food.veg == false) {
		food = menu[counter+i];
		i++;
	}
	counter += i;
	if (counter > menu.length) {
		counter = 0;
	}
	*/

	document.getElementById('result').innerHTML = food.name;
}

document.getElementById("myBtn").addEventListener("click", new);
