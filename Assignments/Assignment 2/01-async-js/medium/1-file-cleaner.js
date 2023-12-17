var fs = require('fs');

fs.readFile('a.txt', 'utf8', function(err, data) {
    if (err) {
        throw err;
    } else {
        let originalData = data;
        originalData = originalData.split('');
        let cleanData = [];

        for (let i = originalData.length - 1; i >= 0; i--) {
            if (originalData[i] !== ' ') {
                cleanData.push(originalData[i]);
            } else {
                if (originalData[i] === ' ' && originalData[i + 1] !== ' ') {
                    cleanData.push(' ');
                }
            }
        }

        cleanData = cleanData.reverse().join('');

        fs.writeFile("a.txt", cleanData, function(err) {
            if (err) {
                throw err;
            } else {
                console.log('The file is updated');
            }
        });
    }
});
