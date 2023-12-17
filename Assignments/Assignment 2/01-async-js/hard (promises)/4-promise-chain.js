/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        if (typeof milliseconds != 'number' || milliseconds<0){
            reject(new Error('Undifined'));
        }
        if(milliseconds<=0)
            resolve();
        else{
            const startTime = new Date().getTime();
            while ((new Date().getTime() - startTime) < milliseconds) {
                //let it wait 
            }
            resolve();
        }
    })
}

async function wait1(t) {
    return sleep(t*1000);
}

async function  wait2(t) {
    return sleep(t*1000);

}

async function  wait3(t) {
    return sleep(t*1000);
}

async function calculateTime(t1, t2, t3) {
    const startTime = (new Date()).getTime();
    await  Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
    const endTime = (new Date()).getTime();
    return endTime - startTime;
}

module.exports = calculateTime;
