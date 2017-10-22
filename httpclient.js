/* Task:   Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).
*/

var http = require('http');
const url = process.argv[2];

var callback = function (response) {
    response.setEncoding("utf-8");
    response.on("data", (data) => {
        console.log(data);
    });
}

var request = http.get(url, callback);
