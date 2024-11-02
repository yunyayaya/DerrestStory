const products = [
    { id: 1, name: "綜合水果戚風蛋糕", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 10, category: ["festival", "cake"], img: "product01.png", specs: ['切片', '整塊', '禮盒'] },
    { id: 2, name: "藍莓乳酪蛋糕", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 5, category: ["new", "cake"], img: "product02.png", specs: ['切片', '整塊', '禮盒'] },
    { id: 3, name: "清爽夏日鳳梨檸檬塔", price: { "6入": 600, "12入": 1200 }, quantity: 10, category: ["festival", "new"], img: "product03.png", specs: ['6入', '12入'] },
    { id: 4, name: "提拉米蘇", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 10, category: ["new", "cake"], img: "product04.png", specs: ['切片', '整塊', '禮盒'] },
    { id: 5, name: "草莓起司蛋糕", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 10, category: ["festival", "cake"], img: "product05.png", specs: ['切片', '整塊', '禮盒'] },
    { id: 6, name: "紅絲絨蛋糕", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 4, category: ["cake", "new"], img: "product06.png", specs: ['切片', '整塊', '禮盒'] },
    { id: 7, name: "經典草莓馬卡龍", price: { "6入": 600, "12入": 1200 }, quantity: 0, category: ["festival", "dessert"], img: "product07.png", specs: ['6入', '12入'] },
    { id: 8, name: "經典焦糖布丁", price: { "6入": 600, "12入": 1200 }, quantity: 10, category: ["dessert", "festival"], img: "product08.png", specs: ['6入', '12入'] },
    { id: 9, name: "經典瑪徳蓮", price: { "6入": 600, "12入": 1200 }, quantity: 10, category: ["dessert", "new"], img: "product09.png", specs: ['6入', '12入'] },
    { id: 10, name: "美式軟餅乾", price: { "6入": 600, "12入": 1200 }, quantity: 10, category: ["dessert", "new"], img: "product10.png", specs: ['6入', '12入'] },
    { id: 11, name: "小柑橘杯子蛋糕", price: { "6入": 600, "12入": 1200 }, quantity: 10, category: ["dessert", "new"], img: "product11.png", specs: ['6入', '12入'] },
    { id: 12, name: "覆盆莓乳酪派", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 10, category: ["cake", "new"], img: "product12.jpg", specs: ['切片', '整塊', '禮盒'] },
    { id: 13, name: "巧克力乳酪蛋糕", price: { "切片": 300, "整塊": 800, "禮盒": 1000 }, quantity: 10, category: ["cake", "new"], img: "product13.jpg", specs: ['切片', '整塊', '禮盒'] },
    { id: 14, name: "榛果巧克力杯子蛋糕", price: { "6入": 600, "12入": 1200 }, quantity: 10, category: ["dessert", "new"], img: "product14.jpg", specs: ['6入', '12入'] }
];


let currentCategory = "all"; // 當前選擇的分類
const productsPerPage = 9; // 每頁顯示的商品數量
let currentPage = 1;

