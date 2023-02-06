/// init
localStorage.setItem('User','user')
localStorage.setItem('Password','password')
localStorage.setItem('log_in','false')
if(localStorage.getItem("cart") == null){
    localStorage.setItem('cart','[]')
}


const btn = document.querySelectorAll("button.pay") /// chọn nút bấm thanh toán
// console.log(btn); /// Kiểm tra hoạt động
if (location.href == 'http://127.0.0.1:5500/js/lesson%204/index.html'){
    localStorage.setItem('log_in','true')
}
/// check đã login trước chưa
if (localStorage.getItem('log_in') == true){
    location.href = 'http://127.0.0.1:5500/js/lesson%204/index.html' /// shop
}
else if(localStorage.getItem('log_in') == false){
    location.href = 'http://127.0.0.1:5500/js/lesson%204/sign_in.html'; /// login
}
/// đăng nhập
function CheckAcc(us,ps){
    if(document.getElementById('Em').value == localStorage.getItem('User') && document.getElementById('Pw').value == localStorage.getItem('Password')){
        location.href = 'http://127.0.0.1:5500/js/lesson%204/index.html';
        localStorage.setItem('log_in','true')
    }
    else{
        alert("user name or password not correct")
    }
}
/// đăng xuất
function Log_out(){
    location.href = 'http://127.0.0.1:5500/js/lesson4/sign_in.html';
    localStorage.setItem('log_in','false')
}
/// chuyển trang shop
let home = () =>{
    location.href = 'http://127.0.0.1:5500/js/lesson4/index.html';
}
/// chuyển trang cart
let cart = () =>{
    location.href = 'http://127.0.0.1:5500/js/lesson4/cart.html'
}
/// function thêm giỏ hàng
btn.forEach(function(button,index){
    console.log(button, index) ///kiểm tra button hoặc index
    button.addEventListener("click",function(){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("p").innerText
        var productPrice = product.querySelector("h4").innerText
        if(localStorage.getItem('cart') == null){
            var productQuantity = 1
        }
        else{
            var currentCart = localStorage.getItem('cart')
            for(let k = 0; k <= currentCart.length - 1; k+=1){
                if(currentCart[i].name == productName){
                    var productQuantity = currentCart[i].quantity + 1
                    let myJSON = JSON.parse(currentCart.slice(i))
                    localStorage.setItem('cart',myJSON)
                }
                break
            }
        }
        let temp = {'image':productImg,'name':productName,'price':productPrice,'quantity':productQuantity}
        console.log(productImg,productName,productPrice);
        addCart(temp)
    })
})
async function addCart(sp){
    let cart = localStorage.getItem('cart') /// Lấy những đồ có sẵn
    console.log(cart);
    if(cart != null){
        var arr = JSON.parse(cart) /// Nếu đã có thì đổi lại thành array 
    }
    arr.forEach((item)=>{if(sp == item){
        item
    }})
    arr.push(sp) /// Thêm sản phẩm mới vào array
    let add = JSON.stringify(arr) /// Biến thành string để ép vào local
    console.log(add);
    localStorage.setItem('cart',add)
    setTimeout('cart()',500)
}
