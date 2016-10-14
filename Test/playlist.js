

function Playlist(){
    //Playlisten ska inte ta några argument men ska ha följande variabler:
    //songs som är en array
    //isPlaying som är en bool
    //playingIndex som är 0

    
    this.songs = [];
    this.isPlaying = false;
    this.playingIndex = 0;
    
}

/*
var Playlist = {
    songs: [],
    isPlaying: false,
    playingIndex: 0
};
*/

Playlist.prototype.add = function(song){
    //Denna funktion ska lägga till en ny låt till playlisten
    this.songs.push(song);
};

Playlist.prototype.play = function(){
    //Denna funktion ska starta playlisten och låten
    this.isPlaying = true;
    this.songs[this.playingIndex].isPlaying = true;
};


Playlist.prototype.stop = function(){
    //Denna funktion ska stoppa låten samt stoppa playlisten
    this.isPlaying = false;
    this.songs[this.playingIndex].isPlaying = false;
};

Playlist.prototype.next = function(){
    //Denna funktion ska byta låt. Om vi är på sista låten ska
    //funktionen gå tillbaka till första låten om vi anropar funktionen medan
    //vi står på sista låten
    if (this.playingIndex == this.songs.length-1)
    {
        this.playingIndex = 0;
    }
    else {
        this.playingIndex++;
    }
};

Playlist.prototype.getCurrent = function(){
    //Returnera nuvarande låten

    return this.songs[this.playingIndex];
};









