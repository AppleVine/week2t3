// Create a for loop that iterates up to 100 while outputting fizz every multiple of 3, buzz every 5 and fizzbuzz every 15.

// for (let i=0; i<=100; i++) {
//     if (i%15 == 0) {
//         console.log("fizzbuzz")
//     }
//     else if (i%5 == 0) {
//         console.log("fizz")
//     }
//     else if (i%3 == 0) {
//         console.log("buzz")
//     }
//     else {
//         console.log(i)
//     }
// }


// given a string, reverse each word in the sentence

var str = "This is the string to test on"

words = str.split(" ")

w = words.map(word => word.split("").reverse().join("")).join(" ")

console.log(w)