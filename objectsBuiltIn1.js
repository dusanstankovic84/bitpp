//Try to use built-in object methods to solve some of the problems here



/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */


var arr = [2, 4, 7, 11, -2, 1];

var builtInFunc = function (accumulator, currentValue) {
    accumulator.push(currentValue, currentValue)
    return accumulator;
}

console.log(arr.reduce(builtInFunc,[]));

//

function duplicates (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    return newArr;
}
console.log(duplicates([2, 4, 7, 11, -2, 1]));




/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicate (i) {
    
    return i.filter (function (value, index) {
        return i.indexOf(value) === index;
    });
}

var newArr = removeDuplicate(arr);
console.log(newArr.sort(function(a, b) {
    return a - b;
  }));



/* 3.

a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.

Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */


/* a) */

function checkOddNum (arr) {
    
    var newArr = arr.filter (function (a) {
        return a % 2 !== 0;
    })
    if (newArr.length > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkOddNum([1, 2, 9, 2, 1]));


/* b) */

function countElLessMiddleEl (arr) {
    
    if (arr.length % 2 === 0) {
        return 'ERROR';
    } else {
        return Math.ceil(arr.length / 2);
    }
}
console.log(countElLessMiddleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));




/* 4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */


/* 5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it. */


/* 6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase. */


/* 7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d). */


/* 8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days */


/* 9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds */


/* 10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
b. Write a function that calculates the distance between two points in the space. */


/* 11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function. */



/* 12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]

Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array) */