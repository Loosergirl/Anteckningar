var CountryDatabase = {
	countries: [
		{
			name: "United Kingdom",
			continent: "Europe",
			population: 65270121,
			pFemale: 0.508
		},
		{
			name: "Republic of Ireland",
			continent: "Europe",
			population: 4708209,
			pFemale: 0.499
},
		{
			name: "Australia",
			continent: "Oceania",
			population: 24482205,
			pFemale: 0.502
},
		{
			name: "Taiwan",
			continent: "Asia",
			population: 23522296,
			pFemale: 0.501
},
		{
			name: "Uruguay",
			continent: "South America",
			population: 3446772,
			pFemale: 0.517
},
		{
			name: "Morocco",
			continent: "Africa",
			population: 35010005,
			pFemale: 0.510
},
		{
			name: "Nigeria",
			continent: "Africa",
			population: 188688090,
			pFemale: 0.494
},
		{
			name: "Zimbabwe",
			continent: "Africa",
			population: 16051510,
			pFemale: 0.507
},
		{
			name: "China",
			continent: "Asia",
			population: 1381321335,
			pFemale: 0.488
},
		{
			name: "Mexico",
			continent: "North America",
			population: 129386794,
			pFemale: 0.507
},
		{
			name: "Canada",
			continent: "North America",
			population: 36446796,
			pFemale: 0.504
},
		{
			name: "Czech Republic",
			continent: "Europe",
			population: 10556351,
			pFemale: 0.509
},
		{
			name: "Iceland",
			continent: "Europe",
			population: 332631,
			pFemale: 0.496
}
],
	printCountries: () => {
		var printList = document.getElementById('print-here');

		for (var i = 0; i < CountryDatabase.countries.length; i++) {
			var name = document.createElement('li');
			var innerName = document.createTextNode(CountryDatabase.countries[i].name);
			name.appendChild(innerName);
			printList.appendChild(name);
		};

		console.log(this);
	},
	summarizePopulation: function () {
		var sum = CountryDatabase.countries.reduce(function (prevVal, elem) {
			return prevVal + elem.population;
		}, 0);

		document.getElementById("total-population").innerHTML = sum;
		console.log(this);
	},
	summarizeEUPopulation: function () {
		var sum = 0;

		for (var i = 0; i < CountryDatabase.countries.length; i++) {
			if (CountryDatabase.countries[i].continent == "Europe") {
				sum = sum + CountryDatabase.countries[i].population;
			}
		}

		document.getElementById("eu-population").innerHTML = sum;
		console.log(this);
	},

	WorldsSmallestPopulation: function () {
		var smallestPopulation = CountryDatabase.countries[0].population;
		var countryName = "hej";

		for (var i = 0; i < CountryDatabase.countries.length; i++) {
			if (CountryDatabase.countries[i].population <= smallestPopulation) {
				smallestPopulation = CountryDatabase.countries[i].population;
				countryName = CountryDatabase.countries[i].name;
			}
		}

		document.getElementById("worlds-smallest-population").innerHTML = countryName + ": " + smallestPopulation;
		console.log(this);

	},
	AfricanMeanPopulation: function () {
		var numberOfCountries = 0;
		var sum = 0;

		for (i = 0; i < CountryDatabase.countries.length; i++) {
			if (CountryDatabase.countries[i].continent == "Africa") {
				numberOfCountries++;
				sum = sum + CountryDatabase.countries[i].population;
			}
		}

		document.getElementById("african-mean-population").innerHTML = "Africa's mean population: " + sum / numberOfCountries;
		console.log(this);
	},
	FindLargeCountries: function () {
		var largeCountries = ""

		for (i = 0; i < CountryDatabase.countries.length; i++) {
			if (CountryDatabase.countries[i].population >= 50000000) {
				largeCountries = largeCountries + "* " + CountryDatabase.countries[i].name + ": " + CountryDatabase.countries[i].population;
			}
		}

		document.getElementById("large-countries").innerHTML = largeCountries;
		console.log(this);
	},
	EightFifteen: function () {
		var mediumCountries = ""

		for (i = 0; i < CountryDatabase.countries.length; i++) {
			if (CountryDatabase.countries[i].population >= 8000000 && CountryDatabase.countries[i].population <= 15000000) {
				mediumCountries = mediumCountries + "* " + CountryDatabase.countries[i].name + ": " + CountryDatabase.countries[i].population;
			}
		}

		document.getElementById("eight-fifteen").innerHTML = mediumCountries;
		console.log(this);
	}
};


