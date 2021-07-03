" use strict"


/* 1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ["hello", "there", "ES&", 6]
Output: ["Hello",""There", "ES"] */

let array = ["hello", "there", "ES", 6];
let newArray = [];


const capitalize = (array) => {
    array.forEach(element => {
        if (typeof element === "string") {
            newArray.push(element.charAt(0).toUpperCase() + element.slice(1, element.length))
        }
    })
    return newArray;
}

console.log(capitalize(array));




/* 2. Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only */

const products = [
    { name: "Banana", price: 120.23, date: new Date() },
    { name: "Orange", price: 100, date: new Date() }
]

const productsWithTax = products.map(product => {

    const { price: prodPrice } = product;

    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }

    return newProd
})

console.log(products);
console.log(productsWithTax);




/* 3. Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1] */

let array = [4, 6, 11, -9, 2.1];
let value;
let newArray = [];

const increase = (array, value) => {
    if (!value) {
        array.forEach(element => {
            newArray.push(element + 1)
        });

    } else {
        array.forEach(element => {
            newArray.push(element + value);
        });

    }

    return newArray;
}

console.log(increase(array, 2));


/* 4. Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0] */

let array = [6, 11, 9, 0, 3];


const filter = (array) => array.filter(element => element % 2 === 0);
    


console.log(filter(array));



/* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: [&#39;compiler&#39;, &#39;transpiler&#39;, &#39;babel.js&#39;, &#39;JS standard&#39;, &#39;linter&#39;]
Output: [&#39;babel.js, &#39;JS standard&#39;] */

const array = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
let newArray = [];

let filter = array =>  array.filter(element => {
       
})
   

let arrayCopy = [...array];


console.log(filter(array));


/* 6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]

Output: [7, 8] */


/* 7. Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
Output: [45, 553] */


/* 8. Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: 1, 2, 5 */


/* 9.
a. Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20. */



/* 10. Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no */


/* 11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48 */


/*12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8 */