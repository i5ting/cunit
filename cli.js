#!/usr/bin/env node

var fs = require('fs')
var argv = process.argv
argv.shift()

var filePath = __dirname
var currentPath = process.cwd()

let flag = false

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-m'  || _argv == '--min'){
    flag = true
    fs.createReadStream(filePath + '/tpl/minunit.h').pipe(fs.createWriteStream(currentPath + '/minunit.h'))
  }
  
  if(_argv == '-g'  || _argv == '--greate'){
    flag = true
    fs.createReadStream(filePath + '/tpl/greatest.h').pipe(fs.createWriteStream(currentPath + '/greatest.h'))
  }
}

if (flag === false) {
  console.log('cunit Usages:')
  console.log('   -m: create minunit.h')
  console.log('   -g: create greatest.h')
}
