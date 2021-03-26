// 13.f2 resenje Kuzmic:

function redExer(n) {
    var str = "" + n;
    if (str >= 11 && str <14) {
        str += "th";
    } else if (str[str.length -1] == 2) {
        str += "nd";
    } else if (str[str.length -1] == 3) {
        str += "rd";
    } else if (str[str.length -1] == 1) {
        str += "st";
    } else {
        str += "th";
    }
    return str;
}
console.log(redExer(100));



// Sorting of array from min to max element


