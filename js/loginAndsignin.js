function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var againpassword = document.getElementById("confirm_password").value;

    // Kiểm tra mật khẩu có ít nhất 8 ký tự và chứa ít nhất một ký tự đặc biệt
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.{8,})/;
    if (username == "") {
        alert("Vui lòng nhập tên tài khoản!")
    }
    else if (email == "") {
        alert("Vui lòng nhập email của bạn!")
    }
    else if (password == "") {
        alert("Vui lòng nhập mật khẩu của bạn!")
    }
    else if (!passwordRegex.test(password)) {
        alert("Mật khẩu phải có ít nhất 8 ký tự, có chứa ký tự đặt biệt và viết Hoa!");
    }
    else if (againpassword == "") {
        alert("Vui lòng nhập lại mật khẩu của bạn!")
    }
    else if (password != againpassword) {
        alert("Mật khẩu không trùng!")
    }
    else {
        alert("Đăng ký thành công.")
        window.location.href = "../page/User.html";
    }
}


function login(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Kiểm tra mật khẩu có ít nhất 8 ký tự và chứa ít nhất một ký tự đặc biệt
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.{8,})/;

    if (email == "") {
        alert("Vui lòng nhập email của bạn!")
    }

    else if (password == "") {
        alert("Vui lòng nhập mật khẩu của bạn!")
    }

    else if (passwordRegex.test(password) == "") {
        alert("Mật khẩu phải có ít nhất 8 ký tự, có chứa ký tự đặt biệt và viết Hoa!");
    }
    else {
        alert("Đăng nhập thành công.");
        window.location.href = "../index.html";

    }
}