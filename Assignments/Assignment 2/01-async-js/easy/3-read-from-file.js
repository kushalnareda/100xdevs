/*## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. */

var fs = require('fs');
//var express = require('express');

fs.readFile('a.txt', 'utf8',  function(error, data){
    if(error){
        throw error; 
    }
    console.log(data);

    console.time("ExpensiveOperation");

    let result = 0;

    for (let i = 0; i < 5000; i++) {
        for (let j = 0; j < 5000; j++) {
            result += Math.pow(i, 2) + Math.pow(j, 3); // Perform power operations
        }
    }

    console.timeEnd("ExpensiveOperation");
})