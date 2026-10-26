

/* =========================
   PRODUCT IMAGES
========================= */

const productImages = [

    "E-iamgeitem/All_ItemIamge/Iphone18_ProMax_WhiteColor.png",
    "E-iamgeitem/All_ItemIamge/Iphone18ProMax_brownColor.png",
    "E-iamgeitem/Mobiles/iphone18-side.png",
    "E-iamgeitem/Mobiles/iphone18-camera.png",
    "E-iamgeitem/Mobiles/iphone18-display.png"
];



/* =========================
   CHANGE IMAGE
========================= */

function changeImage(index){
    const mainImage =
        document.getElementById("mainProductImage");
    const imageNumber =
        document.getElementById("imageNumber");
    mainImage.src =
        productImages[index];
    imageNumber.textContent =
        index + 1;
    const thumbnails =
        document.querySelectorAll(".thumbnail");
    thumbnails.forEach(item => {
        item.classList.remove("active");
    });
    thumbnails[index].classList.add("active");

}



/* =========================
   COLOR
========================= */

function selectColor(element){

    document
    .querySelectorAll(".color-option")
    .forEach(item => {

        item.classList.remove("selected");

    });

    element.classList.add("selected");

}



/* =========================
   STORAGE
========================= */

function selectStorage(element){

    document
    .querySelectorAll(".storage")
    .forEach(item => {

        item.classList.remove("selected");

    });

    element.classList.add("selected");

}



/* =========================
   QUANTITY
========================= */

let quantity = 1;


function increaseQty(){

    quantity++;

    document
    .getElementById("quantity")
    .textContent = quantity;

}


function decreaseQty(){

    if(quantity > 1){

        quantity--;

    }

    document
    .getElementById("quantity")
    .textContent = quantity;

}



/* =========================
   ADD CART
========================= */

function addToCart(){

    showToast(
        "iPhone 18 Pro Max added to cart!"
    );

}



/* =========================
   BUY NOW
========================= */

function buyNow(){

    showToast(
        "Opening checkout..."
    );

}



/* =========================
   TOAST
========================= */

function showToast(message){

    const toast =
        document.getElementById("toast");

    const toastText =
        document.getElementById("toastText");

    toastText.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}



/* =========================
   TABS
========================= */

function openTab(button, tabId){

    document
    .querySelectorAll(".tab")
    .forEach(tab => {

        tab.classList.remove("active");

    });

    button.classList.add("active");


    document
    .querySelectorAll(".tab-content")
    .forEach(content => {

        content.style.display = "none";

    });


    document
    .getElementById(tabId)
    .style.display = "block";

}



/* =========================
   BACK BUTTON
========================= */

function goBack(){

    window.history.back();

}