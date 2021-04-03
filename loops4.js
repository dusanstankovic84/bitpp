//Dario 

// Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var arr = [4, 2, 2, -1, 6]
var  min = arr[0]
var nextMin = arr[0];

for (var i = 1; i < arr.length; i++) {
	if (min > arr[i]) {
		min = arr[i];
	}
}
for (var i = 1; i < arr.length; i++) {
	if (nextMin > arr[i] && arr[i] !== min) {
		nextMin = arr[i];
	}
}

console.log(nextMin)


//marina
var a = [4, 5, 6];
var b = [3, 8, 11, 9];
var c = [];
var y = 0;
for (x=0; x<a.length+b.length; x++) {
    if (x<a.length) {
        c[x] = a[x]; 
    } else {
        c[x] = b[y]; 
        y++;
    }
}
console.log(c);



// Write a program that intertwines two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var arrA = [4, 5, 6, 2]
var arrB = [3, 8, 11, 9, 3]
var maxlength = arrA.length > arrB.length ? arrA.length : arrB.length
var arrResult = []

for (var i = 0; i < maxlength; i++) {
	if (arrA[i]) {
		arrResult[arrResult.length] = arrA[i];
	}
	if (arrB[i]) {
		arrResult[arrResult.length] = arrB[i];
	}
}
console.log(arrResult);




//dario
var arr = [22, 2, 5, 55, 5];
var e = 78;
var p = 3;
var newArray = [];
for (var i = 0; i < arr.length; i++) {
	if (i === p) {
		newArray[p] = e;
	}
	newArray[newArray.length] = arr[i];
}
console.log(newArray);


//
var arr = [22, 2, 5, 55, 5, 4, 22];
var isSym = true;
for (var start = 0, end = arr.length - 1; start < end; start++, end--) {
	if (arr[start] !== arr[end]) {
		isSym = false;
	}
}
console.log(isSym

//dimitrije

var result = 2 > 10 ? 'two' : 5 > 3 ? 'five' : 'three';
console.log(result);
//a sada duza varijanta
if (2 > 10) {
    result = 'two';
} else {
    if (5 > 3){
        result = 'five';
    } else {
        result = 'three';
    }
}
console.log(result);
if (2 > 10) {
    result = 'two';
} else if (5 > 3) {
    result = 'five';
} else {
    result = 'three';
}
console.log(result);
//proveriti da li je niz simetrican
var arr = [22, 4, 5, 5, 4, 22]
var isSym = true; //krecemo iz predpostavke da jeste simetrican
for (var start = 0, end = arr.length - 1; start < end; start++, end--){
    if(arr[start] !== arr[end]) {  //uslov nije jednako
        isSym = false;
    }
}
console.log(isSym ? 'niz jeste simetrican' : 'niz nije simetrican');
//kako da automatski dodamo novu vrednost na poslednje mesto niza
var arr = [22, 2, 5, 55, 5, 4, 22, 33, 444];
arr[arr.length] = 44;  //dodali smo vrednost 44 na kraj niza
console.log(arr);
//ubacivanje clana (e) na odredjeno (p) mesto
var arr = [22, 2, 5, 55, 5];
var e = 78;
var p = 3; //nov br
var newArray = []; // nmov niz koji je trenutno prazan
for (var i = 0; i < arr.length; i++){
    if (i === p) { //da li je index jednak sa i
newArray[p] = e;
    }
    newArray[newArray.length] = arr[i]; //bildujemo novi niz i dodajemo element na poslednje mesto
}
console.log(newArray);