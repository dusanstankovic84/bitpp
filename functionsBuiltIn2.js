// push
var someArray = [12, 33, 44]
var newLength = someArray.push(22, 33, 44);
console.log(someArray);
console.log(newLength);
// pop
var someArray = [12, 33, 44]
var deletedElement = someArray.pop();
console.log(someArray);
console.log(deletedElement);
// unshift
var someArray = [12, 33, 44]
var newLength = someArray.unshift(50, 41);
console.log(someArray);
console.log(newLength);
// shift
var someArray = [12, 33, 44]
var deletedElement = someArray.shift();
console.log(someArray);
console.log(deletedElement);
// indexOf
var someArray = [12, 33, 44, 33]
if (someArray.indexOf(33) !== -1) {
    console.log('postoji');
} else {
    console.log('ne postoji');
}
// includes
var someArray = [12, 33, 44, 33]
if (someArray.includes(123)) {
    console.log('postoji');
} else {
    console.log('ne postoji');
}
// slice
var someArray = [12, 33, 44, 33, 333, 55];
var chopped = someArray.slice(2, 4);
console.log(chopped);
console.log(someArray);
// toString
var someArray = [12, 33, 44, 33, 333, 55];
var string = someArr
