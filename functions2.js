
// vezbanje
/* 1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false */

function isString(a) {
    var result = "";
        if (typeof a === "string") {
            result = true
        }  else {
            result = false
        }
        return result   
    }
    var a = "my random string";
    var b = 12; 
    
console.log (isString(a));
/* 2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false*/

function isStringBlank(a) {
    var result = "";
        if (a === "string") {
            result = "true"
        }  else {
            result = "false"
        }
        return result
    }
    var a = "my random string";
    var b = "";
    var c = 12;
    var d = false;
    console.log (isStringBlank(a));

    /* 3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot;*/

function conc(string,n) {
    var finalString = '';
    for (var i = 0; i < n; i++) {
        finalString += string
    }
    return finalString;
}

console.log(conc('Mi',5));


/* 4. Write a function to count the number of letter occurrences in a string.
My random string;, n - 2*/

function sum(string) {
    for (var i = 0; i < string.length; i++) {
           if (string[i]==="n") {
               count_n++;
           }
       }
       return count_n;
    }
var string = "My random string";
var count_n = 0;
var result = sum(string);                                              //kao za a u prethodnom
console.log("number of letter n is "+result);


/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

function firstOccur(string,char) {
    var position = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {                       
            position = i+1;                             // ili  position = i
            break;                                      //      i = string.lenght
        }
        else position = -1;
    }
    return position;
}
var stringToCheck ="My random string";
var character = 's';
console.log("position of the first occurrence is "+ firstOccur(stringToCheck,character));   
// pitati ?


/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/

function lastOccur(string,char) { 
    var position = 0;                                    // od nazad
    for (var i = string.length-1; i >= 0; i--) {
        if (string[i] === char) {
            position = i+1;
            break;                                      // break out of loop after first occurance
        }
        else position = -1;
    }
    return position;
}

var stringToCheck = "My random string";
var character = "s";
console.log("position of the last occurrence is " + lastOccur(stringToCheck,character));  


/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]*/

function con(string) {
    var newArray = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newArray[i] = null;
        }
        else {
            newArray[i] = string[i];
        }
    }
    return arrayNew;
}

console.log(con('My random string'));               
    

/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

function prime(p) {
     var isPrime = true;
    for (var i = 2; i < 10; i++) {        //prime deljivo sa 1 i sa samim sobom
        if (p % i === 0 && p !== i) {
             isPrime = false;
             break; 
             }
    }
    return isPrime;
}
console.log("Is this a prime number? " + prime(12));



/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot;*/

function space(string,sep) {
    if (sep === undefined) {       // if -ako nije definisano
        var sep = '-';
    }
    var newString = ''
    for (var i = 0; i <string.length; i++) {
        if (string[i] === ' ') {
            newString += sep;
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(space('My random string'));  // nije def druga vrednost



/* 10. Write a function to get the first n characters and add “...” at the end of newly created string.*/

function string(m, n) {
    var newString = "";
    for (var i=0; i < n; i++) {
        newString += m[i];
    }
    newString += "...";
    return newString;
}
console.log(string("My random string", 9));



/*. 11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000]*/

function convertStrToNum(arrStr) {
    var strNum = [];
    var j = 0;
    for (var i = 0; i < arrStr.length; i++) {
        if (isFinite(parseFloat(arrStr[i]))) {
        strNum[j] = parseFloat(arrStr[i]);
        j++
        }
        // else {
        //   j = j
        // }
        //console.log('Element stringa ' + arrStr[i] + ' na poziciji i = ' +i + '\n');
        //console.log('Novi niz je ' + strNum + ' trenutna pozicija j = ' + (j - 1) + '\n');
    }
    return strNum;
}
console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity, '6']));


//console.log(parseFloat('12.5'));
//console.log(isFinite(parseFloat(undefined)));
//arrStr[6] = ["1", "21", undefined, "42", "1e+3", Infinity, '6']
//strNum[4] = [1, 21, 42, 1000, 6]

// pitati ?



/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/

function pension(birth, current, gender) {
    var ret;
    if (gender === "man") {
        ret = 65 -(current - birth);
    } else if (gender === "woman"){
        ret = 60 - (current - birth);
    } else {
        return " please check input";
    }
    if (ret > 0) {
        return ret + " years to retirement";
    } else {
        return " already retired";
    }
    return ret;

}
console.log(" for woman is " + pension(1980, 2021, "woman"));
console.log(" for man is " + pension(1984, 2021, "man"));


/* 13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
11 -&gt; 11th*/

// sve desetice dodaje se th
 // kad se zavrsava sa 1 st 
 // brojevi izmedju 4 i 19 th
 // % 2 nd
 // % 3 rd
    //n % 10 = 1 +st;
    //n % 10 = 2 +nd;
    //n % 10 = 3 +rd;
    //n % 10 = 4 +th;
    //n % 10 = 0 +th;
    //n = 11, 12, 13 +th;

 function redExcercise(n){
     var hum =0;
    if (n > 10 && n < 14){
        hum = n + 'th';
    }else {
    var ostatak = n % 10;
   switch (ostatak) {
       case 1:
           hum = n + 'st';
           break;
       case 2:
           hum = n + 'nd';
           break;
       case 3:
           hum = n + 'rd';
           break;
       case 4:
       case 0:
           hum = n + 'th';
           break;
       default:
           break;
   }
    }
    return hum;
   }
   console.log(redExcercise(13));
   // pitati ?

   





