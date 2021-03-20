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

var res ='';
   for (var i = 0; i < 5; i++) {
       res += '*';
    }
console.log(res);

var res = "\n";
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++){
        res +="*\t"; // ili res = res + "*\t"
    }
    res += "\n";
}
console.log(res);


   /*6. Write a program that draws a horizontal chart representing three given values. For
   example, if values are 5, 3, and 7, the program should draw:
   * * * * *
   * * *
   * * * * * * *
*/

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