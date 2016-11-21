#!/usr/bin/env node

var argv = process.argv
argv.shift()

var filePath = __dirname
var currentPath = process.cwd()

console.log(filePath)
console.log(currentPath)
