/* Task:   Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/

const map = require('through2-map');
const http = require('http');
const port = process.argv[2];

const callback = (req, res) => {
    if (req.method === 'POST') {
        req.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}

const server = http.createServer(callback);

server.listen(port);
