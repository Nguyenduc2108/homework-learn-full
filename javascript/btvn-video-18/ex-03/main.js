const sum = (n) => {
    if (n % 1 !== 0 || typeof n !== "number" || isNaN(n)) return "Số n không hợp lệ";

    var total = 0;
    for (let i = 1; i <= n; i++) {
        total += i * (i + 1);
    }
    return total;
};
console.log(sum(5));
