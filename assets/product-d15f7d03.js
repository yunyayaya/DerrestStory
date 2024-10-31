import"./main-a6b74a3f.js";const n={1:[{id:1,name:"綜合水果戚風蛋糕",quantity:10,price:800,img:"../assets/images/img_product/product01.png",specs:["切片","整塊","禮盒"]},{id:2,name:"藍莓乳酪蛋糕",quantity:5,price:800,img:"../assets/images/img_product/product02.png",specs:["切片","整塊","禮盒"]},{id:3,name:"清爽夏日鳳梨檸檬塔",quantity:10,price:800,img:"../assets/images/img_product/product03.png",specs:["6入","12入"]},{id:4,name:"提拉米蘇",quantity:10,price:800,img:"../assets/images/img_product/product04.png",specs:["切片","整塊","禮盒"]},{id:5,name:"草莓起司蛋糕",quantity:5,price:800,img:"../assets/images/img_product/product05.png",specs:["切片","整塊","禮盒"]},{id:6,name:"紅絲絨蛋糕",quantity:10,price:800,img:"../assets/images/img_product/product06.png",specs:["切片","整塊","禮盒"]},{id:7,name:"經典草莓馬卡龍",quantity:10,price:800,img:"../assets/images/img_product/product07.png",specs:["6入","12入"]},{id:8,name:"經典焦糖布丁",quantity:5,price:800,img:"../assets/images/img_product/product08.png",specs:["6入","12入"]},{id:9,name:"經典瑪徳蓮",quantity:0,price:800,img:"../assets/images/img_product/product09.png",specs:["6入","12入"]}],2:[{id:1,name:"提拉米蘇",quantity:10,price:800,img:"../assets/images/img_product/product04.png",specs:["切片","整塊","禮盒"]},{id:2,name:"草莓起司蛋糕",quantity:5,price:800,img:"../assets/images/img_product/product05.png",specs:["切片","整塊","禮盒"]},{id:3,name:"紅絲絨蛋糕",quantity:10,price:800,img:"../assets/images/img_product/product06.png",specs:["切片","整塊","禮盒"]},{id:4,name:"經典草莓馬卡龍",quantity:10,price:800,img:"../assets/images/img_product/product07.png",specs:["6入","12入"]},{id:5,name:"經典焦糖布丁",quantity:5,price:800,img:"../assets/images/img_product/product08.png",specs:["6入","12入"]}],3:[{id:1,name:"清爽夏日鳳梨檸檬塔",quantity:10,price:800,img:"../assets/images/img_product/product03.png",specs:["6入","12入"]},{id:2,name:"經典草莓馬卡龍",quantity:10,price:800,img:"../assets/images/img_product/product07.png",specs:["6入","12入"]},{id:3,name:"經典焦糖布丁",quantity:5,price:800,img:"../assets/images/img_product/product08.png",specs:["6入","12入"]},{id:4,name:"經典瑪徳蓮",quantity:0,price:800,img:"../assets/images/img_product/product09.png",specs:["6入","12入"]}],4:[{id:1,name:"綜合水果戚風蛋糕",quantity:10,price:800,img:"../assets/images/img_product/product01.png",specs:["切片","整塊","禮盒"]},{id:2,name:"藍莓乳酪蛋糕",quantity:5,price:800,img:"../assets/images/img_product/product02.png",specs:["切片","整塊","禮盒"]},{id:3,name:"草莓起司蛋糕",quantity:5,price:800,img:"../assets/images/img_product/product05.png",specs:["切片","整塊","禮盒"]},{id:4,name:"紅絲絨蛋糕",quantity:10,price:800,img:"../assets/images/img_product/product06.png",specs:["切片","整塊","禮盒"]},{id:5,name:"提拉米蘇",quantity:10,price:800,img:"../assets/images/img_product/product04.png",specs:["切片","整塊","禮盒"]}],5:[{id:1,name:"清爽夏日鳳梨檸檬塔",quantity:10,price:800,img:"../assets/images/img_product/product03.png",specs:["6入","12入"]},{id:2,name:"經典草莓馬卡龍",quantity:10,price:800,img:"../assets/images/img_product/product07.png",specs:["6入","12入"]},{id:3,name:"經典焦糖布丁",quantity:5,price:800,img:"../assets/images/img_product/product08.png",specs:["6入","12入"]},{id:4,name:"經典瑪徳蓮",quantity:0,price:800,img:"../assets/images/img_product/product09.png",specs:["6入","12入"]}]},p=e=>{document.getElementById(`pagination-${e}`);const t=document.getElementById(`product-list-${e}`);t.innerHTML=n[e].map(i=>`
      <div class="col-lg-4">
        <div class="card mb-4 border border-primary-700" style="overflow: hidden;" >
          <img src="${i.img}" class="card-img-top" style="height: 240px; object-fit: cover;" alt="${i.name}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title fw-bold mb-0">${i.name}</h5>
              <button type="button" value="like" class="btn" title="收藏" style="border: none; background: none; display: inline-flex" onclick="toggleHeart(this)">
                <i class="bi bi-heart" style="color: red; font-size: 24px;"></i>
              </button>
            </div>
            <select class="form-select border border-grey-400 text-primary-900 my-3 py-2" style="border-radius: 8px;" aria-label="選擇規格">
              <option selected>選擇規格</option>
              ${i.specs.map(s=>`<option value="${s}">${s}</option>`).join("")}
            </select>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text mb-0 fs-6 text-grey-700">數量</p>
              <div class="d-flex align-items-center">
                <button class="btn btn-grey-000 border border-grey-400 custom-btn" style="width:40px; height:40px; border-radius: 8px;" onclick="changeQuantity(${e}, ${i.id}, -1)" ${i.quantity<=0?"disabled":""}>
                <i class="bi bi-dash-lg" style="display: inline-block; width:24px; height:24px;"></i>
                </button>
                <input type="text" class="form-control mx-1 border border-grey-400" style="text-align: center; width:56px; border-radius: 8px;" id="quantity-${e}-${i.id}" value="1" min="1" max="${i.quantity}" onchange="updateQuantity(${e}, ${i.id})" style="width: 60px;">
                <button class="btn btn-grey-000 border border-grey-400 custom-btn" style="width:40px; height:40px; border-radius: 8px;" onclick="changeQuantity(${e}, ${i.id}, 1)" ${i.quantity<=0?"disabled":""}>
                  <i class="bi bi-plus-lg" style="display: inline-block; width:24px; height:24px; font-size:16px"></i>
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center my-3">
              <p class="card-text mb-0 fs-6 text-grey-700">金額</p>
              <p class="card-price mb-0 text-secondary-800 fw-bold" style="font-size: 30px; line-height: 1.2;">NT$ ${i.price}</p>
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <p class="mb-0" style="margin-right:16px">加入購物車</p>
              <button class="btn btn-primary-900 rounded-circle" id="add-to-cart-${e}-${i.id}" onclick="addToCart(${e}, ${i.id})" ${i.quantity===0?"disabled":""} style="width: 40px; height: 40px; padding: 0;">
                <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("")};window.toggleHeart=function(e){const t=e.querySelector("i");t.classList.contains("bi-heart")?(t.classList.remove("bi-heart"),t.classList.add("bi-heart-fill")):(t.classList.remove("bi-heart-fill"),t.classList.add("bi-heart"))};$(document).ready(function(){$(".product-nav").on("click",function(){$(".mynaui--cupcake").removeClass("mynaui--cupcake-solid"),$(".ic--outline-cake").removeClass("ic--baseline-cake"),$(".mdi--gift-outline").removeClass("mdi--gift"),$(".codicon--sparkle").removeClass("codicon--sparkle-filled"),$(".material-symbols--star").addClass("material-symbols--star-outline"),$(this).find("span.mynaui--cupcake").length&&$(this).find("span.mynaui--cupcake").addClass("mynaui--cupcake-solid"),$(this).find("span.ic--outline-cake").length&&$(this).find("span.ic--outline-cake").addClass("ic--baseline-cake"),$(this).find("span.mdi--gift-outline").length&&$(this).find("span.mdi--gift-outline").addClass("mdi--gift"),$(this).find("span.codicon--sparkle").length&&$(this).find("span.codicon--sparkle").addClass("codicon--sparkle-filled"),$(this).find("span.material-symbols--star").length&&$(this).find("span.material-symbols--star").removeClass("material-symbols--star-outline")})});window.changeQuantity=(e,t,i)=>{const s=n[e].find(d=>d.id===t),c=document.getElementById(`quantity-${e}-${t}`);let a=parseInt(c.value)+i;a<1?a=1:a>s.quantity&&(a=s.quantity),c.value=a};window.addToCart=(e,t)=>{alert(`已將 ${n[e].find(i=>i.id===t).name} 加入購物車！`)};Object.keys(n).forEach(e=>p(e));
