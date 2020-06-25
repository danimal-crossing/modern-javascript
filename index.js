/* global moment */
var moment = require('moment');
var math = require('mathjs');

var dayBegin = moment().startOf('day').fromNow();
console.log(dayBegin);

console.log(math.sqrt(-4));