/* global moment */
import moment from 'moment';
var math = require('mathjs');

var dayBegin = moment().startOf('day').fromNow();
console.log(dayBegin);
console.log(math.sqrt(-4));
var name = "James";
var time = "today";
console.log(`Hello ${name} how are you ${time}?`);