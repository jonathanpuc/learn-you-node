/* Task:   Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/

const http = require('http');
const url = process.argv[2];

const callback = function (response) {
    response.setEncoding("utf-8");
    let numberOfChars = 0;
    let completeString = ''

    response.on("data", (data) => {
        let string = data.toString();
        numberOfChars += string.length;
        completeString += string;
    });

    response.on("end", () => {
        console.log(numberOfChars);
        console.log(completeString);
    });
}

const request = http.get(url, callback);
