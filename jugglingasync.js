/* Task:   This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/

const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const urlArr = [url1, url2, url3];

var dataArr = [];
var count = 0;

function httpGet(url, index) {
    http.get(url, (response) => {
        response.setEncoding("utf-8");
        let string = '';

    response.on("data", (data) => {
        string += data.toString();
    });

    response.on("end", () => {
        dataArr[index] = string;

        if (count === 2) {
            arrayLoop(dataArr);
        } else {
            count++;
        }
    });

  });
}



urlArr.forEach((url, index) => {
    httpGet(url, index)
});

function arrayLoop (arr) {
    arr.forEach(item => {
        console.log(item);
    })
}
