var fs = require('fs');

module.exports = function(dir, fileExtension, callback) {
    var arr = [];
    fs.readdir(dir, (err, list) => {
        if (err) {return callback(err)}
        
        list.forEach(file => {
            if (file.includes("."+fileExtension)) {
                arr.push(file);
            }
        });
        
        return callback(null, arr);
    
    });
};