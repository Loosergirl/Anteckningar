var menu = [
	{name: "Palak Paneer", veg: true, url: "http://www.manjulaskitchen.com/palak-paneer-2016/"},
	{name: "Pannkakor/Plättar", veg: true, url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"},
	{name: "Köttbullar med potatismos, gräddsås och stekt lök", veg: false, url: "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"},
	{name: "Baconinlindad kycklingfilé", veg: false, url: "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"},
	{name: "Lasagne och köttfärssås", veg: false, url: "http://www.koket.se/lasagne-med-kottfarssas"},
	{name: "Majsplättar med avokadoröra", veg: true, url:"https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"},
	{name: "Grönkålssoppa med chorizo", veg: false, url: "http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WC143ubhDIV"},
	{name: "Pastagratäng med rökt lax och spenat", veg: false, url: "http://www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"},
	{name: "Morotsbiffar", veg: true, url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"},
	{name: "Vegetarisk pastagratäng", veg: true, url: "https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"}

];

function dish() {
	// Hämta ut värdet från checkboxen:
	var vego = document.getElementById('vego');

	// Slumpmässig maträtt plockas ut:
	var random = Math.floor((Math.random() * menu.length));
	var food = menu[random];

	// Maträtten ändras om den inte var vegetarisk men vegetarisk var ikryssat:
	if (vego.checked == true)
	{
		while (food.veg == false) {
			random = Math.floor((Math.random() * menu.length));
			food = menu[random];
		}
	}
	
	// Skriv ut maten:
	document.getElementById('result').innerHTML = food.name;
	document.getElementById('result').href = food.url;
}