//...........1(for-of.js).............

const numbers = [12, 98, 45, 63, 21, 72, 52, 81, 19];

console.log(numbers);

// for(const num of numbers){
//     console.log(num);
// }



const fruits = ['orange', 'apple', 'banana', 'jackfruit', 'watermelon'];

// for(){

// }

for (const fruit of fruits) {
    console.log(fruit);
    console.log('I want to eat');
}

//.............2(while.js).............

const number = 7;
if (number < 10) {
    console.log('choto ekta number paisi');
}
console.log('something new is cooking');

// -----------WHILE---LOOP-------------
let num = 0; // loop variable
while(num < 5){ // loop condition
    console.log('loooooooping', num);
    // num = num + 1;
    // num += 1;
    num++;
}

//-----------3(range.js)----------------
// let num = 1;
// while (num <= 10){  // focus on the condition
//     console.log(num);
//     num++;
// }

let num1 = 50;
while(num1 <=100){
    console.log(num1);
    num1++;
}

//-----------4(sum.js)----------------I don't understand this
let num2 = 1;
let sum1 = 0;
while(num2 <= 10){
    console.log(num2);
    sum1 = sum1 + num2;
    console.log('sum:', sum1);
    num2++;
}

//-----------6(for.js)----------------
/**
 * for(    ;    ;    ){
 * }
 * 
 * 
 * for( first part ; second part ; third part){
    loop statement
}
 * 
 * first part: loop variable declaration
 * second part: loop condition
 * third part: loop variable change 
 * 
 * for (loop variable declaration ; loop condition) 
*/
// let num = 0; // loop variable
// while(num < 5) {  // loop condition
//     console.log(num); // loop statement
//     num++; // loop variable change
// }

for(let num4 = 0; num4 < 5; num4++){
    console.log(num4);
}

//-----------------7(odd-even.js)----------------

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for( let i = 1; i <=50; i++ ){
//     console.log(i);
// }

// even
for(let i = 0; i <= 20; i=i+2){
    console.log(i)
}

// odd
for(let i = 1; i<=20; i=i+2){
    console.log(i);
}

//-----------------8(for-sum.js)----------------
let sum2 = 0; 

for(let i = 11; i<=20; i++){    
    sum2 = sum2 + i;
    console.log(i);
}

console.log('sum of numbers from 11 to 20 is', sum2)

//-------------9(decremental-for.js)-------------
// incremental loop
// for(let i = 0; i <=10; i++){
//     console.log(i);
// }

// decremental for loop
// for (let i = 10; i >=0; i--){
//     console.log(i);
// }


for(let i = 20; i >= 11; i--){
    console.log(i);
}

//-----------------10(decremental-while.js)----------------
let n = 10;
while(n >=0){
    console.log(n);
    n--;
} 

//------------11(different.js)--------I don't understand this
// odd numbers

// for(let i = 0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i < 20; i+=2) {
//     console.log(i);
// }

// give me the list numbers between 1 to 30 divisible by 5
// for(let i = 1; i <=30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// give me the sum of numbers from 1 to 20 that are divisible by 3
let total = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        total = total + i;
        console.log('total', total)
    }
}

console.log('total of the numbers', total)

//------------------12(break.js)----------------
for (let i = 0; i < 150; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}

console.log('life after break up');

let n1 = 54;
while (n1 > 25) {

    if (n1 < 50) {
        break;
    }
    console.log(n1);
    n1--;
}

//------------------13(continue.js)----------------
// continue --> skip rest of the code for this iteration
// break --> i am done with this loop. loop end.

// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

let n2 = 0;
while (n2 < 15) {
    n2++;
    if (n2 % 5 !== 0) {
        continue;
    }
    console.log(n2);
    
}

//------------------14(do-while.js)----------------
// almost use korbo na

// let i = 10;
// while (i < 5) {
//     console.log(i);
//     i++
// }

let n3 = 0;
do {
    console.log(n3);
    n3++;
}
while (n3 < 5)
