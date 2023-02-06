const Parent = document.querySelector(".list");
let html = ``
CheckCart()
let clear_cart = () =>{ /// Xóa tất cả
    localStorage.setItem('cart','[]')
}
function CheckCart(){ /// refresh giỏ hàng
    let cart = localStorage.getItem('cart')
    cart = JSON.parse(cart)
    cart.forEach((item)=> {
        console.log(item.name,item.image,item.price);
        html += `
        <div class="Item">
            <img src="${item.image}" alt="">
            <h2 class="name">${item.name}</h2>
            <h5 class="amount"></h5>
            <h5 class="price">${item.price}</h5>
        </div>`
    })
    Parent.innerHTML = html
    }
