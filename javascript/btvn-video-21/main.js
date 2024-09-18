// Exercise 1
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkArrayInt(numbers) {
    if (Array.isArray(numbers)) {
        if (numbers.length > 0) {
            for (var i in numbers) {
                if (!Number.isInteger(numbers[i])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

// way 1
// if (checkArrayInt(numbers)) {
//     var max = numbers[0];
//     var min = numbers[0];
//     var indexMax = 0;
//     var indexMin = 0;

//     for (var i in numbers) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//             indexMax = i;
//         }
//         if (numbers[i] < min) {
//             min = numbers[i];
//             indexMin = i;
//         }
//     }

//     console.log(`Max number is ${max} at index ${indexMax}`);
//     console.log(`Min number is ${min} at index ${indexMin}`);
// } else {
//     console.log(`numbers is not an array of integers`);
// }

// way 2
// if (checkArrayInt(numbers)) {
//     var max = numbers[0];
//     var min = numbers[0];
//     var indexMax = 0,
//         indexMin = 0;

//     numbers.forEach((number) => {
//         max = max < number ? number : max;
//         min = min > number ? number : min;
//         indexMax = numbers.indexOf(max);
//         indexMin = numbers.indexOf(min);
//     });

//     console.log(`Max number is ${max} at index ${indexMax}`);
//     console.log(`Min number is ${min} at index ${indexMin}`);
// } else {
//     console.log(`numbers is not an array of integers`);
// }

// Exercise 2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isPrime = function (number) {
    if (number < 2 || number % 1 !== 0) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (var i = 5; i <= Math.sqrt(number); i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
};

if (checkArrayInt(numbers)) {
    var primeNumbers = numbers.filter((number) => isPrime(number));
    if (primeNumbers.length === 0) {
        console.log(`No prime number in the array`);
    } else {
        // var sum = primeNumbers.reduce((a, b) => a + b); // way 1

        // way 2
        var sum = 0;
        for (var primeNumber of primeNumbers) {
            sum += primeNumber;
        }
        var average = sum / primeNumbers.length;

        // console.log(`Prime numbers are ${primeNumbers}`);
        // console.log(`Sum of prime numbers is ${sum}`);
        // console.log(`Average of prime numbers is ${average}`);
    }
} else {
    console.log(`numbers is not an array of integers`);
}

// Exercise 3
function checkArrayEmpty(numbers) {
    if (Array.isArray(numbers)) {
        if (numbers.length > 0) {
            return true;
        }
    }
    return false;
}

var numbers = [1, 1, "a", "a", "b", "v", 9, 4, 5, 5, "v"];
// way 1
if (checkArrayEmpty(numbers)) {
    var uniqueNumbers = numbers.filter((number, index) => numbers.indexOf(number) === index);
    // console.log(uniqueNumbers);
} else {
    console.log(`numbers is an empty array`);
}

// way 2
if (checkArrayEmpty(numbers)) {
    var result = [];
    for (var i in numbers) {
        if (result.indexOf(numbers[i]) === -1) {
            result[result.length] = numbers[i];
        }
    }
    // console.log(result);
} else {
    console.log(`numbers is an empty array`);
}

// way 3
if (checkArrayEmpty(numbers)) {
    var filterArr = [];
    numbers.forEach((number) => {
        !filterArr.includes(number) && filterArr.push(number);
    });
    // console.log(filterArr);
} else {
    console.log(`numbers is an empty array`);
}

// Exercise 4
var numbers = [5, 1, 9, 8, 10];
var element = 4;

// way 1
// selection sort (sắp xếp theo thứ tự tăng dần)
for (var i = 0; i < numbers.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j;
        }
    }

    if (minIndex !== i) {
        var temp = numbers[i];
        numbers[i] = numbers[minIndex];
        numbers[minIndex] = temp;
    }
}
// console.log(numbers);

// Duyệt mảng numbers từ trái sang phải, nếu element nhỏ hơn phần tử thứ i thì chèn element vào vị trí i
// for (var i = 0; i < numbers.length; i++) {
//     if (element < numbers[i]) {
//         numbers.splice(i, 0, element);
//         break;
//     }
// }
// console.log(numbers);

// way 2
function insertSort(numbers, element) {
    numbers.sort((a, b) => a - b);
    for (var i in numbers) {
        if (element < numbers[i]) {
            numbers.splice(i, 0, element);
            break;
        }
    }
    return numbers;
}

var result = insertSort(numbers, element);
console.log(result);
