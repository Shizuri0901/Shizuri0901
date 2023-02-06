const root = document.querySelector('.root');

let data = [
    {
        id:0,
        name:'Sach 0'
    },
    {
        id:1,
        name:'Sach 1'
    },
    {
        id:2,
        name:'Sach 2'
    },

];
let html = '';
data.forEach((item)=>{
    console.log(item.id,item.name);
    html+=`
    <h1 id ="heading">
         ${item.name}
        <span class="des">lOP ${item.id}</span>
    </h1>
    `
})
root.innerHTML= html;

// GIO EM MUON ANH DOI ID CUA SPAN DUNG K ?
// y la duplicate cai element theo so san pham a a 
// GHI DAU DI
// ý là nhân số element lên theo số lượng sản phẩm á anh
// A ANH HIEU DE A CHO E XEM THU CO PHAI VAY K NHA
// anh setting cho e khi e luu code thi no format code lai nha
// nhma em còn muốn nó thêm class để css nữa mà
// lúc em thêm class vào thì nó báo lỗi
// day a vidu cho e 1 cai nay roi a dua tai lieu cho e xem
// tutu a chua lam xong no itiep di 

// y em vay dung k
// đr nhma dùng document.write đc ko a 
// dau e thu cho a xem

// cai nay tien lam
// mot em render du lieu tu localstorage ra giao dien cung nhu nay do
// em thao tac qua array cung nhu local thoi
// san pham cuoi khoa la e phai lay API cua ben ngoai xong do du lieu do vao trang web
// thi cai tu duy do~ du lieu tu API cung nhu array thoi vi API no cung giong array nha
// em tưởng qua json nó thành obj chứ
// array type cua no trong ngon ngu javascript nay la object
// function type cung la object nen e phai hieu la type no k quyet dinh nhieu`