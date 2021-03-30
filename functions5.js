/* 1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function switchMinMAx(arr) {
    var min = arr[0];
    var max = arr[0];
    var indexMin;
    var indexMax;
    for ( i = 1; i < arr.length; i++ ) {
        if (arr[i] < min) {
            min = arr[i];
            indexMin = i;
        } else if ( arr[i] > max ) {
            max = arr[i];
            indexMax = i;
        }

    }
    arr[indexMin] = max;
    arr[indexMax] = min;
    return arr;
}
console.log(switchMinMAx([ 3, 500, 12, 149, 53, 414, 1, 19 ]));


/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element&#39;s value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function matemathicArr(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] / 2 + 5;
        if (arr[i] === 0) {
            arr[i] = 20;
        }
    }
    return arr;
}
console.log(matemathicArr([3, 500, -10, 149, 53, 414, 1, 19]));



/*  3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students&#39; names with their corresponding
grade. Use the following ranges:
51-60 -&gt; 6,
61-70 -&gt; 7,
71-80 -&gt; 8,
81-90 -&gt; 9,
91-100 -&gt; 10.
Input:
[ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam. */








/* 4. */

/* 5. */

/* 6. */


/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ &quot;M&quot;, &quot;Anne&quot;, 12, &quot;Steve&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, true, &quot;A&quot; ] */
//Output: AnStJoJoDaMa


function name(params) {
    
}



/* 8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */


/* 9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don&#39;t display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */


/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false */

function isPrimeNumb (numb) {
    var result = true;
    for (var i = 2; i < numb; i++) {
        if (numb % i === 0 && numb !== i ) {
            result = false;
        }
    }
    return result;
}
console.log(isPrimeNumb(9));



/* 11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true .*/

    // polindrom - citanje sa jedne i druge strane isto

function isPolindromn(string) {
    for ( var i = 0; i < string.length; i++) {
           var pom = string[string.length -1-i];
           if (string[i]===pom) {
                var pom1 = true;
           } else {
               pom1 = false;
           }
    }
    if (pom) {
        return "Is Polindrom"
    } else {
        return "IS not polindrom"
    }
}
console.log("String ", isPolindromn("eye"));



/* 12 Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9 */



