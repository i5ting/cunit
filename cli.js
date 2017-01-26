#!/usr/bin/env node

var argv = process.argv
argv.shift()

var filePath = __dirname
var currentPath = process.cwd()

console.log(filePath)
console.log(currentPath)

var fs = require('fs')

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-m'  || _argv == '--min'){
    fs.createReadStream(filePath + '/tpl/minunit').pipe(fs.createWriteStream(currentPath))
  }
  
  if(_argv == '-g'  || _argv == '--greate'){
    fs.createReadStream(filePath + '/tpl/greatest').pipe(fs.createWriteStream(currentPath))
  }
}


