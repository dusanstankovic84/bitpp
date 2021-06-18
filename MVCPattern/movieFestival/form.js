
var createMovieBtnElement = document.getElementById("create-movie-btn");
var createProgramBtnElement = document.getElementById("create-program-btn");
var addMovieBtnElement = document.getElementById("addmovie-btn");
var createdMovieElementUl = document.getElementById("created-movie-here");
var uListOfCreatedPrograms = document.getElementById("programs-list");
var selectMovieList = document.getElementById("movie-dropdown-list");
var selectProgramList = document.getElementById("program-dropdown-list");

var movieTitle = document.getElementById("movie-title");
var movieLength = document.getElementById("movie-length");
var movieGenre = document.getElementById("genre");

var errorMsg = document.getElementById("error");

var listOfCreatedMovies = [];
var listOfCreatedPrograms = [];


// function for creating a movie

function createMovie() {
    if (!movieTitle || !movieLength || !movieGenre.value === "-") {
        return alert ("enter every value")
    }
    else {
    var movieObject = new Movie (movieTitle.value, movieGenre.value, movieLength.value);

    var createdMovieLi = document.createElement('li');
    createdMovieLi.textContent = movieObject.getData();
    createdMovieElementUl.appendChild(createdMovieLi);

    listOfCreatedMovies.push(movieObject);

    // adding movie to dropdown movie list
    var movieOption = document.createElement("option");
    movieOption.textContent = movieObject.getData();
    movieOption.setAttribute("value", movieObject.getData());
    selectMovieList.appendChild(movieOption);


    // reset inputs
    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "-";
    } 
}


// function for creating a program

function createProgram() {
    var programDate = document.getElementById("program-date").value;
    var programObject = new Program (programDate);

    listOfCreatedPrograms.push(programObject);

    // adding program to dropdown list
    var liProgram = document.createElement("li");
    liProgram.textContent = programObject.getData();
    uListOfCreatedPrograms.appendChild(liProgram);

    //adding to dropdown
    var programOption = document.createElement("option");
    programOption.textContent = programObject.getData();
    programOption.setAttribute("value", programObject.getDate());
    selectProgramList.appendChild(programOption);
}


// function for adding a movie

function addMovieToProgram () {
    var movieToAdd = document.getElementById("movie-dropdown-list").value;
    var toWichProgram = document.getElementById("program-dropdown-list").value;
    
    listOfCreatedMovies.forEach(function (movieObjectElement){
        if (movieObjectElement.getData() === movieToAdd) {
            var movie = movieObjectElement;
            listOfCreatedPrograms.forEach(function(programObjectElement){
                if (programObjectElement.getDate() === toWichProgram) {
                    programObjectElement.addMovie(movie);
                  // update list info
                  var searchForLi = uListOfCreatedPrograms.getElementsByTagName("li");
                  for ( i = 0; i < searchForLi.length; i++) {
                    var curentLi = searchForLi[i].textContent.slice(0,15)
                    if (curentLi === toWichProgram) {
                        searchForLi[i].innerHTML = programObjectElement.getData();
                    }
                  }
                }
            })
        }
    })

}


// listeners
createMovieBtnElement.addEventListener("click", createMovie);
createProgramBtnElement.addEventListener("click", createProgram);
addMovieBtnElement.addEventListener("click", addMovieToProgram);





