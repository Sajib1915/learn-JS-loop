//break/1 century.js
/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

//break/2 sum upto 100.js
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

//break/3 square break.js
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// ========================================
// Problem 1: Find 100 and Break
// ========================================
console.log("=== Problem 1: Century ===\n");

for(let i = 1; i <= 200; i++) {
    console.log(i);

    if(i === 100) {
        console.log("Found 100! Breaking out...");
        break;
    }
}
console.log("Loop ended!\n");

// ========================================
// Problem 2: Sum Upto 100
// ========================================
console.log("=== Problem 2: Sum Upto 100 ===\n");

let sum = 0;
let num = 1;

while(num <= 1000) {
    sum = sum + num;
    console.log(`Adding ${num}: Sum = ${sum}`);

    if(sum >= 100) {
        console.log(`Sum reached ${sum}! Breaking...`);
        break;
    }

    num++;
}

console.log(`Final sum: ${sum}`);
console.log(`Stopped at number: ${num}\n`);

// ========================================
// Problem 3: First Square Number
// ========================================
console.log("=== Problem 3: First Square Number ===\n");

for(let i = 1; i <= 100; i++) {
    console.log("Checking:", i);

    let sqrt = Math.sqrt(i);

    if(sqrt === Math.floor(sqrt) && i > 1) {
        console.log(`Found first square number: ${i}`);
        console.log(`${i} = ${sqrt} × ${sqrt}`);
        break;
    }
}

console.log("Loop ended!");