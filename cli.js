#!/usr/bin/env node

var fs = require('fs')
var argv = process.argv
argv.shift()

var filePath = __dirname
var currentPath = process.cwd()

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-m'  || _argv == '--min'){
    fs.createReadStream(filePath + '/tpl/minunit.h').pipe(fs.createWriteStream(currentPath + '/minunit.h'))
  }
  
  if(_argv == '-g'  || _argv == '--greate'){
    fs.createReadStream(filePath + '/tpl/greatest.h').pipe(fs.createWriteStream(currentPath + '/greatest.h'))
  }
}
