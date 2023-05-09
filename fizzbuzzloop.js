"use strict";

const fizzbuzz = require('./fizzbuzz');
let fizzbuzzarray=[];

function fizzbuzzloop(num) {
  for(let i = 1; i<=num;i++) {
    fizzbuzzarray.push(fizzbuzz(i));
  }
  return fizzbuzzarray;
}



module.exports = fizzbuzzloop;
