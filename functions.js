
// https://www.freecodecamp.org/
// http://ittutorijali.net/
// https://code.sololearn.com/#html
// https://www.geeksforgeeks.org/java-how-to-start-learning-java/
// https://codegym.cc/?utm_source=learntocodewith.me&utm_medium=post
// https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.ROW&utm_term=_._ag_80315195513_._ad_450687451854_._de_c_._dm__._pl__._ti_kwd-310556426868_._li_21213_._pd__._&utm_term=_._pd__._kw_udemy_._&matchtype=e&gclid=Cj0KCQjwmcWDBhCOARIsALgJ2QfaOFxM4Zdxe66ETklStOByhnyl85dOsK8WRC-1LW5gNlWxqTTywkEaAvS_EALw_wcB
// https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA
// https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA
// https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ
// https://webeducentarns.web.app/#/
// http://diveintohtml5.info/
// https://w3resource.com/html/HTML-tutorials.php

// knjiga: Ved Antani, Stoyan Stefanov - Objektno orijentisani JavaScript
// https://www.delfi.rs/knjige/117209_objektno_-_orijentisan_javascript_knjiga_delfi_knjizare.html



// 

var array = [1, 2, 3, 4, 5, 6];
var mapHandler = function(num) {
	return num * 10;
}

var mappedArray = array.map(mapHandler);


var filteredArray = array.filter(function(number) {
	return number%2 === 0;
})

console.log(mappedArray);
console.log(filteredArray);



// 



function modifyNumber(number, modification) {
	var result = modification(number);
	return result;
}

function duplicateNumber(n) {
	return n * 2;
}

function square(n) {
	return n * n;
}

var output = modifyNumber(100, square);
console.log(output);

function calculator(num1, num2,  operation) {
	var result = operation(num1, num2);
	return result;
}

function multiplication(n1, n2) {
	return n1 * n2;
}

function addition(n1, n2) {
	return n1 + n2;
}
var output = calculator(100, 200, addition);
console.log(output);







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


var result = parseFloat("3.333sds");

console.log(result);


var result = parseFloat('3.44');
if (typeof result === 'number' && !isNaN(result)) {
	console.log('suceeded')
} else {
	console.log('failed')
}



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
    var strNum = [];                                   // za convertiranje stringa u broj
  
    for (var i = 0; i < arrStr.length; i++) {
        var conv = parseFloat(arrStr[i]);
        if (isFinite(conv)) {
            strNum[strNum.length] = conv;
           }
    }
    return strNum;
}
console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity, '6']));


// kokatiniramo - spajamo dva stringa














































