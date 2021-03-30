// predavanje

var i = 0;
do {
    console.log("radi nesto");
    i++
} while (i < 10)



loop1:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            continue loop1;
        }
        console.log(" i je: " + 1 + " j je: " + j);
    }
}


"use strict"