document.getElementById('print-btn').addEventListener('click', CountryDatabase.printCountries);

document.getElementById("total-population-btn").addEventListener("click", CountryDatabase.summarizePopulation);

document.getElementById("eu-population-btn").addEventListener("click", CountryDatabase.summarizeEUPopulation);

document.getElementById("worlds-smallest-population-btn").addEventListener("click", CountryDatabase.WorldsSmallestPopulation);

document.getElementById("african-mean-population-btn").addEventListener("click", CountryDatabase.AfricanMeanPopulation);

document.getElementById("find-large-countries-btn").addEventListener("click", CountryDatabase.FindLargeCountries);

document.getElementById("eight-fifteen-btn").addEventListener("click", CountryDatabase.EightFifteen);




//--------------------------------------------------
//Konstruktor
function Country(name, continent, population, pFemale) {
	this.name = name;
	this.continent = continent;
	this.population = population;
	this.pFemale = pFemale;
}

//Prototyp-funktioner
Country.prototype.size = function () {
	console.log(this.name + " har " + this.population + " invånare.");
};

Country.prototype.femalePopulation = function () {
	console.log(this.name + " har " + this.pFemale * this.population + " kvinnliga invånare.");
};

/*Kalla sedan på Country-funktionen och skapa två Country-objekt som du sedan pushar in i din array i din CountryDatabase. Du kan antingen bara pusha in objektet i arrayen eller skapa en funktion i ConuntryDatabase som pushar in ett objekt.*/

var Sweden = new Country("Sweden", "Europe", 9000000, 0.5);
var Norway = new Country("Norway", "Europe", 5252166, 0.5);

CountryDatabase.countries.push(Sweden);
CountryDatabase.countries.push(Norway);

/*Skapa en ny City-constructor. City-constructorn ska ha samma egenskaper som Country förutom att den ska ha en ny egenskap: country som ska landet staden ligger i och name ska nu istället vara namnet på staden. Variablen pFemale måste inte vara med men du kan gärna ha med den om du vill.*/

function City(name, country, continent, population) {
	this.name = name;
	this.country = country;
	this.continent = continent;
	this.population = population;
}

/*
Skapa en City-constructor fast använd den här gången call för att kalla på Country-functionen för att återanvända dess parametrar. Kom ihåg att City nu har en ny egenskap: country som måste lagras och som inte finns i Country-funktionen.
*/
function City(name, country, continent, population) {
	Country.call(this, name, continent, population);
	this.country = country;
}

/*
Återskapa ovanstående funktionalitet med Object.create. För att skapa en prototyp åt ett objekt så måste du kalla på Object.create med ett objekt som innehar dina prototyp-funktioner.
*/

var Country = {
	size: function () {
		console.log(this.name + " har " + this.population + " invånare.");
	},

	femalePopulation: function () {
		console.log(this.name + " har " + this.pFemale * this.population + " kvinnliga invånare.");
	}
}

var City = Object.create(Country);

var Stockholm = Object.create(City, {
	name: {
		value: 'Stockholm'
	},
	country: {
		value: 'Sweden'
	},
	continent: {
		value: 'Europe'
	},
	population: {
		value: 5000000
	}
});


Stockholm.size();


/*Object.create() är bra för att skapa objekt utan att använda konstruktorer.
Tyvärr finns inte Object.create() i en del gamla browsers.*/