// exercise 1
var a = 5,
    b = 10;
console.log(a, b);
a += b;
b = a - b;
a -= b;
console.log(a, b);

// exercise 2
var s = 10 + 20 + 5 ** 10 / 2;
console.log(s);

// exercise 3
var a = 25,
    b = 30,
    c = 20;
var max = a;
if (b > max && b > c) max = b;
if (c > max && c > b) max = c;
console.log(max);

// exercise 4
var a = 5,
    b = 10;
var result = a * b;
if (result > 0) {
    console.log(`${a} and ${b} là 2 số cùng dấu`);
} else if (result < 0) {
    console.log(`${a} and ${b} là 2 số khác dấu`);
} else {
    console.log(`1 trong 2 số ${a} hoặc ${b} bằng 0`);
}

// exercise 5
//Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
var a = 100,
    b = 5,
    c = 20;
console.log(a, b, c);

if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    var temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    var temp = b;
    b = c;
    c = temp;
}

console.log(a, b, c);
