

/* 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
&quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
&quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;*/

function string(m,s,n) {
    
    var newString = "";
    
    for (var i = 0; i < m.length; i++){
        if (i === n-1) {
            newString += m[i] + s;
        } else {
            newString += m[i];
            
        }
        
    } 
    
    return newString;
}

console.log(string("My random string", "js ", 10));

//sladjana
function insert(string, ins, position){
    
    var newString = "";
    
    if (position === undefined){
        position = 0;
    }
    for (var i = 0; i < string.length; i++){
        if (i !== position){
            newString += string[i]; 
         } 
        else{
            newString += ins; 
            newString += " ";
            newString += string[position];
        }
    }
    
    return newString;
}

console.log(insert("My random string", "JS", 10));


/* 2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] */

function skipElem(inputArray) {
    
    newString = '';
    
    for (var i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i]) || inputArray[i] === undefined || inputArray[i] === null || inputArray[i] === Infinity) {  // za izbegavanja elemnata
           
        } else {
            newString += inputArray[i];
        }
    }
    
    return newString;
}

console.log(skipElem([NaN, 0, 15, false, -22, '', undefined, 47, null]));



/* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]*/

function falsyValues(array) {
    
    newString = [];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newString[newString.length] = array[i];
        }
    }
    
    return (newString.length === 0) ? 'All falsy values is in array' : newString;     // filtriranje falsy vrednosti
}

console.log(falsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));



/* 4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number */

function reversNumb(number) {
    
    var str = '' + number;
    var str1 = '';
    
    for (var i = str.length - 1; i >= 0 ; i--) {   // za okretanje brojeva
        str1 += str[i];
    }
    
    return parseFloat(str1);
}

console.log(reversNumb(12345));



/* 5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -&gt; -2
[7, 9, 0, -2], 2 -&gt; [0, -2] */

function lastN (arr, n) {
    
    var lastArr = [];
    
    if (n === undefined) {
        lastArr[0] = arr[arr.length-1];
    } else {
        j = 0;
        for (var i = arr.length-n; i< arr.length; i++) {
            lastArr[j] = arr[i];
            j++
        }
    }
    
    return lastArr;
}
console.log(lastN([7, 9, 0, -2], 2));



/* 6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null] */

function specificNumberOfItems(n, p) {
    
    var array = [];
    
    for (var i = 0; i < n; i++) {
        if (p === undefined) {
            array[i] = null;
        } else {
            array[i] = p;
        }
    }
    
    return array;
}

console.log(specificNumberOfItems(6));
//pitati?



/* 7. Write a function that says whether a number is perfect.
28 -&gt; 28 is a perfect number. 
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.*/

function isPerfectNumb(p) {
    
    var sum = 0;
    
    for ( var i = 1; i < p; i++) {
        if ( p % i === 0) {
            sum += i
        }
    }
    
    return (sum === p);
}

var numb = 456;

console.log("Is " + numb + " a perfect number? " + isPerfectNumb(numb));



/* 8. Write a function to find a word within a string.
&#39;The quick brown fox&#39;, &#39;fox&#39; -&gt; &quot;&#39;fox&#39; was found 1 times&quot;
&#39;aa bb cc dd aa&#39;, &#39;aa&#39; -&gt; &quot;&#39;aa&#39; was found 2 times&quot; */

function findWord(string, word) {
    
    var count = 0;
    var res = '';
    string += ' ';
    
    for (var i = 0; i < string.length; i++) {    
        if (string[i] !== ' ') {
            res += string[i];
        } else {
            if (res === word) {
                count++;
            } else {
                res = '';
            }
        }
    }
    
    return count;
}

var string = 'aa bb cc dd aa';
var word = 'aa';

console.log(word, 'was found ', findWord(string, word), 'times');



/* 9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot; */

function hideEmail(email){
    
    str = '';
    pom = '';
    
    for (i = 0; i < email.length; i++){
        if (i < 3 ){
            str += email[i];
            pom = str;
        }else if (email[i] === '@'){
            pom += '...' + email[i]
            str = pom;
        }else{
            str += email[i];
        }

    }
    
    return str
}

console.log(hideEmail('myemail@bgit.rs'));



/* 10. Write a program to find the most frequent item of an array.
[3, &#39;a&#39;, &#39;a&#39;, &#39;a&#39;, 2, 3, &#39;a&#39;, 3, &#39;a&#39;, 2, 4, 9, 3] */

function mostFreq(array) {
   
    var res = [];
    var numberOfsame = 1;
    var counter = 0
    
    for (var i = 0; i < array.length; i++) {                      //najcesce trazeni u nizu
       
        for (var j = 1; j < array.length; j++) {
           
            if (array[i] == array[j]) {
                counter++;
            }
            if (numberOfsame < counter) {
                res = array[i];
                numberOfsame = counter;
            }
        }
        counter = 0;
    }
    
    return res;
}

console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
// pitati?





