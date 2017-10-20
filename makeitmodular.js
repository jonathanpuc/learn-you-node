var moduleFunction = require('./mod/mymodule');

var dir = process.argv[2];
var fileExtension = process.argv[3];

var callback = function(err, data) {
    if (err) throw err;
    
    data.forEach(item => console.log(item));
}

moduleFunction(dir, fileExtension, callback);