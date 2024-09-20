const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn B", age: 20, address: "Hai Phong" },
    { name: "Nguyễn Văn B", age: 6, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

// way 1
// function createCustomers(customers) {
//     return customers.sort((a, b) => a.age - b.age); // Sắp xếp theo tuổi tăng dần
// }

// way 2
function createCustomers(customers) {
    for (let i = 0; i < customers.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < customers.length; j++) {
            if (customers[j].age < customers[minIndex].age) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = customers[i].age;
            customers[i].age = customers[minIndex].age;
            customers[minIndex].age = temp;
        }
    }
    return customers;
}

const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.

console.log(result);
