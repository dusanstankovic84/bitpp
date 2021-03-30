/* 1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000] */

function convertStrToNum(arrStr) {
    var strNum = [];
    var j = 0;
    for (var i = 0; i < arrStr.length; i++) {
        if (isFinite(parseFloat(arrStr[i]))) {
        strNum[j] = parseFloat(arrStr[i]);
        j++
        }
    }
    return strNum;
}
console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity]));




/* 2.Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247” */

function arrIntoStr(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && typeof arr[i] !== "object") {
            str += arr[i];
        }
    }
    return str;
}
console.log(arrIntoStr([NaN, 0, 15, false, -22, "",undefined, 47, null]));



/* 3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47] */

function filterFalsy(arr) {
    
}
console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));
//pitati



/* 4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3 */

function numbOfInteger(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (isFinite(parseInt(arr[i]))) {
            sum++;
        }
    }
    return sum;
}
console.log(numbOfInteger([NaN, 23.1, 15, false, -22.5,"", 4, 7, null]));
//pitati



/* 5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2 */

function floatValues(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (isFinite(parseFloat(arr[i]))) {
            sum++;
        }
    }
    return sum;
}
console.log(floatValues([NaN, 23.1, 15, false, -22.5,"", 4, 7, null]));
//pitati
