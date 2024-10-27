Array.prototype.forEach2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            callback.call(thisValue, this[i], i, this);
        }
    }
};

Array.prototype.push2 = function (...elements) {
    var length = elements.length;
    for (let i = 0; i < length; i++) {
        this[this.length] = elements[i];
    }
    return this.length;
};

Array.prototype.filter2 = function (callback, thisValue) {
    const result = [];
    const length = this.length;

    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisValue, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }

    return result;
};

var colors = ["red", "blue", "green"];

colors.push2("123");

console.log(colors);

Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    const length = this.length;
    for (; i < length; i++) {
        if (i in this) {
            result = callback(result, this[i], i, this);
        }
    }
    return result;
};

Array.prototype.reduce3 = function (callback, initValue) {
    let acc = initValue !== undefined ? initValue : this[0];
    let startIndex = initValue !== undefined ? 0 : 1;

    const leng = this.length;
    for (let i = startIndex; i < leng; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
};

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce3((total, number) => {
    return total + number;
}, 10);

console.log(result);
