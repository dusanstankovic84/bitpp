var name="Dusan";
console.log(name)

//vezba week1

var banana = 1.2;
var bananaInGrams = 0;
var kilogramInGrams = 1000;
bananaInGrams = banana * kilogramInGrams;
console.log(bananaInGrams);

var minutInSecond = 60;
var annaIsLateInMinutes = 5;
var annaIslateInSeconds = minutInSecond * annaIsLateInMinutes;
console.log("anna is late: "+ annaIslateInSeconds+" seconds");

a = 5;
a = a*2;
console.log(a);
b = 5;
b *=2;
console.log(b);
var haveCat = true;
console.log(haveCat);
console.log(typeof haveCat);
console.log(typeof "false");

var age = -121;
var isAgeValid;
/*if (age>120){
    isAgeValid = false;
    console.log("age is over 120");
} else if (age<0) {
    isAgeValid = false;
    console.log("age is negativ");
} else {
    isAgeValid = true;
} */

if (age<120 && age>0) {
    isAgeValid = true;
} else {
    isAgeValid = false;
}
console.log(isAgeValid);

var speed = 140;
var isDrivingSafely;
/*if (speed>60 && speed<120) {
    isDrivingSafely = true;
} else {
    isDrivingSafely = false;
} */

(speed>60 && speed<120) ? isDrivingSafely = true : isDrivingSafely = false;


console.log(isDrivingSafely);

/*var m = 1;
var n = 2;
if(m > n) {
    console.log("Larger Number: " + m);
} else {
    console.log("Larger Number: " + n);
}*/

//var v = 3;
//var v = 4;
//var v = 9; 

/*if (v % 2 === 0) {
    console.log("even");
} else {
    console.log ("odd");
}

var x = 15;
if (x % 3 === 0 && x % 5 === 0) {
    console.log(x);
}*/

var x = 3;
var c = 1;
var v = 2;
var result = x * c * v;
if (result > 0) {
    console.log("the sign is '+' ");
} else if (result < 0) {
    console.log("the sign is '-' ");
} else {
    console.log("result is 0")
}


/*var a,b,c,d,e;
var max;

var niz = [-5,-2,5,0,-1];
for (let index = 0; index < niz.length; index++) {
    if(index == 0){
        max = niz[index];
    }else if(niz[index] > max){
        max = niz[index];
    }
}
console.log(max);*/

