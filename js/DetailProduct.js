var out = new Image();
out.src = "../img/nonbucketden.webp"
var over = new Image();
over.src = "../img/nonbucketden.webp"
// 2
var over2 = new Image();
over2.src = "../img/nonbucketden2.jpg"
// 3
var over3 = new Image();
over3.src = "../img/nonbucketden3.jpg"



function one_over() {
    var anh = document.getElementById("anh");
    anh.src = over.src;
}
function one_out() {
    var anh = document.getElementById("anh");
    anh.src = out.src;
}
// 2
function one_over2() {
    var anh = document.getElementById("anh");
    anh.src = over2.src;
}
// 3
function one_over3() {
    var anh = document.getElementById("anh");
    anh.src = over3.src;
}

