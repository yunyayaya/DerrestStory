import"./main-00190deb.js";const g=[{id:1,name:"綜合水果戚風蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["festival","cake"],img:"product01.png",specs:["切片","整塊","禮盒"]},{id:2,name:"藍莓乳酪蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:5,category:["new","cake"],img:"product02.png",specs:["切片","整塊","禮盒"]},{id:3,name:"清爽夏日鳳梨檸檬塔",price:{"6入":600,"12入":1200},quantity:10,category:["festival","new"],img:"product03.png",specs:["6入","12入"]},{id:4,name:"提拉米蘇",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["new","cake"],img:"product04.png",specs:["切片","整塊","禮盒"]},{id:5,name:"草莓起司蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["festival","cake"],img:"product05.png",specs:["切片","整塊","禮盒"]},{id:6,name:"紅絲絨蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:4,category:["cake","new"],img:"product06.png",specs:["切片","整塊","禮盒"]},{id:7,name:"經典草莓馬卡龍",price:{"6入":600,"12入":1200},quantity:0,category:["festival","dessert"],img:"product07.png",specs:["6入","12入"]},{id:8,name:"經典焦糖布丁",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","festival"],img:"product08.png",specs:["6入","12入"]},{id:9,name:"經典瑪徳蓮",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"product09.png",specs:["6入","12入"]},{id:10,name:"美式軟餅乾",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"product10.png",specs:["6入","12入"]},{id:11,name:"小柑橘杯子蛋糕",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"product11.png",specs:["6入","12入"]},{id:12,name:"覆盆莓乳酪派",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["cake","new"],img:"product12.jpg",specs:["切片","整塊","禮盒"]},{id:13,name:"巧克力乳酪蛋糕",price:{切片:300,整塊:800,禮盒:1e3},quantity:10,category:["cake","new"],img:"product13.jpg",specs:["切片","整塊","禮盒"]},{id:14,name:"榛果巧克力杯子蛋糕",price:{"6入":600,"12入":1200},quantity:10,category:["dessert","new"],img:"product14.jpg",specs:["6入","12入"]}];let m="all";const v=9;let d=1;function p(n=1){d=n;const e=document.getElementById("product-list");e.innerHTML="";const s=window.innerWidth<=768?6:9,a=m==="all"?g:g.filter(t=>t.category.includes(m)),r=(n-1)*s,o=r+s;a.slice(r,o).forEach(t=>{const c=document.createElement("div");c.classList.add("col-lg-4","col-md-6","col-12","mb-4");const y=t.specs.map(i=>`<option value="${t.price[i]}">${i}</option>`).join("");c.innerHTML=`
      <div class="card border border-primary-700 h-100" style="overflow: hidden;">
          <div class="position-relative">
              <img src="https://raw.githubusercontent.com/yunyayaya/DessertStory/refs/heads/main/assets/images/img_product/${t.img}" class="card-img-top product-card-img" style="height: 240px; object-fit: cover;" alt="${t.name}">
              <button class="btn btn-grey-000 text-grey-700 border border-grey-400 rounded-circle add-to-cart d-block d-sm-none" style="width: 40px; height: 40px; padding: 0; position: absolute; top: 80%; right: 5%;"  data-id="${t.id}">
                  <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
              </button>
          </div>
          <div class="card-body" style="padding: 24px 24px 16px 24px">
              <div class="d-flex justify-content-between align-items-center">
                  <h5 class="product-name fw-bold mb-0">${t.name}</h5>
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
                          <input type="text" class="form-control mx-1 border border-grey-400 quantity-input" style="text-align: center; width:56px; border-radius: 8px;" value="1" min="1" max="${t.quantity}" style="width: 60px;">
                      <button class="btn btn-grey-000 border border-grey-400 custom-btn increase" style="width:40px; height:40px; border-radius: 8px;">
                          <i class="bi bi-plus-lg" style="display: inline-block; width:24px; height:24px; font-size:16px"></i>
                      </button>
                  </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="margin-top: 16px; margin-bottom: 16px;">
                  <p class="card-text mb-0 fs-6 text-grey-700">金額</p>
                  <div class="d-flex">
                      <p class="card-text mb-0 text-secondary-800 fw-bold" style="font-size: 30px; line-height: 1.2;">NT$</p>
                      <p class="card-price mb-0 text-secondary-800 fw-bold product-price" style="font-size: 30px; line-height: 1.2;">${t.price[t.specs[0]]}</p>
                  </div>
              </div>

              <div class="d-none d-sm-block">   
                  <div class="d-flex align-items-center justify-content-end">
                      <p class="d-inline mb-0">加入購物車</p>
                      <button class="btn btn-primary-900 rounded-circle add-to-cart" style="width: 40px; height: 40px; padding: 0; margin-left: 1rem;" data-id="${t.id}">
                          <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
                      </button>
                  </div>
              </div>

          </div>
          
      </div>
  `;const b=c.querySelector(".decrease"),h=c.querySelector(".increase"),u=c.querySelector(".quantity-input");b.addEventListener("click",()=>{let i=parseInt(u.value);i>1&&(i--,u.value=i)}),h.addEventListener("click",()=>{let i=parseInt(u.value);i<t.quantity&&(i++,u.value=i)});const f=c.querySelector(".size-select"),x=c.querySelector(".product-price");f.addEventListener("change",i=>{x.textContent=i.target.value}),c.querySelector(".add-to-cart").addEventListener("click",()=>{alert(`${t.name} ${t.price[spec]} 已加入購物車！`)}),e.appendChild(c)}),w(a.length)}window.toggleHeart=function(n){const e=n.querySelector("i");e.classList.contains("bi-heart")?(e.classList.remove("bi-heart"),e.classList.add("bi-heart-fill")):(e.classList.remove("bi-heart-fill"),e.classList.add("bi-heart"))};$(document).ready(function(){$(".product-category").on("click",function(){$(".mynaui--cupcake").removeClass("mynaui--cupcake-solid"),$(".ic--outline-cake").removeClass("ic--baseline-cake"),$(".mdi--gift-outline").removeClass("mdi--gift"),$(".codicon--sparkle").removeClass("codicon--sparkle-filled"),$(".material-symbols--star").addClass("material-symbols--star-outline"),$(this).find("span.mynaui--cupcake").length&&$(this).find("span.mynaui--cupcake").addClass("mynaui--cupcake-solid"),$(this).find("span.ic--outline-cake").length&&$(this).find("span.ic--outline-cake").addClass("ic--baseline-cake"),$(this).find("span.mdi--gift-outline").length&&$(this).find("span.mdi--gift-outline").addClass("mdi--gift"),$(this).find("span.codicon--sparkle").length&&$(this).find("span.codicon--sparkle").addClass("codicon--sparkle-filled"),$(this).find("span.material-symbols--star").length&&$(this).find("span.material-symbols--star").removeClass("material-symbols--star-outline")})});function w(n){const e=Math.ceil(n/v),s=document.getElementById("pagination");s.innerHTML="";const a=document.createElement("button");a.classList.add("btn","text-primary-900","custom-page-btn","mx-1"),a.textContent="上一頁",a.disabled=d===1,a.addEventListener("click",()=>{p(d-1)}),window.scrollTo({top:0,behavior:"smooth"}),s.appendChild(a);for(let o=1;o<=e;o++){const l=document.createElement("button");l.classList.add("btn","text-primary-900","custom-page-btn","mx-1"),l.textContent=o,o===d&&l.classList.add("active","btn-primary-600","text-grey-000"),l.addEventListener("click",()=>p(o)),window.scrollTo({top:0,behavior:"smooth"}),s.appendChild(l)}const r=document.createElement("button");r.classList.add("btn","text-primary-900","custom-page-btn","mx-1"),r.textContent="下一頁",r.disabled=d===e,r.addEventListener("click",()=>{p(d+1),window.scrollTo({top:0,behavior:"smooth"})}),s.appendChild(r)}function k(n){document.getElementById("categoryDropdown").textContent=n}document.querySelectorAll(".product-menu-mb .dropdown-item").forEach(n=>{n.addEventListener("click",function(){const e=this.textContent.trim();m=this.getAttribute("data-category"),k(e)})});function L(){const e=document.getElementById("category-list").querySelectorAll(".product-category");e.forEach(s=>{s.addEventListener("click",()=>{m=s.getAttribute("data-category"),e.forEach(a=>a.classList.remove("active")),s.classList.add("active"),p(1)})})}document.addEventListener("DOMContentLoaded",()=>{p(),L(),window.addEventListener("resize",()=>p(d))});
