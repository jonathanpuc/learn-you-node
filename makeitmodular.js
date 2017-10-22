/* Task:   Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the
  list of files (one file per line) to the console. You must use
  asynchronous I/O.

  You must write a module file to do most of the work. The module must
  export a single function that takes three arguments: the directory name,
  the filename extension string and a callback function, in that order. The
  filename extension argument must be the same as what was passed to your
  program.
*/

var moduleFunction = require('./mod/mymodule');

var dir = process.argv[2];
var fileExtension = process.argv[3];

var callback = function(err, data) {
    if (err) throw err;

    data.forEach(item => console.log(item));
}

moduleFunction(dir, fileExtension, callback);
