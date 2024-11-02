import"./main-669cdc15.js";const g=[{id:1,name:"綜合水果戚風蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["festival","cake"],img:"/assets/images/img_product/product01.png",specs:["切片","整塊","禮盒"]},{id:2,name:"藍莓乳酪蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:5,category:["new","cake"],img:"/assets/images/img_product/product02.png",specs:["切片","整塊","禮盒"]},{id:3,name:"清爽夏日鳳梨檸檬塔",price:{"6入":600,"12入":1200},quantity:10,category:["festival","new"],img:"/assets/images/img_product/product03.png",specs:["6入","12入"]},{id:4,name:"提拉米蘇",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["new","cake"],img:"/assets/images/img_product/product04.png",specs:["切片","整塊","禮盒"]},{id:5,name:"草莓起司蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["festival","cake"],img:"/assets/images/img_product/product05.png",specs:["切片","整塊","禮盒"]},{id:6,name:"紅絲絨蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:4,category:["cake","new"],img:"/assets/images/img_product/product06.png",specs:["切片","整塊","禮盒"]},{id:7,name:"經典草莓馬卡龍",price:{"6入":600,"12入":1200},quantity:0,category:["festival","dessert"],img:"/assets/images/img_product/product07.png",specs:["6入","12入"]},{id:8,name:"經典焦糖布丁",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","festival"],img:"/assets/images/img_product/product08.png",specs:["6入","12入"]},{id:9,name:"經典瑪徳蓮",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"/assets/images/img_product/product09.png",specs:["6入","12入"]},{id:10,name:"美式軟餅乾",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"/assets/images/img_product/product10.png",specs:["6入","12入"]},{id:11,name:"小柑橘杯子蛋糕",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"/assets/images/img_product/product11.png",specs:["6入","12入"]},{id:12,name:"覆盆莓乳酪派",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["cake","new"],img:"/assets/images/img_product/product12.jpg",specs:["切片","整塊","禮盒"]},{id:13,name:"巧克力乳酪蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["cake","new"],img:"/assets/images/img_product/product13.jpg",specs:["切片","整塊","禮盒"]},{id:14,name:"榛果巧克力杯子蛋糕",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"/assets/images/img_product/product14.jpg",specs:["6入","12入"]}];let m="all";const u=9;let d=1;function l(s=1){d=s;const t=document.getElementById("product-list");t.innerHTML="";const a=m==="all"?g:g.filter(e=>e.category.includes(m)),n=(s-1)*u,o=n+u;a.slice(n,o).forEach(e=>{const c=document.createElement("div");c.classList.add("col-lg-4","col-md-6","col-12","mb-4");const y=e.specs.map(i=>`<option value="${e.price[i]}">${i}</option>`).join("");c.innerHTML=`
      <div class="card border border-primary-700 h-100" style="overflow: hidden;">
          <div class="position-relative">
              <img src="${e.img}" class="card-img-top product-card-img" style="height: 240px; object-fit: cover;" alt="${e.name}">
              <button class="btn btn-grey-000 text-grey-700 border border-grey-400 rounded-circle add-to-cart d-block d-sm-none" style="width: 40px; height: 40px; padding: 0; position: absolute; top: 80%; right: 5%;"  data-id="${e.id}">
                  <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
              </button>
          </div>
          <div class="card-body" style="padding: 24px 24px 16px 24px">
              <div class="d-flex justify-content-between align-items-center">
                  <h5 class="product-name fw-bold mb-0">${e.name}</h5>
                  <button type="button" value="like" class="btn p-0" title="收藏" style="border: none; background: none; display: inline-flex;" onclick="toggleHeart(this)">
                      <i class="bi bi-heart" style="color: red; font-size: 24px;"></i>
                  </button>
              </div>
          </div>
          <div class="card-content" style="padding: 0px 24px 24px 24px">
              <select class="form-select size-select border border-grey-400 text-primary-900 my-3 py-2" style="border-radius: 8px;" aria-label="選擇規格">
              <option selected>選擇規格</option>
              ${y}
              </select>
              <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text mb-0 fs-6 text-grey-700">數量</p>
                  <div class="d-flex align-items-center">
                      <button class="btn btn-grey-000 border border-grey-400 custom-btn decrease" style="width:40px; height:40px; border-radius: 8px;">
                          <i class="bi bi-dash-lg" style="display: inline-block; width:24px; height:24px;"></i>
                      </button>
                          <input type="text" class="form-control mx-1 border border-grey-400 quantity-input" style="text-align: center; width:56px; border-radius: 8px;" value="1" min="1" max="${e.quantity}" style="width: 60px;">
                      <button class="btn btn-grey-000 border border-grey-400 custom-btn increase" style="width:40px; height:40px; border-radius: 8px;">
                          <i class="bi bi-plus-lg" style="display: inline-block; width:24px; height:24px; font-size:16px"></i>
                      </button>
                  </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="margin-top: 16px; margin-bottom: 16px;">
                  <p class="card-text mb-0 fs-6 text-grey-700">金額</p>
                  <div class="d-flex">
                      <p class="card-text mb-0 text-secondary-800 fw-bold" style="font-size: 30px; line-height: 1.2;">NT$</p>
                      <p class="card-price mb-0 text-secondary-800 fw-bold product-price" style="font-size: 30px; line-height: 1.2;">${e.price[e.specs[0]]}</p>
                  </div>
              </div>

              <div class="d-none d-sm-block">   
                  <div class="d-flex align-items-center justify-content-end">
                      <p class="d-inline mb-0">加入購物車</p>
                      <button class="btn btn-primary-900 rounded-circle add-to-cart" style="width: 40px; height: 40px; padding: 0; margin-left: 1rem;" data-id="${e.id}">
                          <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
                      </button>
                  </div>
              </div>

          </div>
          
      </div>
  `;const b=c.querySelector(".decrease"),f=c.querySelector(".increase"),p=c.querySelector(".quantity-input");b.addEventListener("click",()=>{let i=parseInt(p.value);i>1&&(i--,p.value=i)}),f.addEventListener("click",()=>{let i=parseInt(p.value);i<e.quantity&&(i++,p.value=i)});const h=c.querySelector(".size-select"),x=c.querySelector(".product-price");h.addEventListener("change",i=>{x.textContent=i.target.value}),c.querySelector(".add-to-cart").addEventListener("click",()=>{alert(`${e.name} ${e.price[spec]} 已加入購物車！`)}),t.appendChild(c)}),v(a.length)}window.toggleHeart=function(s){const t=s.querySelector("i");t.classList.contains("bi-heart")?(t.classList.remove("bi-heart"),t.classList.add("bi-heart-fill")):(t.classList.remove("bi-heart-fill"),t.classList.add("bi-heart"))};$(document).ready(function(){$(".product-category").on("click",function(){$(".mynaui--cupcake").removeClass("mynaui--cupcake-solid"),$(".ic--outline-cake").removeClass("ic--baseline-cake"),$(".mdi--gift-outline").removeClass("mdi--gift"),$(".codicon--sparkle").removeClass("codicon--sparkle-filled"),$(".material-symbols--star").addClass("material-symbols--star-outline"),$(this).find("span.mynaui--cupcake").length&&$(this).find("span.mynaui--cupcake").addClass("mynaui--cupcake-solid"),$(this).find("span.ic--outline-cake").length&&$(this).find("span.ic--outline-cake").addClass("ic--baseline-cake"),$(this).find("span.mdi--gift-outline").length&&$(this).find("span.mdi--gift-outline").addClass("mdi--gift"),$(this).find("span.codicon--sparkle").length&&$(this).find("span.codicon--sparkle").addClass("codicon--sparkle-filled"),$(this).find("span.material-symbols--star").length&&$(this).find("span.material-symbols--star").removeClass("material-symbols--star-outline")})});function v(s){const t=Math.ceil(s/u),a=document.getElementById("pagination");a.innerHTML="";const n=document.createElement("button");n.classList.add("btn","text-primary-900","custom-page-btn","mx-1"),n.textContent="上一頁",n.disabled=d===1,n.addEventListener("click",()=>{l(d-1)}),window.scrollTo({top:0,behavior:"smooth"}),a.appendChild(n);for(let r=1;r<=t;r++){const e=document.createElement("button");e.classList.add("btn","text-primary-900","custom-page-btn","mx-1"),e.textContent=r,r===d&&e.classList.add("active","btn-primary-600","text-grey-000"),e.addEventListener("click",()=>l(r)),window.scrollTo({top:0,behavior:"smooth"}),a.appendChild(e)}const o=document.createElement("button");o.classList.add("btn","text-primary-900","custom-page-btn","mx-1"),o.textContent="下一頁",o.disabled=d===t,o.addEventListener("click",()=>{l(d+1),window.scrollTo({top:0,behavior:"smooth"})}),a.appendChild(o)}function k(s){document.getElementById("categoryDropdown").textContent=s}document.querySelectorAll(".product-menu-mb .dropdown-item").forEach(s=>{s.addEventListener("click",function(){const t=this.textContent.trim();m=this.getAttribute("data-category"),k(t)})});function w(){const t=document.getElementById("category-list").querySelectorAll(".product-category");t.forEach(a=>{a.addEventListener("click",()=>{m=a.getAttribute("data-category"),t.forEach(n=>n.classList.remove("active")),a.classList.add("active"),l(1)})})}document.addEventListener("DOMContentLoaded",()=>{l(),w()});
