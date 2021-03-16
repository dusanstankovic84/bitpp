var a = 6;
var tip = typeof a;
console.log(tip)

var nekiBroj = 12e+5
console.log(nekiBroj)

var max = 1e+309
console.log(typeof max)

console.log(typeof NaN)
Number.isNaN(NaN)

var result = 1+ "12";
console.log(result)

var nesto = 43;
nesto = "fff"o

nesto = true
if (nesto)
console.log("hello world")
//coercion
\t uvuceno za tab
\n novi red

console.log(3 === 3)

var a = 22;
if (a>5) {
    console.log ("cao")
}

//vezba
var isLoggedIn = false;
var isAdmin = false;

//first case
if (isLoggedIn) {
	console.log('ulogovan je')
}

//second case
if (isLoggedIn) {
	console.log('ulogovan je')
} else {
	console.log('nije ulogovan')
}

//third case
if (isLoggedIn) {
	console.log('ulogovan je')
} else if (isAdmin) {
	console.log('administrator je')
} else {
	console.log('nije nista')
}

isLoggedIn ? console.log('ulogovan je') : console.log('nije ulogovan');


var a;
var number = 12;

if (number > 0) {
	a = 'pozitivan';
} else {
	a = 'negativan';
}

a = (number > 0) ? 'pozitivan' : 'negativan';

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


var a,b,c,d,e;
var max;

var niz = [-5,-2,5,0,-1];
for (let index = 0; index < niz.length; index++) {
    if(index == 0){
        max = niz[index];
    }else if(niz[index] > max){
        max = niz[index];
    }
}
console.log(max);

