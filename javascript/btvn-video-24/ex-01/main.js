function sum(...numbers) {
    // if(typeof numbers !== "number") throw new Error("Du lieu nhap vao phai la so");
    if (numbers && numbers?.length) {
        return numbers.reduce?.((total, number) => {
            if (typeof +number !== "number" || isNaN(+number)) {
                throw new Error("Du lieu nhap vao phai la so");
            }
            return +total + +number;
        });
    }
}

var result = sum(1, "2", "12");
console.log(result);
