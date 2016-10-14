/*Systemet ska kunna läsa in namnet och 
betyget på en student och spara den 
informationen som ett nytt objekt i en array. 
Systemet ska sedan kunna plocka ut medelbetyg, 
de studenter som passerade och en specifik 
student efter namn med hjälp av funktionerna nedan. 
Du kan lösa denna uppgift utan att använda 
en constructor men funktionerna och arrayen 
ska tillhöra objektet grades.*/

/*Objekt i array i objekt...*/

var grades = {
	students: [],
	average: function() {
		var sum = 0;
		for (i = 0; i < grades.students.length; i++) {
			sum += grades.students[i].grade;
		}
		return sum / grades.students.length;
	},
	didPass: function(number) {
		var pass = [];
		for (i = 0; i < grades.students.length; i++) {
			if (grades.students[i].grade > number)
			{
				pass.push(grades.students[i]);
			}
		}
		return pass;
	},
	didNotPass: function(number) {
		var notPass = [];
		for (i = 0; i < grades.students.length; i++) {
			if (grades.students[i].grade <= number)
			{
				notPass.push(grades.students[i]);
			}
		}
		return notPass;
	},
	find: function(studentName) {
		var points;
		for (i = 0; i < grades.students.length; i++) {
			if (studentName = grades.students[i].name) {
				points = grades.students[i].points;
			}
		}
		return points;
	},

	
	add: function() {
		var adding = true;
		var student = "";
		var points = 0;

		while (adding === true)
		{
			student = prompt("Student name:");
			points = prompt("Student points:");

			// Måste göra new
			var newstudent = {
				name: student,
				points: points
			}

			grades.students.push(newstudent);

			var yn = prompt("Add another student? Y/N");
			if (yn.toUpperCase() == "N") {
				adding = false;
			}
		}
	}
	
	/*
	// Med konstruktor
	add: function () {
		var adding = true;
		var student = "";
		var points = 0;

		while (adding === true)
		{
			student = prompt("Student name:");
			points = prompt("Student points:");

			var newstudent = new student(student, points);
			students.push(newstudent);

			var yn = prompt("Add another student? Y/N");
			if (yn.ToUpperCase == "N") {
				adding = false;
			}
		}
	}
	*/
}

/*
	function student(name, points) {
		this.name = name;
		this.points = points;
	}
	*/

grades.add();
console.log(grades.find("Maria"));