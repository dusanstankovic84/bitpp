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


