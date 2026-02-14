//continue/1 skip odd.js
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

//continue/2 skip-five.js
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// ========================================
// Problem 1: Skip Odd Numbers
// ========================================
console.log("=== Problem 1: Even numbers from 1 to 40 ===\n");

for(let i = 1; i <= 40; i++) {
    if(i % 2 === 1) {  // বিজোড় হলে skip
        continue;
    }
    console.log(i);
}

console.log("\n");

// ========================================
// Problem 2: Odd numbers, skip divisible by 5
// ========================================
console.log("=== Problem 2: Odd from 55 to 85 (skip ÷5) ===\n");

for(let i = 55; i <= 85; i++) {
    // জোড় হলে skip
    if(i % 2 === 0) {
        continue;
    }

    // ৫ দিয়ে বিভাজ্য হলে skip
    if(i % 5 === 0) {
        continue;
    }

    console.log(i);
}

// অথবা একসাথে:
console.log("\n=== Problem 2 (Alternative) ===\n");

for(let i = 55; i <= 85; i++) {
    if(i % 2 === 0 || i % 5 === 0) {
        continue;
    }
    console.log(i);
}