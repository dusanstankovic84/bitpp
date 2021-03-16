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

/*Write a program that finds the first element larger than minimum and prints out its value.
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
console.log(arr[1]);/*
