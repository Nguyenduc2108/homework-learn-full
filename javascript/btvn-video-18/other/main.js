// ------------------ Exercise 1 ------------------
var reverseNumber = (n) => {
    var reverse = 0;
    while (n > 0) {
        reverse = reverse * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return reverse;
};

console.log(reverseNumber(12345)); // 54321

// ------------------ Exercise 2 ------------------
/**
Hiển thị N số fibonacci đầu tiên
Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonacci
Yêu cầu: Không dùng vòng lặp
 */

var fibonacci = (n) => {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// ------------------ Exercise 3 ------------------
/**
 * Viết hàm chuyển số thành chữ
Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám đồng

Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999
 */

var numberToWords = (n) => {
    var number = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    var result = "";
    if (n === 0) {
        result = "không";
    } else {
        var a = Math.floor(n / 1000);
        var b = Math.floor((n % 1000) / 100);
        var c = Math.floor((n % 100) / 10);
        var d = n % 10;
        if (a > 0) {
            result += number[a] + " nghìn ";
        }
        if (b > 0) {
            result += number[b] + " trăm ";
        }
        if (c > 0) {
            if (c === 1) {
                result += "mười ";
            } else {
                result += number[c] + " mươi ";
            }
        }
        if (d > 0) {
            if (c === 0 && b > 0) {
                result += "lẻ " + number[d];
            } else if (d === 1) {
                result += "một";
            } else if (d === 5 && c > 0) {
                result += "lăm";
            } else {
                result += number[d];
            }
        }
    }
    return result + " đồng";
};

console.log(numberToWords(4298)); // "bốn nghìn hai trăm chín mươi tám đồng"
