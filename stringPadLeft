/*Book: Mastering Javascript Object Oriented Programming*/
/* Update String Prototype to add padLeft method to it*/
String.prototype.padLeft = function(width, char) {
var result = this;
char = char || " ";
if (this.length < width) {
result = new Array(width - this.length + 1).join(char) + this;
}
return result;
};

/* With this definition we can use padLeft() as if it were a built-in method of all strings, as
shown in the following example: */
console.log("abc".padLeft(10, "x")); //"xxxxxxxabc"
