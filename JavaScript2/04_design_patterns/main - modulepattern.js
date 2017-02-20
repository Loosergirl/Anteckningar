var CountryDatabase = (function () {
	/*===Privates===*/
	var countries = [
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
];

	function printCountries() {
		var printList = document.getElementById('print-here');

		for (var i = 0; i < countries.length; i++) {
			var name = document.createElement('li');
			var innerName = document.createTextNode(countries[i].name);
			name.appendChild(innerName);
			printList.appendChild(name);
		};

		console.log(this);
	};

	function summarizePopulation() {
		var sum = countries.reduce(function (prevVal, elem) {
			return prevVal + elem.population;
		}, 0);

		document.getElementById("total-population").innerHTML = sum;
		console.log(this);
	};

	function summarizeEUPopulation() {
		var sum = 0;

		for (var i = 0; i < countries.length; i++) {
			if (countries[i].continent == "Europe") {
				sum = sum + countries[i].population;
			}
		}

		document.getElementById("eu-population").innerHTML = sum;
		console.log(this);
	};

	function WorldsSmallestPopulation() {
		var smallestPopulation = countries[0].population;
		var countryName = "hej";

		for (var i = 0; i < countries.length; i++) {
			if (countries[i].population <= smallestPopulation) {
				smallestPopulation = countries[i].population;
				countryName = countries[i].name;
			}
		}

		document.getElementById("worlds-smallest-population").innerHTML = countryName + ": " + smallestPopulation;
		console.log(this);

	};

	function AfricanMeanPopulation() {
		var numberOfCountries = 0;
		var sum = 0;

		for (i = 0; i < countries.length; i++) {
			if (countries[i].continent == "Africa") {
				numberOfCountries++;
				sum = sum + countries[i].population;
			}
		}

		document.getElementById("african-mean-population").innerHTML = "Africa's mean population: " + sum / numberOfCountries;
		console.log(this);
	};

	function FindLargeCountries() {
		var largeCountries = ""

		for (i = 0; i < countries.length; i++) {
			if (countries[i].population >= 50000000) {
				largeCountries = largeCountries + "* " + countries[i].name + ": " + countries[i].population;
			}
		}

		document.getElementById("large-countries").innerHTML = largeCountries;
		console.log(this);
	};

	function EightFifteen() {
		var mediumCountries = ""

		for (i = 0; i < countries.length; i++) {
			if (countries[i].population >= 8000000 && countries[i].population <= 15000000) {
				mediumCountries = mediumCountries + "* " + countries[i].name + ": " + countries[i].population;
			}
		}

		document.getElementById("eight-fifteen").innerHTML = mediumCountries;
		console.log(this);
	};


	/*===PUBLIC===*/
	return {
		getCountries: function () {
			return countries;
		},
		getPrintCountries: printCountries,
		getSummarizePopulation: summarizePopulation,
		getFindLargeCountries: FindLargeCountries,
		getSummarizeEUPopulation: summarizeEUPopulation,
		getWorldsSmallestPopulation: WorldsSmallestPopulation,
		getAfricanMeanPopulation: AfricanMeanPopulation,
		getEightFifteen: EightFifteen
	}
})();

document.getElementById('print-btn').addEventListener('click', CountryDatabase.getPrintCountries);

document.getElementById("total-population-btn").addEventListener("click", CountryDatabase.getSummarizePopulation);

document.getElementById("eu-population-btn").addEventListener("click", CountryDatabase.getSummarizeEUPopulation);

document.getElementById("worlds-smallest-population-btn").addEventListener("click", CountryDatabase.getWorldsSmallestPopulation);

document.getElementById("african-mean-population-btn").addEventListener("click", CountryDatabase.getAfricanMeanPopulation);

document.getElementById("find-large-countries-btn").addEventListener("click", CountryDatabase.getFindLargeCountries);

document.getElementById("eight-fifteen-btn").addEventListener("click", CountryDatabase.getEightFifteen);