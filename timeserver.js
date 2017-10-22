/* Task:   Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
*/

const net = require('net');
const port = (process.argv[2]);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
if (month < 10) {month = `0${month}`};
const day = date.getDate();
if (day < 10) {day = `0${day}`};
const hour = date.getHours();
if (hour < 10) {hour = `0${hour}`};
const minute = date.getMinutes();
if (minute < 10) {minute = `0${minute}`};

const data = `${year}-${month}-${day} ${hour}:${minute}\n`;

var server = net.createServer((socket) => {
    socket.end(data);
})

server.listen(port);
