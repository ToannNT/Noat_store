function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Định dạng tiền VNĐ 
function formatVND() {
    // Lấy tất cả các phần tử có lớp 'money'
    var moneyElements = document.querySelectorAll('#money');
    moneyElements.forEach(function (element) {
        var amount = parseInt(element.innerHTML);
        element.innerHTML = formatCurrency(amount) + "đ";
    });
}



// Cai đặt mặt định 
document.getElementById("showcart").style.display = "none";
// tạo mảng giỏ hàng 
var giohang = [];
function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;

    var giaElement = boxsp[1].querySelector("#money"); // Lấy phần tử có id là "money"
    var gia = giaElement.getAttribute("data-price"); // Lấy giá trị từ thuộc tính dữ liệu
    // var gia = boxsp[1].querySelector("#money");
    console.log(gia);
    var tensp = boxsp[2].innerText;
    var soluong = parseInt(boxsp[3].value);

    var sp = new Array(hinh, gia, tensp, soluong);
    // kiểm tra giỏ hàng có tồn tại sản phẩm đó chưa
    var kt = 0;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][2] == tensp) {
            kt = 1;
            soluong += giohang[i][3];
            giohang[i][3] = soluong;
            break;
        }
    }

    // nếu chưa tồn tại thì thêm sản phẩm vào mảng
    if (kt == 0) {
        giohang.push(sp);
    }
    // lưu giỏ hàng lên sectionstogare 
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    // gọi lại hàm đếm số lượng để cập nhật số lượng trang html
    showcountsp();
}


function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}

//show cart trang product
function showCartProduct() {
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        // thành tiền
        var thanhtien = parseInt(giohang[i][3]) * parseInt(giohang[i][1]);
        tong += thanhtien;
        ttgh += '<tr>' +
            '<td><img style="width: 50px; object-fit: cover;" src="' + giohang[i][0] + '" alt></td>' +
            // tên sp 
            '<td>' + giohang[i][2] + '</td>' +
            // đơn giá  
            '<td>' + giohang[i][3] + '</td>' +
            '<td id="money">' + giohang[i][1] + '</td>' +

            ' </tr > ';
    }

    ttgh += '<tr>' +
        '<th colspan="3">Tổng</th>' +
        '<th>' +
        '<span id="money">' + tong + 'đ' + '</span>' +
        '</th>' +
        '</tr>';

    document.getElementById("mycart").innerHTML = ttgh;
    formatVND();
}


//show thông tin cart
function showmycart() {
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        // thành tiền
        var thanhtien = parseInt(giohang[i][3]) * parseInt(giohang[i][1]);
        tong += thanhtien;
        ttgh += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + giohang[i][0] + '" alt></td>' +
            // tên sp 
            '<td>' + giohang[i][2] + '</td>' +
            // đơn giá  
            '<td>' + giohang[i][1] + '</td>' +

            '<td>' + giohang[i][3] + '</td>' +
            '<td>' +
            '<div>' + thanhtien + '</div>' +
            '</td>' +
            '<td>' +
            '<button  style="width: 90%;' +
            'padding: 10px;' +
            'font-weight: bold;' +
            'border: none;' +
            'background-color: #e8363c;' +
            'color: white;" onclick="xoasp(this)">Xóa</button>' +
            '</td>' +
            ' </tr > ';
    }

    ttgh += '<tr>' +
        '<th colspan="5">Total payment</th>' +
        '<th>' +
        '<div>' + tong + '$' + '</div>' +
        '</th>' +
        '</tr>';

    document.getElementById("mycart").innerHTML = ttgh;

}



// ẩn hiện cart và gọi lại hàm showmycart()
function showcart() {

    var x = document.getElementById("showcart");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    showCartProduct();
}


// Xóa từng sản phẩmmmmm
function removeItem(index) {
    var giohang = JSON.parse(sessionStorage.getItem('giohang'));
    giohang.splice(index, 1);
    sessionStorage.setItem('giohang', JSON.stringify(giohang));
    totalPay();
    showViewCart();
    formatVND();

}
// Xóa tất cả sản phẩm
function deleteAll() {
    giohang = [];
    sessionStorage.removeItem("giohang");
    showCartProduct();
    showcountsp();
}


