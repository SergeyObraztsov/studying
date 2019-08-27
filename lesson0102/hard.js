let num = 266219;
var a = 1;
while (num > 0) {
    a = a * (num % 10);
    num = Math.floor(num/10);
}
console.log("result: " + a);
a = a**3
let myVar = a.toString()
console.log(myVar.substring(0,2));