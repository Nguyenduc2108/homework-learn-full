const isPrime = (n) => {
    if (typeof n !== "number" || isNaN(n)) {
        return "Number must be a positive number";
    }

    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

var n = "5";
if (isPrime(n)) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);
}
