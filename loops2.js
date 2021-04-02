/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3;
var a = [5, -4.2, 3, 7];
/*var e = 3;
var a = [5, -4.2, 18, 7];*/
 
for ( i = 0; i < a.length; i++){
     if ( a[i]  === e ){
        console.log("yes");
     } 
}

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var arr = [-3, 11, 5, 3.4, -8];
for (i = 0; i < arr.length; i++) {
    if ( arr[i] > 0) {
       arr[i] *=2;
    }
} ;
console.log(arr);

/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var arr = [4, 2, 2, -1, 6];
var minimum;
var rezultat;

for (i = 0; i < arr.length; i++) {
    if (i === 0) {
        minimum = arr[i];
        rezultat = [arr[i], i ];
    } else {
        if ( minimum > arr[i]) {
            minimum = arr[i];
            rezultat = [arr[i], i ];
        }
    }
}
console.log(minimum);
console.log(rezultat);



/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

//arr = [4, 2, 2, -1, 6];

// for (i = 0; i < arr.length; i++){
//     if ( i===0 ) {
//         minimum = arr[i];

//      }else if(i == 1){
//        if (arr[i] > minimum){

//        }
        
//         } else {
//             if ( minimum > ar[i]) {
//                 minimum = arr[i];
        
//             }
//     }
// }


/*arr = [4, 2, 2, -1, 6];
arr.sort();
console.log(arr[1]);*/

var n = [4, 2, 2, -1, 6];
var min = n[0];                                                 

for (var i = 0; i < n.length; i++) {                             
    if (n[i] < min) {                                                            
        min = n[i];
    }
}

var nextMin = n[0];                                              
for (var j = 0; j < n.length; j++) {                            
    if (n[j] < nextMin && n[j] !== min) {                       
        nextMin = n[j];                                          
    }
}
console.log('The first element larger then the minimum (' + min + ') is: ' + nextMin);
console.log('\n\n');


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/
var pos = [3, 11, -5, -3, 2];
var sumPos = 0;
for (var k = 0; k < pos.length; k++) {                      
    if (pos[k] >= 0) {
        sumPos = sumPos + pos[k];
    }
}

console.log('The sum of positive elements is ' + sumPos);

/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/
var leftArr = [2, 4, -2, 7, -2, 4, 2];
var rightArr = [];
var countEq = 0;                                                

for (var i = 0; i < leftArr.length; i++) {                      
    rightArr[i] = leftArr[leftArr.length-1-i];      // code za trzenje simetrije            
}
//console.log(leftArr);
//console.log(rightArr);

for (var j = 0; j < leftArr.length; j++) {                      
    if (leftArr[j] === rightArr[j]) {
        countEq = countEq + 1;                                  
    }
}
if (countEq === leftArr.length) {                               
}
else {
    console.log('The array isn\'t symmetric.');
}


/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/
var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var intw = [];

for (var i = 0; i < arr1.length; i++) { 
    intw[intw.length] = arr1[i];
    intw[intw.length] = arr2[i];            
}
console.log('Intertwined array is ');
console.log(intw);

/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/
c1 = [4, 5, 6, 2];
c2 = [3, 8, 11, 9];
cres = [];

for (var i = 0; i < c1.length; i++) {                    
    cres[i] = c1[i]; 
}

for (var j = 0; j < c2.length; j++) {                    
    cres[c1.length + j] = c2[j];
}
console.log('Concatenated array is: ');
console.log(cres);

/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var delA = [];

for (var i = 0; i < a.length; i++) {              
    if (a[i] !== e) {
        delA[delA.length] = a[i];
    }
}
console.log('Array after deletion is: ');
console.log(delA);


console.log('\n\n');


/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var b = [];

if (p < a.length) {                                      
    for (var i = 0; i < a.length && i <= p; i++) {      
        if (p === i) {
            b[i] = e;
        }
        else {
            b[i] = a[i];
        }
    }
    for (var j = 0; j < a.length - p; j++) {           
    }
    console.log('The new array is: ')
    console.log(b);
}
else {
    console.log('Position error.');
}

