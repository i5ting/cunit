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
    fs.createReadStream(filePath + '/tpl/minunit.h').pipe(fs.createWriteStream(currentPath + '/minunit.h'))
  }
  
  if(_argv == '-g'  || _argv == '--greate'){
    fs.createReadStream(filePath + '/tpl/greatest.h').pipe(fs.createWriteStream(currentPath + '/greatest.h'))
  }
}