// 載入商品到對應頁面
function loadProducts(page = 1) {
    currentPage = page;
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // 清空商品區域

    // 根據分類篩選商品
    const filteredProducts = currentCategory === "all"
        ? products
        : products.filter(product => product.category.includes(currentCategory));

    // 計算當前頁要顯示的商品範圍
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = filteredProducts.slice(start, end);

    // 將商品加入頁面
    pageProducts.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("col-lg-4", "col-md-6", "col-12", "mb-4");

        // 生成規格選擇
        const specsOptions = product.specs.map(spec =>
            `<option value="${product.price[spec]}">${spec}</option>`
        ).join('');

        productItem.innerHTML = `
      <div class="card border border-primary-700 h-100" style="overflow: hidden;">
          <div class="position-relative">
              <img src="${new URL(`../assets/images/img_product/${product.name}`, import.meta.url)}" class="card-img-top product-card-img" style="height: 240px; object-fit: cover;" alt="${product.name}">
              <button class="btn btn-grey-000 text-grey-700 border border-grey-400 rounded-circle add-to-cart d-block d-sm-none" style="width: 40px; height: 40px; padding: 0; position: absolute; top: 80%; right: 5%;"  data-id="${product.id}">
                  <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
              </button>
          </div>
          <div class="card-body" style="padding: 24px 24px 16px 24px">
              <div class="d-flex justify-content-between align-items-center">
                  <h5 class="product-name fw-bold mb-0">${product.name}</h5>
                  <button type="button" value="like" class="btn p-0" title="收藏" style="border: none; background: none; display: inline-flex;" onclick="toggleHeart(this)">
                      <i class="bi bi-heart" style="color: red; font-size: 24px;"></i>
                  </button>
              </div>
          </div>
          <div class="card-content" style="padding: 0px 24px 24px 24px">
              <select class="form-select size-select border border-grey-400 text-primary-900 my-3 py-2" style="border-radius: 8px;" aria-label="選擇規格">
              <option selected>選擇規格</option>
              ${specsOptions}
              </select>
              <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text mb-0 fs-6 text-grey-700">數量</p>
                  <div class="d-flex align-items-center">
                      <button class="btn btn-grey-000 border border-grey-400 custom-btn decrease" style="width:40px; height:40px; border-radius: 8px;">
                          <i class="bi bi-dash-lg" style="display: inline-block; width:24px; height:24px;"></i>
                      </button>
                          <input type="text" class="form-control mx-1 border border-grey-400 quantity-input" style="text-align: center; width:56px; border-radius: 8px;" value="1" min="1" max="${product.quantity}" style="width: 60px;">
                      <button class="btn btn-grey-000 border border-grey-400 custom-btn increase" style="width:40px; height:40px; border-radius: 8px;">
                          <i class="bi bi-plus-lg" style="display: inline-block; width:24px; height:24px; font-size:16px"></i>
                      </button>
                  </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="margin-top: 16px; margin-bottom: 16px;">
                  <p class="card-text mb-0 fs-6 text-grey-700">金額</p>
                  <div class="d-flex">
                      <p class="card-text mb-0 text-secondary-800 fw-bold" style="font-size: 30px; line-height: 1.2;">NT$</p>
                      <p class="card-price mb-0 text-secondary-800 fw-bold product-price" style="font-size: 30px; line-height: 1.2;">${product.price[product.specs[0]]}</p>
                  </div>
              </div>

              <div class="d-none d-sm-block">   
                  <div class="d-flex align-items-center justify-content-end">
                      <p class="d-inline mb-0">加入購物車</p>
                      <button class="btn btn-primary-900 rounded-circle add-to-cart" style="width: 40px; height: 40px; padding: 0; margin-left: 1rem;" data-id="${product.id}">
                          <i class="bi bi-plus" style="font-size: 1.5rem;"></i>
                      </button>
                  </div>
              </div>

          </div>
          
      </div>
  `;

        // 數量增減按鈕
        const decreaseButton = productItem.querySelector('.decrease');
        const increaseButton = productItem.querySelector('.increase');
        const quantityInput = productItem.querySelector('.quantity-input');

        decreaseButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityInput.value = currentQuantity;
            }
        });

        increaseButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity < product.quantity) {
                currentQuantity++;
                quantityInput.value = currentQuantity;
            }
        });

        // 根據規格選擇更新價格
        const selectElement = productItem.querySelector('.size-select');
        const priceElement = productItem.querySelector('.product-price');

        selectElement.addEventListener('change', (event) => {
            priceElement.textContent = event.target.value; // 更新顯示價格
        });

        //加入購物車
        const addToCartButton = productItem.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            // const selectedSize = selectElement.value;
            // const productId = product.id;
            // const productQuantity = parseInt(quantityInput.value);

            // const cartItem = {
            //     id: productId,
            //     name: product.name,
            //     price: selectedSize,
            //     quantity: productQuantity
            // };

            // // 將商品加入購物車
            // cart.push(cartItem);
            alert(`${product.name} ${product.price[spec]} 已加入購物車！`);
        });

        productList.appendChild(productItem);
    });


    renderPagination(filteredProducts.length);
}

//收藏按鈕
window.toggleHeart = function (button) {
    const icon = button.querySelector('i');
    if (icon.classList.contains('bi-heart')) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
    } else {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
    }
};


