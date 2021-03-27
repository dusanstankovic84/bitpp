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

function string(m,n) {
    var newString = "";
    for (var i = 0; i < m.length; i++){
        if (i === n-1) {
            newString += "JS ";
        } else {
            newString += m[i];
            
        }
        
    } 
    
    return newString;
}

console.log(string("My random string", 1));