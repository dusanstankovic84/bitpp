/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.*/



function numberOfVowels(str) {                 //  broj vowels - samoglasnici (ili neceg drugog) u stringu
    
    var rez = 0;
    var str1 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 'U'];
    
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str1.length; j++) {
            if (str[i] === str1[j]) {
                rez++
            }
        }
    }
    
    return rez;
}

console.log(numberOfVowels("a functIon to count vOwels in A providEd string"));




/* 2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3] */


function combineTwoArrays(arr1, arr2) {      //kombinovanje dva niza

    var arr3 = [];

    for (var i = 0; i < arr1.length; i++) {
        arr3[arr3.length] = arr1[i];
        arr3[arr3.length] = arr2[i];
    }
    
    return arr3;
}

var arr1 = ["a", "b", "c"];
var arr2 = [1,2,3];

console.log(combineTwoArrays(arr1, arr2));




/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/


function rotate(arr, k) {            // okretanje niza za zadati element
       
    arr1 = [];
       
    for ( var i = 0; i < arr.length; i++) {
           if ( i >= k) {
               arr1[arr1.length] = arr[i];
           } 
    } 
    for ( var j = 0; j < arr.length; j++) {
        if ( j < k ) {
            arr1[arr1.length] = arr[j];
        }
    }

    
    return arr1;
}

var arr = [1,2,3,4,5,6];
var k = 2;

console.log(rotate(arr, k));




/* 4. Write a function that takes a number and returns array of its digits.*/


function returnArray(numb) {       // pretvaranje broja u niz
    
    var arr = [];
    var str = "" + numb;
    

    for ( i = 0; i < str.length; i++) {
        arr[arr.length] = str[i];
    }
    
    return arr;
}

console.log(returnArray(12345678));




/* 5. Write a program that prints a multiplication table for numbers up to 12.*/


function multiTable() {                   // mnozenje brojeva
    
    var rez = 1;
    
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 10; j++) {
            rez = i * j;
            console.log(i, 'x', j, '=', rez, '\n');
        }
    }
    
}

console.log(multiTable());




/* 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.*/


function celzToFahr(c) {      // pretvaranje iz celzijusa u farenhajt
    
    var fahr;
    fahr = (c * 1.8) + 32;
    return fahr
          

}

var celz = 100;

console.log(celzToFahr(celz) + " Fahrenheit");




/* 7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/


function maxElement(arr) {
    
    var res = 0;
    var arr1 = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i])) {
            arr1[arr1.length] = arr[i]
        }
    }
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] > res) {
            res = arr[j];
        }
    }
    
    return res;
}

console.log(maxElement([1, 2, 3, 4, 5, 'nesto']));




/* . Write a function to find the maximum and minimum elements. Function returns an array.*/


/* 9. Write a function to find the median element of array.*/


/* 10. Write a function to find the element that occurs most frequently.*/


/* 11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/


/* 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/


/* 13. Write a function to find all the numbers greater than the average.*/


/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */



/*15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
printed as:

*********
* Hello *
* World *
* in *
* a *
* frame *
*********

*/


function makeFrame(array) {            // razbiti na delove - uvek za slozene zadatke
    
    var maxWordlength = 0;
    var topAndBottomString = ""; 
    var topAndBottomLength = 0;
    var middlePart = "";
    var spaceLength = 0;
    var sapceString = "";
    var frame = "";

    function makeStringFromChar(char, numb) {
        var resultString = "";
        
        for(var i = 0; i < numb; i++) {
            resultString += char;
        }
    
        return resultString;
    }
      
    // naci najduzu string
      for (var i = 0; i < array.length; i++) {
          if (array[i].length > maxWordlength) {
              maxWordlength = array[i].length;
          }
      }  
    
    // napraviiti gornji i donji string                             
       var topAndBottomLength = maxWordlength + 4; 
       topAndBottomString = makeStringFromChar("*", topAndBottomLength);
        
       // for(var j = 0; j < topAndBottomLength; j++) {   // - umesto ovog ide nova funkcija(unutara)
       // topAndBottomString += "*";   
       // }  
       
    // napraviti srednji deo 
        for (var k = 0; k < array.length; k++ ) {
            spaceLength = maxWordlength - array[k].length;
            sapceString = makeStringFromChar(" ", spaceLength);
            middlePart += "* " + array[k] + sapceString + " *\n";
        }
    
    // napraviti frame
       frame = topAndBottomString + "\n" + middlePart + topAndBottomString;

       return frame;
}

console.log(makeFrame(["Hello", "World", "in", "a", "frame"]));






