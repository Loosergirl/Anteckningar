function getAll() {
    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(ajaxRequest.responseText);
            newArray = JSON.parse(ajaxRequest.responseText);

            for (var i = 0; i < newArray.length; i++) {
                var innerListicle = document.createTextNode("artist: " + newArray[i].artist + ", " + "title: " + newArray[i].title);
                var listicle = document.createElement('li');
                listicle.appendChild(innerListicle);
                var myList = document.getElementById('myList');
                myList.appendChild(listicle);
            }
        }
    };

    ajaxRequest.open('GET', 'http://fend16.azurewebsites.net/albums', true);

    ajaxRequest.send();
}

document.getElementById("allBtn").addEventListener("click", getAll);

//Här tar jag bara ett objekt ur arrayen. Går även att loopa igenom etc.
function getOne() {
    var ajaxRequest = new XMLHttpRequest();
    var newAray = [];

    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            newArray = JSON.parse(ajaxRequest.responseText);

            console.log(newArray[0]);
        }
    };

    ajaxRequest.open('GET', 'http://fend16.azurewebsites.net/albums', true);

    ajaxRequest.send();
}

document.getElementById("oneBtn").addEventListener("click", getOne);

var deleteAlbumInDatabase = function () {
    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(ajaxRequest.responseText);
        }
    };

    ajaxRequest.open('GET', 'http://fend16.azurewebsites.net/albums', true);

    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(ajaxRequest.responseText);
        }
    };

    ajaxRequest.open('DELETE', 'http://fend16.azurewebsites.net/albums/5891dd5cf8d34821a81c1a2b', true);

    ajaxRequest.send();
};

document.getElementById("deleteBtn").addEventListener("click", deleteAlbumInDatabase);


var patchAlbumInDatabase = function () {
    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(ajaxRequest.responseText);
        }
    };

    ajaxRequest.open('GET', 'http://fend16.azurewebsites.net/albums', true);


    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(ajaxRequest.responseText);
            console.log("Patched");

        }
    };

    ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    ajaxRequest.open('PATCH', 'http://fend16.azurewebsites.net/albums/5891e02af8d34821a81c1a32', true);


    ajaxRequest.send("title=Patched&artist=MK");
};



/*
var postAlbumToAPI = function(){

  //Same as get, we need a ajax object to handle the request
  var ajaxRequest = new XMLHttpRequest();

  //The status code we get back in this case is a 201: Content created.
  //But everything else is the same
  ajaxRequest.onreadystatechange = function() {
    if(ajaxRequest.status == 201 && ajaxRequest.readyState == 4) {
        console.log("%c Successfully posted the album with title and artist 🐱", 'color: lightsalmon');
        console.log(ajaxRequest.responseText);
    } 
  };

  //The method is now 'POST' when sending data to the server
  ajaxRequest.open("POST", 'http://fend16.azurewebsites.net/albums' , true);

  //But when sending data to the API we must provide a specifik header 🤖
  //to tell the server that it should accept the parameters in a correct format
  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //When we send the request we supply the parameters as an argument
  //each parameter is separated with an ampersand '&'.
  ajaxRequest.send("title=Rumours&artist=Fleetwood Mac");

};
*/


document.getElementById("patchBtn").addEventListener("click", patchAlbumInDatabase);