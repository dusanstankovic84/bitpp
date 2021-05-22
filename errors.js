// try and catch

console.log("prva linija koda");


try {
    var a = 5;
    var b = 6;
    var result = a + b;
} catch (error) {
    console.log(error);
}

console.log(result);


try {
    var a = 5;
    dusan
    var result = a + b;
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.massage);
}


//  with throw konstruktor

try {
    var number = "string";
    if (typeof number !== "number") {
        throw new Error("greska");
    }

} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.massage);
}


// with throw objekat

try {
    var number = "string";
    if (typeof number !== "number") {
        throw {
            name: "dusan",
            massage: "stankovic",
        }
    }

} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.massage);
}


// with finally

try {
    var a = 5;
    dusan
    var result = a + b;
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.massage);
} finally {
    console.log("reseno");
}




