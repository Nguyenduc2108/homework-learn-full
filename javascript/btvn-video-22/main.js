// Exercise 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

// var result = [];
// way 1
// for (var i in arrA) {
//     for (var j in arrB) {
//         if (arrA[i] === arrB[j]) {
//             result.push(arrA[i]);
//         }
//     }
// }
// console.log(result);

// way 2
// arrA.forEach((number) => {
//     if (arrB.includes(number)) {
//         if (result.indexOf(number) === -1) {
//             result.push(number);
//         }
//     }
// });
// console.log(result);

// way 3
// function filterArr(array) {
//     return array.reduce((result, item) => {
//         if (!result.includes(item)) result.push(item);
//         return result;
//     }, []);
// }

// function findCommonEl(arrA, arrB) {
//     if (Array.isArray(arrA) && Array.isArray(arrB))
//         return filterArr(arrA.filter((number) => arrB.includes(number)));
//     else return "arrA or arrB is not an array";
// }

// console.log(findCommonEl(arrA, arrB));

// way 4
function findCommonEl(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB)) {
        return arrA.concat(arrB).reduce((arr, number) => {
            if (arrA.includes(number) && arrB.includes(number) && !arr.includes(number)) {
                arr.push(number);
            }
            return arr;
        }, []);
    } else {
        return "arrA or arrB is not an array";
    }
}

// console.log(findCommonEl(arrA, arrB));

// Exercise 2
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// // way 1
// function flatArr(arr) {
//     return arr.reduce((arr, value) => {
//         return arr.concat(Array.isArray(value) ? flatArr(value) : value);
//     }, []);
// }

// var result = flatArr(arr);
// console.log(result);

// way 2
// console.log(arr.flat(Infinity));

// way 3
// Làm phẳng array sau (Chuyển về mảng 1 chiều) Không được sử dụng flat() : use while loop
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flatArr(arr) {
    var result = [];
    var stack = [...arr];
    while (stack.length) {
        var value = stack.pop();
        if (Array.isArray(value)) {
            stack.push(...value);
        } else {
            result.push(value);
        }
    }
    return result.reverse();
}

// console.log(flatArr(arr));

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Exercise 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
];

// way 1
function splitArr(arr) {
    if (Array.isArray(arr)) {
        var types = [];
        var arrFlat = arr.flat(Infinity);

        return arrFlat.reduce((arr, value) => {
            var type = typeof value;
            var typeIndex = types.findIndex((item) => item === type);

            if (typeIndex < 0) {
                arr.push([value]);
                types.push(type);
            } else {
                arr[typeIndex].push(value);
            }

            return arr;
        }, []);
    } else {
        return "arr is not an array";
    }
}

console.log(splitArr(arr));

// way 2
const result = (function (arr) {
    if (Array.isArray(arr)) {
        var array = arr.flat(Infinity).reduce((acc, item) => {
            var type = typeof item;
            if (!acc[type]) acc[type] = [];
            acc[type].push(item);
            return acc;
        }, []);
        var result = [];
        for (var index in array) result.push(array[index]);
        return result;
    } else return "không phải mảng.";
})(arr);
console.log("result", result);

// [["a", "b"], [1, 2], [true, false],]

// Exercise 4
var list = document.querySelector(".list");
var data = [
    {
        id: 1,
        title: "Tiêu đề bài viết 1",
        img: "https://plus.unsplash.com/premium_photo-1724824052922-6f2d60a2a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dolorem molestiae? Quisquam id quas facilis, quos nobis dicta? Architecto, fugiat consequuntur? Modi harum quasi explicabo! Perspiciatis sit maiores ex dolorem!`,
    },

    {
        id: 2,
        title: "Tiêu đề bài viết 2",
        img: "https://plus.unsplash.com/premium_photo-1724824052922-6f2d60a2a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dolorem molestiae? Quisquam id quas facilis, quos nobis dicta? Architecto, fugiat consequuntur? Modi harum quasi explicabo! Perspiciatis sit maiores ex dolorem!`,
    },

    {
        id: 3,
        title: "Tiêu đề bài viết 3",
        img: "https://plus.unsplash.com/premium_photo-1724824052922-6f2d60a2a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dolorem molestiae? Quisquam id quas facilis, quos nobis dicta? Architecto, fugiat consequuntur? Modi harum quasi explicabo! Perspiciatis sit maiores ex dolorem!`,
    },
    {
        id: 4,
        title: "Tiêu đề bài viết 4",
        img: "https://plus.unsplash.com/premium_photo-1724824052922-6f2d60a2a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dolorem molestiae? Quisquam id quas facilis, quos nobis dicta? Architecto, fugiat consequuntur? Modi harum quasi explicabo! Perspiciatis sit maiores ex dolorem!`,
    },
];

function renderList(data) {
    var html = data
        .map((item, index) => {
            return `
          <div class="item ${index % 2 !== 0 ? "reverse" : ""}">
                <div class="img-wrap">
                    <img
                        src="${item.img}"
                        alt=""
                    />
                </div>
                <div class="info">
                    <h3 class="title">${item.title}</h3>
                    <p class="desc">${item.desc}</p>
                </div>
            </div>
    `;
        })
        .join("");

    list.innerHTML += html;
}

renderList(data);
