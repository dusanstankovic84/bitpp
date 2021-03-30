// 13.f2 resenje Kuzmic:

function redExer(n) {
    var str = "" + n;
    if (str[str.length -1] >= 1 && str[str.length - 1] <= 3 && str[str.length - 2] == 1) {
        str += "th";
    } else if (str[str.length -1] == 2) {
        str += "nd";
    } else if (str[str.length -1] == 3) {
        str += "rd";
    } else if (str[str.length -1] == 1) {
        str += "st";
    } else {
        str += "th";
    }
    return str;
}
console.log(redExer(211)); //???

//dario:
function humanizeNumber(num) {
    // if   (typeof num == "undefined") {   //ogradjivanje
    // return;
    //}
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
    }
    return num + "th";
}

console.log(humanizeNumber(200011));

var a = 10000012 % 100;   //zadnje 2  a sa %10 zadnja
console.log(a);


// dario predavanja 
function sum(p) {    //jedan isti kod na vise mesta
return arguments;
}


function sum() {
    var sum = 0;
    for (i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum;
}
var result = sum(23,45,4);
console.log(result);


function isEvan(num) {
      return num % 2 === 0;
}



function isInArray(arr, el) {
    for (var i=0; i < arr.length;i++){
        if (arr[i] === el){
            return true;
        }
    }
    return false;
}


function countElArr(arr, el) {
    var count = 0;
    for (var i=0; i < arr.length;i++){
        if (arr[i] === el){
            count++;
        }
        //console.log("trenutno i je: " + i + " trenutno count je: " + count );
    }
    return count;
}

var arr = [1,2,3,1,4,1,5];
var el = 1;
var result = countElArr(arr,el);
console.log(result);


//11. f2- Dario
function convertStrToNum(arrStr) {
    var strNum = [];
  
    for (var i = 0; i < arrStr.length; i++) {
        var conv = parseFloat(arrStr[i]);
        if (isFinite(conv)) {
            strNum[strNum.length] = conv;
           }
    }
    return strNum;
}
console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity, '6']));

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

/* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]*/

/* 4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number */

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



