var word = require("chalk");
var one = word.blue("hello");
var two = word.italic("world");
var three = word.inverse("banana");
var four = word.red('Hello', word.underline.bgBlue('world') + '!');
console.log(one + " " + two + " " + three + " " + four);
