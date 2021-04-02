/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

function givenElement(){
    
    result = "no"
    
    for ( var i = 0; i < a.length; i++) {
        if ( a[i] === e) {
            return "yes";
        } 
    }
    
    return result; 
}

var a = [5, -4.2, 3, 7];
var e = 3

console.log(givenElement(a, e));



/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

function multipleElem() {
    
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] > 0){
            arr[i] *= 2;
        }
    }
    return arr;
}

var arr = [-3, 11, 5, 3.4, -8];

console.log(multipleElem(arr));

/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

function minimumValue(arr) {
    
    var min = '';
    var index = '';
    var result = '';
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++)
            if (arr[i] > arr[j]) {
                min = arr[j];
                index = j;
            }
    }
    
    result = min + ', ' + index;
    return result;
}

console.log(minimumValue([4, 2, 2, -1, 6]));

/* 4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function secSmall(arr) {
   
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++)
            if (arr[i] < arr[j]) {
                res = arr[i];
               arr[i]=arr[j];
               arr[j]=res;
            
            }
    }
    return arr[1];
}

console.log(secSmall([4, 2, 2, -1, 6]));


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

function sumOfPos(arr) {
    
    var result = 0;
    
    for (var i = 0; i < arr.length; i++){
        if ( arr[i] >= 0) {
            result += arr[i];
        }
    }

    return result;
}

var arr = [3, 11, -5, -3, 2];

console.log('The sum of positive elements is ' + sumOfPos(arr));


/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
 Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/


function isSymmetric(arr) {
    
    var pom = false;
    
    for (var i = 0; i < arr.length; i++) {
        var x = arr[arr.length - 1 - i];   // code za trazenje simetrije
        if (arr[i] === x) {
            pom = true
        }
    }
    if (pom) {
        return 'The array is symetric'
    } else {
        return 'The array is no\'t symetric'
    }
}

console.log(isSymmetric([2, 4, -2, 7, -2, 4, 2]));



/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

function intw2arr() {
    
    var intw = [];
    
    for (var i = 0; i < arr1.length; i++) { 
        intw[intw.length] = arr1[i];              // za prepletanje
        intw[intw.length] = arr2[i];            
    }
    
    return intw;
}

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];

console.log(intw2arr(arr1, arr2));



/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function cont2Arr() {
    
    cont = [];
    
    for (i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {      //za spajanje
            cont[i] = arr1[i];        
            cont[j + arr1.length] = arr2[j];
        }
    }

    return cont;
}

var  arr1 = [4, 5, 6, 2];
var  arr2 = [3, 8, 11, 9];

console.log(cont2Arr(arr1, arr2));



/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function delGivenEle() {
    
    var del = [];
    
    for (var i = 0; i < arr.length; i++) {          // za brisanje  elem u nizu  
        if (arr[i] !== e) {
            del[del.length] = arr[i];
        }
    }
    
    return del;
}

var arr = [4, 6, 2, 8, 2, 2];
var e = 2;

console.log(delGivenEle(arr, e));



/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insertElem (arr, position, element) {
    
    arr1 = [];
    
    if (position > arr.length) {                        // za uabcivanje elemenat u odredjenu poziciju
        pom = 'Position is greater then array'
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (i === position) {
                arr1[i] = element;
            }
            arr1[arr1.length] = arr[i]
        }
    } 

    return arr1;
}

var arr = [2, -2, 33, 12, 5, 8];
var position = 3;
var element = 78;

console.log(insertElem(arr, position, element));