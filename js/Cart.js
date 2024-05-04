const btn = document.querySelectorAll("button");
btn.forEach(function (button, index) {
    // lấy đc 4 thẻ button và 0 1 2 3 
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target;
            var product = btnItem.parentElement;
            // lấy ra div prodct-item 
            var prodcutImg = product.querySelector("img").src;
            var prodcutName = product.querySelector("h1").innerText;
            var prodcutPrice = product.querySelector("span").innerText;
            // console.log(prodcutPrice, prodcutImg, prodcutName);
            addcart(prodcutPrice, prodcutImg, prodcutName);
        }
    })
})

function addcart(prodcutPrice, prodcutImg, prodcutName) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title");
        if (productT[i].innerHTML == prodcutName) {
            alert("Sản phẩm đã co trong gio hang ");
            return
        }
    }


    var trconent = ' <tr><td td style = "display: flex; align-items: center;" ><img style="width: 70px;" src=" ' + prodcutImg + '"alt=""> <span class="title">' + prodcutName + ' </span> </td> <td><p>  <span class="prices"> ' + prodcutPrice + ' </span><sup>đ</sup></p></td> <td><input style="width: 30px; outline: none;" type="number" value="1" min="1" max="20"></td> <td style="cursor: pointer;"> <span class="cart-delete"> xóa </span></td></tr > ';

    addtr.innerHTML = trconent
    var cartTable = document.querySelector("tbody");
    // console.log(cartTable);
    cartTable.append(addtr);
    carTotal();
    deleteCart();
}



//                     totalPrice               //
function carTotal() {
    totalC = 0;
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem.length);
    for (var i = 0; i < cartItem.length; i++) {
        // lấy giá trị của input
        var inputValue = cartItem[i].querySelector("input").value; // vào thẻ lấy giá trị của nó
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector(".prices").innerHTML; // vào thẻ lấy giá trị của nó
        // console.log(productPrice);
        totalA = inputValue * productPrice * 1000;
        // console.log(totalA);
        totalC += totalA;
        // totalD = totalC.toLocaleString('de-De');
        // console.log(totalC);

    }

    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalC.toLocaleString('de-De');
    inputchange();

}


//                     Delete               //
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete");
        productT[i].addEventListener("click", function (event) {
            var carDelete = event.target
            var cartitemR = carDelete.parentElement.parentElement
            // console.log(cartitemR);
            cartitemR.remove();
            carTotal();
        })

    }
}



function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            carTotal();
        })
    }
}


const cartbtn = document.querySelector(".fa-circle-xmark");
const carshohw = document.querySelector(".fa-cart-plus");

cartshow.addEventListener("onclick", function () {
    document.querySelectorAll(".cart").style.right = "0px";
    console.log(carshohw)
})

cartbtn.addEventListener("onclick", function () {
    document.querySelector(".cart").style.right = "0";
})
