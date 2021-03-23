//predavanje- Dario

function addNumbers(a, b) {     //parametar
    var result = a + b;
    return result;
}

var m = 4;
var n = 5;

var result = addNumbers(m, n); //call or invoke //arguments

console.log(result);

//

function isArraySym(array) {
   var isSym = true;
   for (var start = 0, end = array.lenght -1; start< end; start++,end--){
       if (array[start] !== array[end]) {
           isSym = false;
       }
   }
   return isSym;
}

var result = isArraySym(1,3,1);

//

function arrLenght(arr) {
    return arr.lenght;
}
var result = arrLenght([1,2,3,4]);
console.log(result);

//

function concatinate() {
    var newString = "";
    for (var i=0; i < arguments.length; i++){
        newString += arguments[i];
    }
    return newString;
}
 
 var result = concatinate("nesto", "danas", "funkcije");
 console.log(result);


 // 1. Write a program that calculates the maximum of two given numbers.

 function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "number are equal";
    }
 }

 var result = max(10, 4);
 console.log(result);

 /*2. Write a program that checks if a given number is odd.*/

 function isOdd (a) {
    if  (a % 2 !== 0) {
        return true;
    }

    return false
 }


 var result = isOdd(9);
 console.log(result);

 /*3. Write a program that checks if a given number is a three digit long number.*/

 function isLong(a) {
     return a > 99 && a <1000;
 }

 var result = isLong(555);
 console.log(result);

 /*4. Write a program that calculates an arithmetic mean of four numbers.*/

 function sum(a, b, c, d) {
     var result = a + b + c + d;
    return result;
 }

var a = 1;
var b = 2;
var c = 3;
var d = 4;

var result = sum(a, b, c, d);
 var result2 = result / sum.length;
 console.log(result2);
  /*5. Write a program that draws a square of a given size. For example, if the size of square
 is 5 the program should draw:
 *****
 * *
 * *
 * *
 *****
 */

 
 /*var result = '\n';
 for (var i = 0; i < 5; i++) {
    result += '*';
     }
     
 console.log(result);*/
 
 /*function squere() {
    var new = "";
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            return new '*\t';
        }
        return new '\n';
    }   

 }
 

var result = squere("*");

console.log(result);*/
//pitati

function square(a) {                   
    var starFinal = '';                                            // Final string
    for (var i = 1; i <= a; i++) {                                 // Main loop for creating rows 
        if (i === 1 || i === a) {                                  // condition for creating the first and last row
            var starL = '';
            for (var k = 0; k < a; k++) {                          // Loop for first and last row
                starL = starL + '*'; 
            }
            starFinal = starFinal + starL + '\n';                  // Adding created string to the final string
        }
            else {
                var starM = '';
                for (var j = 1; j <= a; j++) {                     // Loop for creating middle rows
                    if (j === 1 || j === a) {                      // Condition for printing '*' or ' ' string
                        var starM = starM + '*';
                    }    
                    else {            
                        starM = starM + ' '; 
                    }
                }
                starFinal = starFinal + starM + '\n';              // Adding created middle row string to the final string
            }
    }
    return starFinal;
}
var result = square(5);
console.log(result);
//pitati


   /*6. Write a program that draws a horizontal chart representing three given values. For
   example, if values are 5, 3, and 7, the program should draw:
   * * * * *
   * * *
   * * * * * * *
*/

function stars(a, b, c) {
    var starSum_a = '';
    for (var i = 0; i < a; i++) {
        starSum_a = starSum_a + '*'; 
    }
    var starSum_b = '';
    for (var j = 0; j < b; j++) {
        starSum_b = starSum_b + '*'; 
    }
    var starSum_c = '';
    for (var i = 0; i < c; i++) {
        starSum_c = starSum_c + '*'; 
    }
    return starSum_a + '\n' + starSum_b + '\n' + starSum_c;

}

var result = stars(5, 3, 7);
console.log(result);
//pitati

/*7. Write a program that calculates a number of digits of a given number.*/



function calc(a) { 
  return a.lenght;
    
}

var result = calc(345);
console.log(result);

/*var number = 345;
var numbLenght = (""+number).length;
console.log(numbLenght);*/


function numberLenght(a) {
    return numbLenght;
    
}


var number = 3450;
var numbLenght = (""+number).length; // numb of digits
console.log(numbLenght);


/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function numOfAppearances () {
    var k=0;
    for (i=0; i < a.length; i++){
        if (e === a[i]) {
            k = k + 1;
        }
    }
    return k;
}
console.log("number " + "e " + "appears " + numOfAppearances(e,a) + " times");


/* 9. Write a program that calculates the sum of odd elements of a given array.*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = sum(array);

function sum(a) {
    var y = 0;
    for (var i = 0; i < array.length; i++) {
        y = y + array[i];
    }
    return y;
}
console.log(result);


/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

var string = "Abrakadabra";
var result = sum(string);

function sum(string) {
    var count_a = 0;
    var count_A = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            count_a++;
        }
    }
    return count_a;
}
console.log('Letters \'A\' and \'a\' appear ' + result + ' times');


/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

var a = "abc";
var b = 4;
var result = sum(a,b);

function sum(a,b) {
    var x = "";
    for (var i = 0; i <= b; i++) {
        x = x + a;
    }
    return x;
}
console.log(result);


   

























