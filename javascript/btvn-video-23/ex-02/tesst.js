function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

var data = [];
function register(name, password, email) {
    if (arguments.length === 0) throw new Error("Đăng ký yêu cầu tên, mật khẩu và email");

    if (!name) throw new Error("Tên không được để trống");

    if (!email) throw new Error("Email không được để trống");

    if (!password) throw new Error("Mật khẩu không được để trống");

    var exitEmail = data.find((user) => user.email === email);

    if (exitEmail) throw new Error("Email đã tồn tại");

    var newUser = new User(name, password, email);
    data.push(newUser);

    return data;
}

function login(email, password) {
    if (arguments.length === 0) throw new Error("Đăng nhập yêu cầu email & mật khẩu");

    if (!email) throw new Error("Email không được để trống");

    if (!password) throw new Error("Mật khẩu không được để trống");

    var user = data.find((user) => user.email === email);

    if (!user) throw new Error("Email chưa được đăng ký");

    if (user.password !== password) throw new Error("Mật khẩu không chính xác");

    return user;
}

register("Nguyen Van A", "123456", "nguyenA@gmail.com");
var dataRegister = register("Nguyen Van B", "123456", "nguyenB@gmail.com");
var dataLogin = login("nguyenA@gmail.com", "123456");

console.log("dataRegister:", dataRegister);
console.log("dataLogin:", dataLogin);
