/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
let n;
function calculateSum (n){
    let a=0;
    for (let i=0; i<=n; i++){
        a= a+1;
    }
    return a;
}
function calculateTime(n) {

    const startTime = new Date();
    
    calculateSum(n)

    const endTime= new Date();

    const timeDifference = endTime - startTime;

    return timeDifference/1000

}

// Call calculateTime function with the value of n
const timeTaken = calculateTime(1000000000);

// Log the time taken to the console
console.log(`Time taken for calculateSum(${n}): ${timeTaken} seconds`);