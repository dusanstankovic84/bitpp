
/* IIFE = Immediately Invoked Function Expressions */


/*1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4] */

var arr = [4, 5, 11, 9];
var newArr = [];

for (var i = 0; i < arr.length; i++){
    if (i === 0) {
        newArr[i] = arr[arr.length-1];
    } 
    else if (i === arr.length-1) {
          newArr[arr.length-1] = arr[0];
    }
    else {
        newArr[i] = arr[i];
    }

   
}
console.log(newArr);

// pronaci prvi elenment niza
// pronaci poslesnji element
// prvom elem niza dodeliti vrednost poslenjeg elem niza
// poslednjem elem niza dodeliti vrednost prvog niza
// odstampati dobijeni niz

var arr = [4, 5, 11, 9];

(
    function () {
        
        var newArr = [];

        for (var i = 0; i < arr.length; i++){
            
            if (i === 0) {
                newArr[i] = arr[arr.length-1];
            } 
            else if (i === arr.length-1) {
                  newArr[arr.length-1] = arr[0];
            }
            else {
                newArr[i] = arr[i];
            }
        
           
        }

        console.log(newArr);
    }
)();



/* 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20 */

// rectangle- pravougaonik

var a = 4;
var b = 5;

(
    function () {
    console.log("surface are " + a * b + " cm");
}
)();



/* 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2 */

var string = "prograMming";
var newString = "";
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] === "m" || string[i] === "M") {
        newString += "*";
        count++
    
    } else if (string[i] !== "m" || string[i] !== "M") {
        newString += string[i]
    }

}
console.log(newString, ", number of replacements", count);
//

(
    function (string) {
        
        var newString = "";
        var count = 0;

        for (var i = 0; i < string.length; i++) {
            
            if (string[i] === "m" || string[i] === "M") {
                newString += "*";
                count++
            
            } else if (string[i] !== "m" || string[i] !== "M") {
                newString += string[i]
            }
        
        }
        
        console.log(newString, ", number of replacements", count);
    }
)("prograMming");



/* 4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */

var a = "pera";
var b = "peric";

(
function(name, surname) {
    console.log(name + "." + surname + "@gmail.com");
}
)(a, b);



/* 5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28 */


// 034 = (0 × 8²) + (3 × 8¹) + (4 × 8⁰) = 28

var octalNumber = 034;

(
    function(octalNum) {
        var octalNumberString = octalNumber + "";  
        
        console.log(octalNumberString);
    }

)(octalNumber);



/* 6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */

var pass = "dusan1234";
var letterCount = 0;
var successCallback = "password is correct";
var isNumber = false;

for(var i = 0; i < pass.length; i++) {
    letterCount++;
} 
for(var i = 0; i < pass.length; i++) {
    letterCount++;
}

if (letterCount >= 6) {
    console.log(successCallback);
}
if (letterCount)

// pitati?



/* 7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

var filterOdd = 
(
     
    function (array) {
         
        var filteredArray = array.filter(function(number){
             return number % 2 !== 0;
         });
         
         return filteredArray;

})([2, 8, 11, 4, 9, 3]);

    console.log(filterOdd);










                
                


