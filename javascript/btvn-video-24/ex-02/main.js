// Object.prototype.getCurrency = function (currencyCode) {
//     // return `${Number(this).toLocaleString("vi")} ${value}`;
//     return new Intl.NumberFormat("vi-VN", {
//         style: "currency",
//         currency: currencyCode,
//     }).format(this);
// };

// //Case 1
// var price = 12000;
// console.log(price.getCurrency("USD")); //Hiển thị: 12,000 đ

// //Case 2
// var price = "12000000";
// console.log(price.getCurrency("VND")); //Hiển thị: 12,000,000 đ

// // Thêm phương thức getCurrency vào prototype của Number
// Number.prototype.getCurrency = function (currencyCode) {
//     let locale = getLocaleByCurrency(currencyCode);
//     return new Intl.NumberFormat(locale, {
//         style: "currency",
//         currency: currencyCode,
//     }).format(this);
// };

// // Thêm phương thức getCurrency vào prototype của String
// String.prototype.getCurrency = function (currencyCode) {
//     let locale = getLocaleByCurrency(currencyCode);
//     return new Intl.NumberFormat(locale, {
//         style: "currency",
//         currency: currencyCode,
//     }).format(Number(this));
// };

// // Hàm giúp trả về locale dựa trên mã tiền tệ
// function getLocaleByCurrency(currencyCode) {
//     switch (currencyCode) {
//         case "VND":
//             return "vi-VN"; // Việt Nam
//         case "USD":
//             return "en-US"; // Mỹ
//         case "EUR":
//             return "de-DE"; // Đức (hoặc có thể là 'fr-FR' cho Pháp)
//         default:
//             return "en-US"; // Mặc định là Mỹ
//     }
// }

// // Sử dụng phương thức getCurrency

// // Case 1 - Hiển thị theo định dạng tiền Việt Nam
// var price1 = 12000;
// console.log(price1.getCurrency("VND")); // Hiển thị: 12.000 ₫

// // Case 2 - Hiển thị theo định dạng tiền USD
// var price2 = "12000000";
// console.log(price2.getCurrency("USD")); // Hiển thị: $12,000,000.00

// // Case 3 - Hiển thị theo định dạng tiền Euro
// var price3 = 5000;
// console.log(price3.getCurrency("EUR")); // Hiển thị: 5.000,00 €

///////////////////////////////////////////////////////////////////////
Object.prototype.getCurrency = function (value) {
    return `${Number(this).toLocaleString()} ${value}`;
};

//Case 1
var price = 12000;
console.log(price.getCurrency("đ")); //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ
