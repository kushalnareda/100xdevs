var fs = require('fs');

fs.writeFile("a.txt", "Hello BUBU", function(err,data){
    if(err){
        throw err;
    }
    console.log("The file is updated")
})