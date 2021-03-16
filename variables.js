//week1

/*Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.*/
var vezba;
var _vezba;
var $vezba;
var 1veza;
var prvaVezba;
var vezba = 1;
var vezba = "prva";

/*Save a string (text) describing your current mood in a variable and print it out in console.*/
var mood = "pospan";
console.log(mood);

/*Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?*/
var a = 3;
var b = 2;
var c = 31;
var result = a-b-c;
console.log(result);

var a = 4;
var b = 2;
var c = 1.14;
var d = 3;
var result = a/c-c*d;
console.log(result);

//How many grams weight 1.2kg of bananas?
var banana = 1.2;
var kilogram = 1000; 
var bananaUGramima = banana * kilogram;
console.log(bananaUGramima + " grams");

/*How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour?*/
var minut = 60;
var anna = 5 * minut;
var tom = 30 * minut;
console.log( anna + " sekundi", tom + " sekundi")

/*How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?*/
var gb = 1000;
var usb= 4 * gb;
var articles = 0,098;
console.log(usb + " mb" + ", " + (usb / articles))

//Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/
var a = 5;
a *= 2;
console.log(a)

/*Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/
var name = "Dusan";
var age = 36;
var cat = false;
console.log(typeof cat);

//Use the console to check the results you think should go in the following table:
var p = true;
var q = true;
console.log(p&&q, p||q)

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/
var age = 36;
if(age < 0 || age > 120){
    conasole.log("false");
} else if(age===36) {
    console.log ("true");
}

/*Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/
var speed = 140;
var isDrivingSafely;
if (speed>60 && speed<120) {
    isDrivingSafely = true;
} else {
    isDrivingSafely = false;
} console.log(isDrivingSafely);

var a = true;
console.log(typeof a);