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
