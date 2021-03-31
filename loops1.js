console.log(test);
console.log(test2);

//3.loop

var sum = 0;
for ( var i = 0; i < 1000; i++ ) {
    //zelimo da proverimo da li je broj deljiv istovremeno sa 3 i sa 5
    //ako jeste taj broj dodamo sumi
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log(i); //odstamaj mi koji su deljivi sa 3 i sa 5
        sum += i;
    }
}
console.log(sum);
 
/* 1 Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/
 
for ( var i = 0; i <=15; i++) {
     if ( i === 0) {
         console.log( i + " even");
     } else if ( i % 2 === 0) {
         console.log( i + " even");
     } else {
         console.log(i + " odd");
     }
 }

 /* 3. Write a program to compute the sum and product of an array of integers.*/

 var array = [1, 2, 3, 4, 5];
 var sum = 0;
 var product = 1; // uvek u ovakvim zadacima
 for ( i = 0; i < array.length; i++) {
     sum += array[i];
     product *= array[i];
 }
console.log(sum);
console.log(product);

/* 4. Write a program which prints the elements of the following array as a single string.*/
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var elements = "\n";
for ( i = 0; i < x.length; i++){
 elements = elements + x[i];
 //elements = elements + "\n"
}
for (var x = 0; x <= 10; x++) {
    console.log(x * x);
console.log(elements);

5. /*Write a program that prints the elements of the following array.*/
var a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27]
        ];
var ele = " ";
for ( i = 0; i < a.length; i ++) {
    ele = ele + a[i];
    ele = ele + "\t";
}
console.log(ele);

6. /*Write a program that outputs the sum of squares of the first 20 numbers.*/
var zbir = 0;
for (var i = 0; i<=20; i++) {
    zbir = zbir + i * i;
}
console.log(zbir);

/* 7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.*/

var name = ["David", "Marko", "Dany", "John", "Thomas"];
var grade = [80, 77, 88, 95, 68];
var zbir1 = 0;
var prosek = 1;
 
for ( i = 0; i < grade.length; i++){
    zbir1 = zbir1 + grade[i];
    
    } 
    prosek = zbir1 / grade.length;
    console.log(prosek) 

if ( prosek < 60 ) {
    console.log("F");
} else if ( prosek < 70){
    console.log("D")
} else if (prosek < 80){
    console.log("C");
} else if (prosek < 90){
    console.log("B")
} else {
    console.log("A");

    /* 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/

for ( i = 1; i<=100; i++)  {
    if ( i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    } else if ( i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    } else if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}


for (i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 !== 0){
        console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0){
        console.log('Buzz');
    } else if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz');
    } else {
        console.log(i);
    } 
}

/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3; 
var a = [5, -4.2, 3, 7];
var rez = "no"
for ( i = 0; i < a.length; i++) {
    if ( e === a[i]) {
        rez = "yes";
    }
} 
console.log(rez);

var a = [5, -4.2, 18, 7];
var e = 3;
var rez = "no";
for ( i = 0; i < a.length; i++) {
    if ( e === a[i]) {
        rez = "yes";
    }
} 
console.log(rez);

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var array = [-3, 11, 5, 3.4, -8];

for ( i = 0; i < array.length; i++) {
    if ( array[i] > 0) {
        array[i]= array[i] * 2;
    }
}
console.log(array);

/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var array = [4, 2, 2, -1, 6];
var minimum = array [0];
var index = 0;
for ( i = 0; i < array.length; i++) {
    if ( array[i] < minimum) {
        minimum = array[i];
        index = i
    }
}
console.log(minimum, index);

/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/
var array = [4, 2, 2, -1, 6];
var min = array[0];
for (i = 0; i < array.length; i++){ //min vrednost trazena
    if (array[i] < min) {
        min = array[i];
    }
} 
console.log(min);

var secMin = array[0];
for ( j = 0; j < array.length; j++) { //sledeca min vrednost
    if (array[j] < secMin && array[j] !== min) {
        secMin = array[j]
    }
}
console.log(secMin)

/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/
var array = [3, 11, -5, -3, 2];
var sum = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum = sum + array[i];
        //sum += array[i] - moze i ovako
    }
}
console.log(sum);
    
/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/
var array = [2, 4, -2, 7, -2, 4, 2];
// var array2 = [3, 4, 12, 8];
var middleIndex = (array.length /2)  - 0.5;
var typeOfArray;

if (array.length % 2 === 0) {
    console.log("The array is not symmetric.")
} else {
    for (var i = 1; i <= middleIndex; i++){
        if (array[middleIndex - i] !== array[middleIndex + i]){
            typeOfArray = true;
        }
    }
    if (typeOfArray === true){
        console.log("The array is not symmetric.");
    } else{
        console.log("The array is symmetric.");
    }
}
// PITATI PONOVO

/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/
var array = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var m = [];
    m = array + "," + array2;
    console.log(m);

    for (i = 0; i < array.length; i++){
        m[m.length] = array[i];         // m.length odredjuje se duzina niza m
        m[m.length] = array2[i];
    }
    console.log(m);
     
/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var con = [];

for (i = 0; i < array1.length; i++){ //ovde se rade dve petlje jer ne znamo kolike su duzine nizovi
    con[con.length] = array1[i];
}
console.log(con);

for (j = 0; j < array2.length; j++){ 
    con[con.length] = array2[j];
}
console.log(con);

/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/
var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var newArray = [];
for ( i = 0; i < a.length; i++){
    if (a.length[i] !== e){
        newArray[newArray.length]= a[i];

    }
}
console.log(newArray);
// PITATI PONOVO


/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
var e = 78; 
var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
var a2 = [];
var j = 0;

if (p < a.length) {
    for (i = 0; i < a.length; i++){
        if (p === i) {
            a2[j] = e;
            a2[j + 1] = a[i];
            j += 2
        } else {
            a2[j] = a[i];
            j++
        }
    } 
} 
console.log(a2);
// PITATI PONOVO



