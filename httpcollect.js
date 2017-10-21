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
