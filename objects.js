

// predavanje:

var user = {
    name: "Jovana",
    surname: "Obradovic",
    age: "22",
    occupation: "Inzenjer geodezije"
}


var book = {
    author = {
        name: "Jovana",
        surname: "Obradovic",
    }
    age: "22",
    occupation: "Inzenjer geodezije"
}

var arr =[];
var arr = new Array();0



//practise:

/* 1. vCreate an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var favouriteCoffee = {
    name: "turkish",
    strenght: "strong",
    flavour: "black",
    milk: "no"
    sugar: "no"
}

/* 2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity. */

var favouriteMovie = {
    title: "Matrix",
    genre: "SF"
    popularity: "Top rated Movie #16"
    director: "Lana Wachowski"
    actors = {
        leadActor: "Keanu Reeves",
        supportActor: "Laurence Fishburne"
    }
}


/* 3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

function createProject (desc, lang, gitUrl, dev) {
    var project = {
        description: desc,
        language: lang,
        gitRepository: gitUrl,
        isInDev: dev,
        printRepository: function () {
            console.log(gitUrl);
        },
        isJavaScript: function () {
            return lang === "JavaScript";
        },
        isDevelopment: function () {
            return dev ? "project is in development" : "project is not in development";
           
        },
    }
    return project;
}

result = createProject ("program that calculates", "JavaScript", "https://github.com/dusanstankovic84/bitpp", true);
console.log(result);

result.printRepository();
console.log(result.isJavaScript());
console.log(result.isDevelopment());




/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction. 

○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */

function culinaryRecipe(nam, cuisine, comple, ingred, time, instr) {
         var recipe = {
             name = nam,
             typeOfCuisine = cuisine,
             complexity = comple,
             listOfIngredients = ingred,
             preparingTime = time,
             preparingInstruction = instr,





         }
    
}