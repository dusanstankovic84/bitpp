

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

var Movie = {
    title: "Matrix",
    genre: "SF"
    popularity: "Top rated Movie #16"
    director: "Lana Wachowski"
    actors = {
        leadActor: "Keanu Reeves",
        supportActor: "Laurence Fishburne"
    }
}

//

var favouriteMovie = new Movie ()


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


function culinaryRecipe (name, type, complexity, ingredients, preparationTime, instruction) {
    var recipe = {
        mealName: name,
        mealType: type,
        complexity: complexity,
        listOfIngredients: ingredients,
        preparingTime: preparationTime,
        preparingInstructions: instruction,

        printIngredients: function() {
            console.log(recipe.listOfIngredients);
        },
        canBePreparedFor15Min: function() {
            return recipe.preparingTime < 15;    
        },
        changeTypeOfCuisine: function(newTypeOfCuisine) {
            return recipe.mealType = newTypeOfCuisine;
        },
        deleteAnIngredient: function (ingredient) {
            var changedListOfIngredients = [];
            for(var i = 0; i < recipe.listOfIngredients.length; i++) {
                if(recipe.listOfIngredients[i] !== ingredient) {
                    changedListOfIngredients[changedListOfIngredients.length] = recipe.listOfIngredients[i];
                } else {
                    continue;
                }

            }

            return recipe.listOfIngredients = changedListOfIngredients;
        }
    }

    return recipe;
}

var newRecipe = culinaryRecipe("Sarma", "Serbian Food", "simple",["bacon", "gabidze", "pork", "rise", "water"], 45, "instrukcije");
console.log(newRecipe);
console.log(newRecipe.canBePreparedFor15Min());
console.log(newRecipe.printIngredients());
console.log(newRecipe.changeTypeOfCuisine("mexican"));
console.log(newRecipe.deleteAnIngredient("bacon"));



// drugi nacin

function culinaryRecipe (name, type, complexity, ingredients, preparationTime, instruction) {
    var recipe = {}
    recipe.mealName = name;
    recipe.mealType = type;
    recipe.complexity = complexity;
    recipe.listOfIngredients = ingredients;
    recipe.preparingTime = preparationTime;
    recipe.preparingInstructions = instruction;

    recipe.printIngredients = function() {
            console.log(recipe.listOfIngredients);
        },
    recipe.canBePreparedFor15Min = function() {
            return recipe.preparingTime < 15;    
        },
    recipe.changeTypeOfCuisine = function(newTypeOfCuisine) {
            return recipe.mealType = newTypeOfCuisine;
        },
    recipe.deleteAnIngredient = function (ingredient) {
            var changedListOfIngredients = [];
            for(var i = 0; i < recipe.listOfIngredients.length; i++) {
                if(recipe.listOfIngredients[i] !== ingredient) {
                    changedListOfIngredients[changedListOfIngredients.length] = recipe.listOfIngredients[i];
                } else {
                    continue;
                }

            }

            return recipe.listOfIngredients = changedListOfIngredients;
        }
    

    return recipe;
}

var newRecipe = culinaryRecipe("Sarma", "Serbian Food", "simple",["bacon", "gabidze", "pork", "rise", "water"], 45, "instrukcije");
console.log(newRecipe);
console.log(newRecipe.canBePreparedFor15Min());
console.log(newRecipe.printIngredients());
console.log(newRecipe.changeTypeOfCuisine("mexican"));
console.log(newRecipe.deleteAnIngredient("bacon"));


// treci nacin THIS & Constructor

function Recipe (name, type, complexity, ingredients, preparationTime, instruction) {
    
    this.mealName = name;
    this.mealType = type;
    this.complexity = complexity;
    this.listOfIngredients = ingredients;
    this.preparingTime = preparationTime;
    this.preparingInstructions = instruction;

    this.printIngredients = function() {
            console.log(this.listOfIngredients);
        },
    this.canBePreparedFor15Min = function() {
            return this.preparingTime < 15;    
        },
    this.changeTypeOfCuisine = function(newTypeOfCuisine) {
            return this.mealType = newTypeOfCuisine;
        },
    this.deleteAnIngredient = function (ingredient) {
            var changedListOfIngredients = [];
            for(var i = 0; i < this.listOfIngredients.length; i++) {
                if(this.listOfIngredients[i] !== ingredient) {
                    changedListOfIngredients[changedListOfIngredients.length] = this.listOfIngredients[i];
                } else {
                    continue;
                }

            }

            return this.listOfIngredients = changedListOfIngredients;
        }
}

var newRecipe = new Recipe("Sarma", "Serbian Food", "simple",["bacon", "gabidze", "pork", "rise", "water"], 45, "instrukcije");
console.log(newRecipe);
console.log(newRecipe.canBePreparedFor15Min());
console.log(newRecipe.printIngredients());
console.log(newRecipe.changeTypeOfCuisine("mexican"));
console.log(newRecipe.deleteAnIngredient("bacon"));


































