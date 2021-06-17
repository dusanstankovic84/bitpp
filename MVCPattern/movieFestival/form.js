
var createMovieBtnElement = document.getElementById("create-movie-btn");
var createProgramBtnElement = document.getElementById("create-program-btn");
var addMovieBtnElement = document.getElementById("addmovie-btn");
var createdMovieElementUl = document.getElementById("created-movie-here");
var uListOfCreatedPrograms = document.getElementById("programs-list");
var selectMovieList = document.getElementById("movie-dropdown-list");
var selectProgramList = document.getElementById("program-dropdown-list");

// function for creating a movie

function createMovie() {
    var movieTitle = document.getElementById("movie-title").value;
    var movieLength = document.getElementById("movie-length").value;
    var movieGenre = document.getElementById("genre").value;
    
    var movieObject = new Movie (movieTitle, movieGenre, movieLength);

    var createdMovieLi = document.createElement('li');
    createdMovieLi.textContent = movieObject.getData();
    createdMovieElementUl.appendChild(createdMovieLi);

    console.log(movieObject.getData());
}

createMovieBtnElement.addEventListener("click", createMovie);

