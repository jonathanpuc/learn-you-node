var http = require('http');
const url = process.argv[2];

var callback = function (response) {
    response.setEncoding("utf-8");
    response.on("data", (data) => {
        console.log(data);
    });
}

var request = http.get(url, callback);
