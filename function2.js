// predavanje dario - 5.

function makeSquare(n) {
    var result = "";
    var space = " ";
    var star = "*";
    var newLine = "\n";
    
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            if (i === 0 || i=== n-1 || j === 0 || j === n-1){
                result += star;
            } else {
                result += space;
            }
        }
        
        result += newLine;
    }
    return result;
}
console.log(makeSquare(5));


// dario - 6.

function makeChart(s) {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
}
console.log(makeChart(5, 3, 7));

//bult in function

var result = parseInt("333");

console.log( typeof result);


var result = parseFloat("3.333");

console.log(result);


var result = parseFloat('3.44');
if (typeof result === 'number' && !isNaN(result)) {
	console.log('suceeded')
} else {
	console.log('failed')
}


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







