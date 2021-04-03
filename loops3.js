var i = 0;
while (i<10) {
    console.log(i);
    i++;
}

//Write a program that will iterate from 0 to 10 and display squares of numbers.

var x = 0;

while (x<=10) {
    console.log(x*x);
    x++
}
for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}
   
    

/* 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

var x = 0;

for (var x=0; x<=15; x++) {
    if (x % 2 == 0){
        console.log("even " + x);
    } else {
        console.log("odd " + x);
    }
}



/* 2. Write a program to sum the multiples of 3 and 5 under 1000.*/

var zbir = 0;

for (var x = 0; x<=1000; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        zbir = zbir + x;
    }
} console.log("zbir " + zbir);



/* 3.Write a program to compute the sum and product of an array of integers.*/

var arr = [1, 2, 3, 4, 5, 6, 7];
var treciClan = arr[2]
var zbir = 0;
var proizvod = 1;

for ( var x = 0; x<arr.length; x++) {
    zbir = zbir + arr[x];
    proizvod = proizvod * arr[x];
} 

console.log("zbir je " + zbir, "proizvod je " + proizvod);



/* 4. Write a program which prints the elements of the following array as a single string.*/

var x = ["1",  "A", "B", "c", "r", true, NaN, undefined];
var singleString = "";

for ( i = 0; i < x.length; i++){
    singleString = singleString + " " + x[i];
} 

console.log(singleString);



/* 5. Write a program that prints the elements of the following array.*/

var elemetiNiza = "";
var a = [
    [1, 2, 1, 24],
    [8, 11, 9,  4],
    [7, 0, 7, 27]
];


for ( i = 0; i < a.length; i++) {
    for ( b = 0; b < a[i].length; b++) {
        elemetiNiza = elemetiNiza + " " + a[i][b];
    }
}
console.log(elemetiNiza);



/*6. Write a program that outputs the sum of squares of the first 20 numbers.*/

var f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var countF = 0;
var sumSqr = 0;

while (countF < 20) {
    console.log('Current number is ' + f[countF]);
    sumSqr = sumSqr + (f[countF]*f[countF]);
    console.log('The square is: ' + (f[countF]*f[countF]) + ' \n --- Loop back ---');
    countF++;
}

console.log('The sum of squares is: ' + sumSqr);

var s = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var gradeSum = 0;

for (var  i = 0; i < s.length; i++) {
    gradeSum = gradeSum + s[i][1];
}

var average = gradeSum/s.length;


/*7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
David 80
Marko 77
Dany 88
John 95
Thomas 98
The grades are computed as follows :
< 60% F
< 70% D
< 80% C
< 90% B
< 100% A */

if (average < 60) {
    console.log('The grade is F');
}
else if (average < 70) {
    console.log('The grade is D');
}
else if (average < 80) {
    console.log('The grade is C');
}
else if (average < 90) {
    console.log('The grade is B');
}
else if (average < 100) {
    console.log('The grade is A');
}



/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).*/


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log('Number: ' + i);
    }
}