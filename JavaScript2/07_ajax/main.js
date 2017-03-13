/*Event listeners*/
//document.getElementById('get-btn').addEventListener('click', getAll);
$('#get-btn').on('click', getAll);
//document.getElementById('post-btn').addEventListener('click', postIt);
$('#post-btn').on('click', postIt);
//document.getElementById('patch-btn').addEventListener('click', patchUp);
$('#patch-btn').on('click', patchUp);
//document.getElementById('delete-btn').addEventListener('click', exterminate);
$('#delete-btn').on('click', exterminate);

/*input*/
//var titleInput = document.getElementById('title-input').value;
//var yearInput = document.getElementById('year-input').value;
var horror = document.getElementById('horror').checked;
//var horror = $('#horror').$("input:checked");
var comedy = document.getElementById('comedy').checked;

function getAll() {
	$.ajax({
		method: 'GET',
		url: 'http://localhost:3000/movies',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: (response) => {
			console.log(response);
			return response;
		},
		error: (error) => {
			console.log(error);
			return error;
		}
	})
}

function postIt() {
	var movieGenres = [];

	if (horror === true) {
		movieGenres.push("Horror");
	}
	if (comedy === true) {
		movieGenres.push("Comedy");
	}

	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/movies',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify({
			title: document.getElementById('title-input').value,
			year: document.getElementById('year-input').value,
			genres: movieGenres
		}),
		success: (data) => {
			console.log(data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}

function patchUp() {
	var myUrl = 'http://localhost:3000/movies/' + $('#id-nr').val();

	var movieGenres = [];

	if (horror === true) {
		movieGenres.push("Horror");
	}
	if (comedy === true) {
		movieGenres.push("Comedy");
	}

	$.ajax({
		method: 'PATCH',
		url: myUrl,
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify({
			title: document.getElementById('title-input').value,
			year: document.getElementById('year-input').value,
			genres: movieGenres
		}),
		success: (data) => {
			console.log(data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}

function exterminate() {
	var myUrl = 'http://localhost:3000/movies/' + $('#id-nr').val();

	$.ajax({
		method: 'DELETE',
		url: myUrl,
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: (response) => {
			console.log(response);
		},
		error: (error) => {
			console.log(error);
		}
	})
}