const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const path = process.argv[3];

const callback = (req, res) => {
    let readStream = fs.createReadStream(path);
    readStream.pipe(res);
}

const server = http.createServer(callback);


server.listen(port);
