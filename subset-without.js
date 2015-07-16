#!/usr/bin/env node

var input = ''

process.stdin
  .on('data', function(buffer) {
    input += buffer.toString() })
  .on('end', function() {
    input = JSON.parse(input)
    process.argv
      .slice(2)
      .forEach(function(key) {
        delete input[key] })
    process.stdout.write(
      require('lispy-json')(input) + '\n') })
