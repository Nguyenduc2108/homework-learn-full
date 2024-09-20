function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}

var users = [];
function register(name, password, email) {
    if (name && password && email) {
        users.push({ name, password, email, role: "user" });
        console.log(users);
        return users;
    }
    return "Please provide all information";
}

function login(email, password) {
    // Dùng câu lệnh if kiểm tra xem email và password nhập vào có trùng email và password đã tồn tại trong users không?

    if (email && password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                return users[i];
            }
        }
    }

    return "Tai khoan khong ton tai!";
}

register("Nguyen Van A", "123456", "vanA@gmail.com");
// register("Nguyen Van B", "", "vanB@gmail.com");

console.log(login("vanA@gmail.com", "123456"));
