var mixedArray = [3, true, 6, "neki string", null];
var numbers = [3, 6, 80];
console.log(mixedArray.length);

/* 1. Write an array of months in a year. Using console.log display June, October and January
from the array.*/

var monthsInYear = ["january", "february","march", "april", "may", "june", "july", "august", "semtember", "oktober", "november", "december"];
console.log(monthsInYear[5]+" "+ monthsInYear[9]+" "+ monthsInYear[0]);


/*Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var dayInWeek = ["monday", "Tuesday", "Wednesday","Thursday", "Friday", 'Saturday', "Sunday"];
console.log(dayInWeek [6]);


/* 3. Print all negative elements from the array [2, -4, 5, -2, -11].*/

var negativ = [2, -4, 5, -2, -11];
console.log(negativ[1],negativ[3],negativ[4]);


/* 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].*/

var divisibleBy3 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log("divisible by 3 are elements: "+ divisibleBy3[1], divisibleBy3[4], divisibleBy3[5],divisibleBy3[6], "and "+ divisibleBy3[8]);


/*What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.*/

var arr = [[1, 2, 1, 24], [8, 11, 9, 4,], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log("index of number "+arr[0][3], "is " + "[0][3]");
console.log(arr[2]);
console.log(arr[2][1]);
