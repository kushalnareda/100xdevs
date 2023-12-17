/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
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

module.exports = sleep;
