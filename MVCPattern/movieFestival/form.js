var festival = new Festival();

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

//var listOfCreatedMovies = [];
//var listOfCreatedPrograms = [];


// function for creating a movie

function createMovie() {
   
    var movieObject = new Movie (movieTitle.value, movieGenre.value, movieLength.value);
    try {
        if (!movieTitle.value) {
             alert ("title is emty");
        } else if (movieGenre.value === "-") {
            alert ("genre is emty");
        } else if (!movieLength.value){
            alert ("length is emty");
        }
    } catch(error) {
         console.log(error.message);
    }
    
    var index = festival.addMovie(movieObject);

    var createdMovieLi = document.createElement('li');
    createdMovieLi.textContent = movieObject.getData();
    createdMovieElementUl.appendChild(createdMovieLi);

    //listOfCreatedMovies.push(movieObject);

    // adding movie to dropdown movie list
    var movieOption = document.createElement("option");
    movieOption.textContent = movieObject.getData();
    
    //movieOption.setAttribute("value", movieObject.getData());
    movieOption.setAttribute("value", index);
    selectMovieList.appendChild(movieOption);


    // reset inputs
    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "-";
    
}


// function for creating a program

function createProgram() {
    var programDate = document.getElementById("program-date").value;
    var date = new Date (programDate);
    var programErrorElement = document.getElementById("program-error");
    
    if (date.getTime() < Date.now()) {
        programErrorElement.textContent = "Invalid date!";
        return;
    } 
    console.log(programErrorElement);
    
    
   var programObject = new Program (date);

    try {
        if (!programDate) {
            alert ("date is emty");
        }
    } catch (error) {
        console.log(error.message);
    }

    
    //listOfCreatedPrograms.push(programObject);

    var index = festival.addProgram(programObject);

    // adding program to dropdown list
    var liProgram = document.createElement("li");
    liProgram.textContent = programObject.getData();
    uListOfCreatedPrograms.appendChild(liProgram);

    //adding to dropdown
    var programOption = document.createElement("option");
    programOption.textContent = programObject.getData();
    
    //programOption.setAttribute("value", programObject.getDate());
    programOption.setAttribute("value", index);
    selectProgramList.appendChild(programOption);
}


// function for adding a movie

function addMovieToProgram () {
    var movieToAdd = document.getElementById("movie-dropdown-list").value;
    var toWichProgram = document.getElementById("program-dropdown-list").value;
    
    var selectMovie = festival.listOfAllMovies[movieToAdd];
    var selectProgram = festival.listOfAllPrograms[toWichProgram];

    var oldProgramData = selectProgram.getData();
    
    selectProgram.addMovie(selectMovie);

    var allLi = document.querySelectorAll("li");
    for (i=0; i < allLi.length; i++) {
        if (allLi[i].textContent === oldProgramData) {
            allLi[i].textContent = selectProgram.getData();
        }
    }

    /*listOfCreatedMovies.forEach(function (movieObjectElement){
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
    })*/

    // reset inputs
    document.getElementById("movie-dropdown-list").value = "-";
    document.getElementById("program-dropdown-list").value = "-";

}


// listeners
createMovieBtnElement.addEventListener("click", createMovie);
createProgramBtnElement.addEventListener("click", createProgram);
addMovieBtnElement.addEventListener("click", addMovieToProgram);





