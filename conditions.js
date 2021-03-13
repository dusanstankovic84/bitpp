/* 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/
var a = 3;
var b = -7;
var c = 2;
var result;
if ((a + b + c) > 0) {
    result = "the sigh is +";
} else {
    result = "the sigh -";
} console.log(result);

/* 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
 if (a > b && a > c && a > d && a > e) {
     console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
    } else if (c > a && c > b && c > d && c > e) {
        console.log(c);
    } else if (d > a && d > b && d > c && d > e) {
        console.log(d);
    } else { 
        console.log(e);
    }

/* 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/
var a = 4, b = 0, c = -1;
if ( a > b && a > c && b > c) {
    console.log(a, b, c);
} else if (b > a && b > c && a > c ) {
    console.log(b, a, c);
    } else {
        console.log(c, a, b);
    }

/* 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X*/
var a = 10;
var result;
if (typeof a === "number") {
    if (a % 2 == 0) {
        result = a / 2;
 }
} else { 
        r*esult = "X";
 } console.log(result);
//verzija 2
var a = 10;
var result;
if (typeof a === "number" && a % 2 === 0) {
    console.log(result = a / 2);
}
else {
   console.log(result = "X");
}

/* 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/
var a = 6;
var b = 7;
if ( a > b) {
    console.log(a);
} else {
    console.log(b);
}

/* 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F**/
var c = 60;
f = (9*c/5)+32;
console.log(f + " °F");

var f = 140;
c = (f -32) * 5/9;
console.log(c + " °C");

/* 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/
var a = 11;
var b = 32;
var c = 13;

if (a > c){
   console.log("false");
} else{
   console.log(2);
}

if (b > c) {
   console.log((b-c)*2);
} else {
   console.log("false");
}

/* 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/
var a = 12;
var b = 5;
var result = a + b;
if (a===b){
console.log("true");
} else {
console.log(result);
}

var a = 8;
var b = 8;
var result = a + b;
if (a===b){
 console.log(result*3);
} else {
console.log("fasle");
}


/* 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
Output : -   Output : true    Output : true*/
var a = 5;
var b = 54;
var c = 50;
var d = a+b;
if ( a===c || b===c || d===c){
   console.log("true");
} else {
   console.log("-")
}

var a = 6;
var b = 50;
var c = 50;
var d = a + b;
if (a===c || b===c || d===c){
   console.log("true");
} else{
   console.log("-");
}

var a = 40;
var b = 10;
var c = 50
var d = a+b;
if (a===c || b===c || d===c) {
   console.log("true");
} else {
   console.log("-");
}


/* 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13   Sample Input: 34   Sample Input: 256
Output : -   Output : 20 ⇔ 100   Output : 100 ⇔ 400*/
var a = 13;
var b = 34;
var c = 256;
if (a>=20 && a<=100){
   console.log("20-100");
} else if (a>=100 && a<=400) {
   console.log("100-400");
} else{
   console.log("-");
}

if (b>=20 && b<=100){
   console.log("20-100");
} else if (b>=100 && b<=400) {
   console.log("100-400");
} else{
   console.log("-");
}

if (c>=20 && c<=100){
   console.log("20-100");
} else if (c>=100 && c<=400) {
   console.log("100-400");
} else{
   console.log("-");
}