//選單頁籤切換
$(document).ready(function () {
    $('.product-category').on('click', function () {
        // 先把所有的 span 類別改回原始類別
        $('.mynaui--cupcake').removeClass('mynaui--cupcake-solid');
        $('.ic--outline-cake').removeClass('ic--baseline-cake');
        $('.mdi--gift-outline').removeClass('mdi--gift');
        $('.codicon--sparkle').removeClass('codicon--sparkle-filled');
        //所有商品icon，初始預設為實心，改成空心
        $('.material-symbols--star').addClass('material-symbols--star-outline');

        // 如果點擊甜點專區，則將其類別改為實心
        if ($(this).find('span.mynaui--cupcake').length) {
            $(this).find('span.mynaui--cupcake').addClass('mynaui--cupcake-solid');
        }
        //如果點擊蛋糕專區，則將其類別改為實心
        if ($(this).find('span.ic--outline-cake').length) {
            $(this).find('span.ic--outline-cake').addClass('ic--baseline-cake');
        }
        //節目限定
        if ($(this).find('span.mdi--gift-outline').length) {
            $(this).find('span.mdi--gift-outline').addClass('mdi--gift');
        }
        //新品上市
        if ($(this).find('span.codicon--sparkle').length) {
            $(this).find('span.codicon--sparkle').addClass('codicon--sparkle-filled');
        }
        //所有商品，點擊時變回實心
        if ($(this).find('span.material-symbols--star').length) {
            $(this).find('span.material-symbols--star').removeClass('material-symbols--star-outline');
        }
    });
});

// 生成頁數分頁按鈕
function renderPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; // 清空分頁按鈕

    // 上一頁按鈕
    const prevButton = document.createElement("button");
    prevButton.classList.add("btn", "text-primary-900", "custom-page-btn", "mx-1");
    prevButton.textContent = "上一頁";
    prevButton.disabled = currentPage === 1; // 如果當前頁是1，禁用按鈕
    prevButton.addEventListener("click", () => {
        loadProducts(currentPage - 1); // 加載前一頁的商品
    });
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 自動滾動到頁面頂部
    pagination.appendChild(prevButton);

    // 分頁按鈕
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.classList.add("btn", "text-primary-900", "custom-page-btn", "mx-1");
        pageButton.textContent = i;
        if (i === currentPage) pageButton.classList.add("active", "btn-primary-600", "text-grey-000");

        // 點擊事件載入對應頁面的商品
        pageButton.addEventListener("click", () =>
            loadProducts(i));
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 自動滾動到頁面頂部
        pagination.appendChild(pageButton);
    }

    // 下一頁按鈕
    const nextButton = document.createElement("button");
    nextButton.classList.add("btn", "text-primary-900", "custom-page-btn", "mx-1");
    nextButton.textContent = "下一頁";
    nextButton.disabled = currentPage === totalPages; // 如果當前頁是最後一頁，禁用按鈕
    nextButton.addEventListener("click", () => {
        loadProducts(currentPage + 1); // 加載下一頁的商品
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 自動滾動到頁面頂部
    });
    pagination.appendChild(nextButton);


}

// 更新選擇分類的顯示(手機版下拉選單)

function updateDropdownText(categoryText) {
    document.getElementById("categoryDropdown").textContent = categoryText;
}
//updateDropdownText("所有商品");
// 設置分類選擇事件(手機版下拉選單)
document.querySelectorAll(".product-menu-mb .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        const categoryText = this.textContent.trim(); // 獲取選項文本
        currentCategory = this.getAttribute("data-category"); // 更新當前分類
        updateDropdownText(categoryText); // 更新按鈕顯示
    });
});

// 設置分類篩選
function setupCategoryFilter() {
    const categoryList = document.getElementById("category-list");
    const categories = categoryList.querySelectorAll(".product-category");
    categories.forEach(categoryItem => {
        categoryItem.addEventListener("click", () => {
            // 更新當前分類和激活狀態
            currentCategory = categoryItem.getAttribute("data-category");
            categories.forEach(item => item.classList.remove("active"));
            categoryItem.classList.add("active");
            // 重置頁面和載入對應分類的商品
            loadProducts(1);
        });
    });
}

// 初始化載入第一頁商品和設置分類篩選
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupCategoryFilter();

});