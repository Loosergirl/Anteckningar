
/**
 * Här får du skapa dina låtar samt din playlist samt lägga till låtarna i playlisten.
 * Använd constructorn för Playlist samt Song för att skapa en playlist och låtar, sedan lägg till
 * låtarna med prototypmetoden "add" som du skapat.
 */


var myPlaylist = new Playlist();


/*
function myPlaylist () {
	Playlist.call(this);
}
*/



var a = new Song("Noise", "Bad band");
var b = new Song("Birdsong", "Outdoors");
var c = new Song("Vroom", "Car");
var d = new Song("Don't play that song again", "Eurovision");
var e = new Song("Car alarm", "Please be quiet");

myPlaylist.add(a);
myPlaylist.add(b);
myPlaylist.add(c);
myPlaylist.add(d);
myPlaylist.add(e);