//Tính tổng
function totalPay() {
    var totalElement = document.querySelector('.sub-price');
    var totalAllElement = document.querySelector('.total_detail');

    var giohang = JSON.parse(sessionStorage.getItem('giohang'));
    var tongTien = 0;
    // var thanhtien = 0;
    giohang.forEach(function (sp) {
        tongTien += parseInt(sp[1]) * parseInt(sp[3]);
    });
    if (totalElement) {
        totalElement.textContent = tongTien;
    }
    totalAllElement.textContent = tongTien;

}




// Show thông tin trang thanh toán
function showggiohang_trangthanhtoan() {
    //lấy danh sách sản phẩm từ sesstion xuống
    var giohang = JSON.parse(sessionStorage.getItem("giohang"));
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        // thành tiền
        var thanhtien = parseInt(giohang[i][3]) * parseInt(giohang[i][1]);
        tong += thanhtien;
        ttgh += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + giohang[i][0] + '" alt></td>' +
            // tên sp 
            '<td>' + giohang[i][2] + '</td>' +
            // đơn giá  
            '<td id="money">' + giohang[i][1] + '</td>' +

            '<td>' + giohang[i][3] + '</td>' +
            '<td>' +
            '<span id="money">' + thanhtien + '</span>' +
            '</td>' +
            ' </tr > ';

    }
    document.getElementById("mycart").innerHTML = ttgh;
    // formatVND();

}

// Show thông tin trang thanh toán
function showViewCart() {
    //lấy danh sách sản phẩm từ sesstion xuống
    var giohang = JSON.parse(sessionStorage.getItem("giohang"));
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        // thành tiền
        var thanhtien = parseInt(giohang[i][3]) * parseInt(giohang[i][1]);
        tong += thanhtien;
        ttgh += '<tr>' +
            '<td><i class="fa-solid fa-trash-can" style="color: #000000;"  onclick="removeItem(' + i + ')"></i></td>' +
            '<td><img src="' + giohang[i][0] + '" alt></td>' +
            // tên sp 
            '<td>' + giohang[i][2] + '</td>' +
            // đơn giá  
            '<td id="money">' + giohang[i][1] + '</td>' +

            '<td>' + giohang[i][3] + '</td>' +
            '<td>' +
            '<span id="money">' + thanhtien + '</span>' +
            '</td>' +
            ' </tr > ';
    }

    // ttgh += '<tr>' +
    //     '<th colspan="5">Total payment</th>' +
    //     '<th>' +
    //     '<span id="money">' + tong + 'đ' + '</span>' +
    //     '</th>' +
    //     '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
}

function dongydathang() {
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;
    var phuongThucThanhToan = ttnh[4].children[1].querySelector("select").value;

    // console.log(hoten);
    // console.log(diachi);
    // console.log(dienthoai);
    // console.log(email);
    // console.log(phuongThucThanhToan);

    var nguoinhan = new Array(hoten, diachi, dienthoai, email, phuongThucThanhToan);
    // console.log(nguoinhan);
    sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));
    // sessionStorage.removeItem("nguoinhan");
    window.location.assign("Order.html");
}

//show thông tin trang đặt hàng thanh công
function showthongtinnguoinhan() {
    //lấy session thông tin người nhận xuống
    var thongtin = JSON.parse(sessionStorage.getItem("nguoinhan"));
    var tt = ' <tr>' +
        '<td width="20%">Họ tên</td>' +
        '<td>' + thongtin[0] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Địa chỉ</td>' +
        '<td>' + thongtin[1] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Điện thoại</td>' +
        '<td>' + thongtin[2] + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Email</td>' +
        '<td>' + thongtin[3] + '</td>' +
        '<tr>' +
        '<td>Phương thức thanh toán</td>' +
        '<td>' + thongtin[4] + '</td>' +
        '<tr>' +
        '</tr>';
    document.getElementById("thongtinnhanhang").innerHTML = tt;
}

function deleteSession() {
    giohang = [];
    // nguoinhan = [];
    sessionStorage.removeItem("giohang");
    sessionStorage.removeItem("nguoinhan");
}
