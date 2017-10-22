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
