
// constructor Movie

function Movie (title, genre, length) {
    this.title = title;
    this.genreShort = genre.charAt(0).toUpperCase() + genre.charAt(genre.length-1).toUpperCase();
    this.length = length;
    this.getData = function () {
        return this.title + ", " + this.length + " min, " + this.genreShort;
    }
}


// constructor Program

function Program (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.addMovie = function (movieObject) {
        return this.listOfMovies.push(movieObject);
    }
    this.getData = function () {
        var allMoviesLength = 0;
        var allMoviesData = '';
        this.listOfMovies.forEach(function (movieElement) {
            allMoviesLength += parseInt(movieElement.length);
            //allMoviesData += movieElement.getData() + '\n\t\t';
        });
        return this.date.toDateString() + ', ' + this.listOfMovies.length + ' movies, program duration ' + allMoviesLength + ' min.' /*\n\t\t' + allMoviesData*/ ;
    }
    this.getDate = function () {
        return this.date.toDateString()
    };	
}





