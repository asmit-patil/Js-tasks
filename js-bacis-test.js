//signed right shift
console.log(25 >> 2);
//unsigned right shift
console.log(25 >>> 2);

//diffrence between preincrement and postincrement
var a=10;
console.log("original value " +a);
console.log("post increment "+ a++);
console.log( a);
console.log("preincrement "+ ++a);
console.log(a);


console.log(Math.round(-21.51));   // 55.6
// Math.round10(55.549, -1);  // 55.5
// Math.round10(55, 1);       // 60
// Math.round10(54.9, 1);     // 50
// Math.round10(-55.55, -1);  // -55.5 -- round works towards +∞ when in-between two values
// Math.round10(-55.551, -1); // -55.6