let categorySection = [
  "Electronics",
  "Mobiles & Tablets",
  "Computers & Laptops",
  "Fashion",
  "Men",
  "Women",
  "Kids",
  "Beauty & Personal Care",
  "Home & Kitchen",
  "Furniture",
  "Grocery",
  "Sports & Fitness",
  "Toys & Games",
  "Jewellery & Accessories",
  "Shoes & Footwear",
  "Bags & Luggage",
  "Watches",
  "Health & Wellness",
  "Baby Products",
  "Automotive",
  "Pet Supplies",
  "Home Appliances",
  "Clothing",
  "Accessories",
  "Other",
];

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const selectedText = document.querySelector(".selected-text");
// const dropdownItems = document.querySelectorAll(".dropdown-item");
// /dropdown menu -----------------------------
dropdownMenu.innerHTML = "";

for (let i = 0; i < categorySection.length; i++) {
  dropdownMenu.innerHTML += `
        <div class="dropdown-item">${categorySection[i]}</div>
    `;
}

// Open / Close Dropdown
dropdownBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdownMenu.classList.toggle("show");
  dropdownBtn.classList.toggle("active");
});

// Select Item

// Click Outside
document.addEventListener("click", () => {
  dropdownMenu.classList.remove("show");
  dropdownBtn.classList.remove("active");
});

// ==================================LOG IN FORM AND SIGN UP FROM SESTION===============================================

const loginPopup = document.getElementById("loginPopup");

const signupPopup = document.getElementById("signupPopup");

// Login open
function openLogin() {
  signupPopup.classList.remove("active");

  loginPopup.classList.add("active");
}

// Signup open
function openSignup() {
  loginPopup.classList.remove("active");

  signupPopup.classList.add("active");
  signupPopup.style.transition = "3s ease-in-out";
}

// Close
function closeForms() {
  loginPopup.classList.remove("active");

  signupPopup.classList.remove("active");
}

// Login submit
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Login Successful!");

    closeForms();
  });

// Signup submit

// Password Mismatch! Access =======================================
let arePassword = document.getElementById("Password");
let areConfimPassword = document.getElementById("ConfirmPassword");
let arePasswordMismatch = document.getElementById("PasswordMatch");
let areEmailFill = document.getElementById("Email@id");
let areUserName = document.getElementById("userNames");
let areCheckBoxClick = document.getElementById("checkBoxHanddle");
arePasswordMismatch.addEventListener("click", function () {
  // Form empty
  if (
    arePassword.value === "" ||
    areConfimPassword.value === "" ||
    areEmailFill.value === "" ||
    areUserName.value === "" ||
    areCheckBoxClick.value === ""
  ) {
    alert("⚠️ Please fill in all required fields before submitting the form.");
    return;
  }

  // Password empty
  if (arePassword.value === "" || areConfimPassword.value === "") {
    event.preventDefault();

    alert("⚠️ Please enter your password and confirm password.");
    return;
  }

  // Password do not match
  if (arePassword.value !== areConfimPassword.value) {
    event.preventDefault();

    alert("🚫 Authentication Failed: Passwords Do Not Match.");
    return;
  }

  // Password is match
  alert("✅ Passwords Match! Account Verification Successful.");
});

//=================================== shopt category ===================================

let areClickBtnToShopCategroyOpentBox =
  document.getElementById("Grid_View_more");

let areshow_shopCategory = document.querySelector(".hide_shopCatagroy");

areClickBtnToShopCategroyOpentBox.addEventListener("click", function () {
  areshow_shopCategory.style.display = "block";
});

function closeFormsShopCategory() {
  areshow_shopCategory.style.display = "none";
}

// scroll event are smooth --- hidden button click in show are --------------->

let arehiddenBox = document.getElementById("show_shopCategory");
areClickBtnToShopCategroyOpentBox.addEventListener("click", function () {
  arehiddenBox.scrollIntoView({
    behavior: "smooth",
  });
});

// Images Change for Product -------------------------->

const images_Mobile = [
  "E-iamgeitem/Mobile/1.png",
  "E-iamgeitem/Mobile/2.png",
  "E-iamgeitem/Mobile/3.png",
  "E-iamgeitem/Mobile/4.png",
  "E-iamgeitem/Mobile/5.png",
  "E-iamgeitem/Mobile/6.png",
  "E-iamgeitem/Mobile/7.png",
  "E-iamgeitem/Mobile/8.png",
  "E-iamgeitem/Mobile/9.png",
  "E-iamgeitem/Mobile/10.png",
  "E-iamgeitem/Mobile/11.png",
  "E-iamgeitem/Mobile/12.png",
];

const images_leptop = [
  "E-iamgeitem/leptopImage/1.png",
  "E-iamgeitem/leptopImage/2.png",
  "E-iamgeitem/leptopImage/3.png",
  "E-iamgeitem/leptopImage/4.png",
  "E-iamgeitem/leptopImage/5.png",
  "E-iamgeitem/leptopImage/6.png",
];

const images_HeadPhone = [
  "E-iamgeitem/Headphones/1.png",
  "E-iamgeitem/Headphones/2.png",
  "E-iamgeitem/Headphones/3.png",
  "E-iamgeitem/Headphones/4.png",
  "E-iamgeitem/Headphones/5.png",
  "E-iamgeitem/Headphones/6.png",
  "E-iamgeitem/Headphones/7.png",
  "E-iamgeitem/Headphones/8.png",
  "E-iamgeitem/Headphones/9.png",
  "E-iamgeitem/Headphones/10.png",
  "E-iamgeitem/Headphones/11.png",
  "E-iamgeitem/Headphones/12.png",
  "E-iamgeitem/Headphones/13.png",
];

const images_SmartWatches = [
  "E-iamgeitem/smartWatches/1.png",
  "E-iamgeitem/smartWatches/2.png",
  "E-iamgeitem/smartWatches/3.png",
  "E-iamgeitem/smartWatches/4.png",
  "E-iamgeitem/smartWatches/5.png",
  "E-iamgeitem/smartWatches/6.png",
  "E-iamgeitem/smartWatches/8.png",
];

const images_Fashion = [
  "E-iamgeitem/Fashion/1.png",
  "E-iamgeitem/Fashion/3.png",
  "E-iamgeitem/Fashion/4.png",
  "E-iamgeitem/Fashion/5.png",
  "E-iamgeitem/Fashion/7.png",
  "E-iamgeitem/Fashion/8.png",
  "E-iamgeitem/Fashion/9.png",
  "E-iamgeitem/Fashion/10.png",
  "E-iamgeitem/Fashion/11.png",
  "E-iamgeitem/Fashion/13.png",
  "E-iamgeitem/Fashion/14.png",
  "E-iamgeitem/Fashion/15.png",
  "E-iamgeitem/Fashion/17.png",
  "E-iamgeitem/Fashion/18.png",
  "E-iamgeitem/Fashion/19.png",
  "E-iamgeitem/Fashion/20.png",
  "E-iamgeitem/Fashion/21.png",
  "E-iamgeitem/Fashion/22.png",
];

const images_Footwear = [
  "E-iamgeitem/Footwear/1.png",
  "E-iamgeitem/Footwear/3.png",
  "E-iamgeitem/Footwear/4.png",
  "E-iamgeitem/Footwear/5.png",
  "E-iamgeitem/Footwear/6.png",
  "E-iamgeitem/Footwear/7.png",
  "E-iamgeitem/Footwear/8.png",
  "E-iamgeitem/Footwear/9.png",
];
const images_Home_Living = [
  "E-iamgeitem/Home & Living/1.png",
  "E-iamgeitem/Home & Living/2.png",
  "E-iamgeitem/Home & Living/3.png",
  "E-iamgeitem/Home & Living/4.png",
  "E-iamgeitem/Home & Living/5.png",
];
const images_Beauty = [
  "E-iamgeitem/Beauty/1.png",
  "E-iamgeitem/Beauty/2.png",
  "E-iamgeitem/Beauty/3.png",
  "E-iamgeitem/Beauty/4.png",
  "E-iamgeitem/Beauty/5.png",
];
const images_Sports = [
  "E-iamgeitem/Sports/1.png",
"E-iamgeitem/Sports/2.png",
"E-iamgeitem/Sports/3.png",
"E-iamgeitem/Sports/4.png",
"E-iamgeitem/Sports/5.png",
"E-iamgeitem/Sports/6.png",
"E-iamgeitem/Sports/7.png",
];
const images_Toys = [
"E-iamgeitem/ToysImage/1.png",
"E-iamgeitem/ToysImage/2.png",
"E-iamgeitem/ToysImage/3.png",
"E-iamgeitem/ToysImage/4.png",
"E-iamgeitem/ToysImage/5.png",
"E-iamgeitem/ToysImage/6.png",
"E-iamgeitem/ToysImage/7.png",
"E-iamgeitem/ToysImage/8.png",
"E-iamgeitem/ToysImage/9.png",
"E-iamgeitem/ToysImage/10.png",
"E-iamgeitem/ToysImage/11.png",
"E-iamgeitem/ToysImage/12.png"
];
const images_Cameras = [
"E-iamgeitem/Cameras/1.png",
"E-iamgeitem/Cameras/2.png",
"E-iamgeitem/Cameras/3.png",
"E-iamgeitem/Cameras/4.png",
"E-iamgeitem/Cameras/5.png",
"E-iamgeitem/Cameras/6.png",
"E-iamgeitem/Cameras/7.png",
"E-iamgeitem/Cameras/8.png",
];
const images_TVAppliances = [
"E-iamgeitem/TV & Appliances/1.png",
// "E-iamgeitem/TV & Appliances/2.png",  <---------- Delete Iamge ---------------->
"E-iamgeitem/TV & Appliances/3.png",
"E-iamgeitem/TV & Appliances/4.png",
"E-iamgeitem/TV & Appliances/5.png",
"E-iamgeitem/TV & Appliances/6.png",
"E-iamgeitem/TV & Appliances/7.png",
"E-iamgeitem/TV & Appliances/8.png",
"E-iamgeitem/TV & Appliances/9.png",
"E-iamgeitem/TV & Appliances/10.png"
];
const images_BagsLuggage = [
"E-iamgeitem/Bags & Luggage/1.png",
"E-iamgeitem/Bags & Luggage/2.png",
"E-iamgeitem/Bags & Luggage/3.png",
"E-iamgeitem/Bags & Luggage/4.png",
"E-iamgeitem/Bags & Luggage/5.png",
"E-iamgeitem/Bags & Luggage/6.png",
"E-iamgeitem/Bags & Luggage/7.png",
"E-iamgeitem/Bags & Luggage/8.png"
];
const images_BooksStationery = [
"E-iamgeitem/Books & Stationery/1.png",
"E-iamgeitem/Books & Stationery/2.png",
"E-iamgeitem/Books & Stationery/3.png",
"E-iamgeitem/Books & Stationery/4.png",
"E-iamgeitem/Books & Stationery/5.png",
"E-iamgeitem/Books & Stationery/6.png",
"E-iamgeitem/Books & Stationery/7.png",
"E-iamgeitem/Books & Stationery/8.png",
"E-iamgeitem/Books & Stationery/9.png",
"E-iamgeitem/Books & Stationery/10.png"
];
const images_ComputerAccessories = [
"E-iamgeitem/Computer Accessories/1.png",
"E-iamgeitem/Computer Accessories/2.png",
"E-iamgeitem/Computer Accessories/3.png",
"E-iamgeitem/Computer Accessories/4.png",
// "E-iamgeitem/Computer Accessories/5.png",
"E-iamgeitem/Computer Accessories/6.png",
"E-iamgeitem/Computer Accessories/7.png",
"E-iamgeitem/Computer Accessories/8.png",
"E-iamgeitem/Computer Accessories/9.png"
];
const images_Electronics = [
"E-iamgeitem/Electronics/1.png",
"E-iamgeitem/Electronics/2.png",
"E-iamgeitem/Electronics/3.png",
"E-iamgeitem/Electronics/4.png",
"E-iamgeitem/Electronics/5.png",
// "E-iamgeitem/Electronics/6.png",
"E-iamgeitem/Electronics/7.png",
"E-iamgeitem/Electronics/8.png",
"E-iamgeitem/Electronics/9.png"
];
const images_KidsBaby = [
 "E-iamgeitem/Kids & Baby/1.png",
"E-iamgeitem/Kids & Baby/2.png",
"E-iamgeitem/Kids & Baby/3.png",
"E-iamgeitem/Kids & Baby/4.png",
"E-iamgeitem/Kids & Baby/5.png",
"E-iamgeitem/Kids & Baby/6.png"
];
const images_Automotivey = [
  "E-iamgeitem/Automotive/1.png",
"E-iamgeitem/Automotive/2.png",
// "E-iamgeitem/Automotive/3.png",
"E-iamgeitem/Automotive/4.png",
"E-iamgeitem/Automotive/5.png",
"E-iamgeitem/Automotive/6.png",
"E-iamgeitem/Automotive/7.png",
"E-iamgeitem/Automotive/8.png",
"E-iamgeitem/Automotive/9.png",
"E-iamgeitem/Automotive/10.png",
"E-iamgeitem/Automotive/11.png"
];
const images_Furniture = [
"E-iamgeitem/Furniture/1.jpg",
"E-iamgeitem/Furniture/2.jpg",
"E-iamgeitem/Furniture/3.jpg",
"E-iamgeitem/Furniture/4.jpg",
"E-iamgeitem/Furniture/5.jpg",
"E-iamgeitem/Furniture/6.jpg",
"E-iamgeitem/Furniture/7.png",
"E-iamgeitem/Furniture/8.jpg",
"E-iamgeitem/Furniture/9.jpg"
];
const images_JewelleryAccessories = [
"E-iamgeitem/Jewellery & Accessories/1.png",
"E-iamgeitem/Jewellery & Accessories/2.png",
"E-iamgeitem/Jewellery & Accessories/3.png",
"E-iamgeitem/Jewellery & Accessories/4.png",
"E-iamgeitem/Jewellery & Accessories/5.png",
"E-iamgeitem/Jewellery & Accessories/6.png",
"E-iamgeitem/Jewellery & Accessories/7.png",
"E-iamgeitem/Jewellery & Accessories/8.png",
"E-iamgeitem/Jewellery & Accessories/9.png",
"E-iamgeitem/Jewellery & Accessories/10.png"
];
// Current Index

let mobileIndex = 0; let laptopIndex = 0; let headphoneIndex = 0; let smartWatchIndex = 0;
let fashionIndex = 0; let footwearIndex = 0; let Home_LivingIndex = 0; let BeautyIndex = 0;
let SportsIndex = 0; let ToysIndex = 0; let CamerasIndex = 0; let TVAppliancesIdnex = 0;
let BagsLuggageIndex = 0; let BooksStationery = 0; let ComputerAccessories = 0;
let ElectronicsIndex = 0; let KidsBabyIndex = 0; let AutomotiveIndex = 0; let FurnitureIndex = 0;
let JewelleryAccessoriesIndex = 0;

// Image Change
setInterval(function () {
  // Mobile
  mobileIndex++;

  if (mobileIndex >= images_Mobile.length) {
    mobileIndex = 0;
  }

  document.getElementById("productImage_Mobile").src =
    images_Mobile[mobileIndex];

  // Laptop
  laptopIndex++;

  if (laptopIndex >= images_leptop.length) {
    laptopIndex = 0;
  }

  document.getElementById("productImage_leptop").src =
    images_leptop[laptopIndex];

  // Headphones
  headphoneIndex++;

  if (headphoneIndex >= images_HeadPhone.length) {
    headphoneIndex = 0;
  }

  document.getElementById("productImage_Headphones").src =
    images_HeadPhone[headphoneIndex];

  // Smart Watches
  smartWatchIndex++;

  if (smartWatchIndex >= images_SmartWatches.length) {
    smartWatchIndex = 0;
  }

  document.getElementById("productImage_smartWatches").src =
    images_SmartWatches[smartWatchIndex];

  // Fashion
  fashionIndex++;

  if (fashionIndex >= images_Fashion.length) {
    fashionIndex = 0;
  }

  document.getElementById("productImage_Fashion").src =
    images_Fashion[fashionIndex];

  // Footwear
  footwearIndex++;

  if (footwearIndex >= images_Footwear.length) {
    footwearIndex = 0;
  }

  document.getElementById("productImage_Footwear").src =
    images_Footwear[footwearIndex];

  // Home & Living ----
  Home_LivingIndex++;

  if (Home_LivingIndex >= images_Home_Living.length) {
    Home_LivingIndex = 0;
  }

  document.getElementById("productImage_Home&Living").src =
    images_Home_Living[Home_LivingIndex];

  // Beauty -----------------

  BeautyIndex++;

  if (BeautyIndex >= images_Beauty.length) {
    BeautyIndex = 0;
  }

  document.getElementById("productImage_Beauty").src =
    images_Beauty[BeautyIndex];

  // Sports -------------------
  SportsIndex++;

  if (SportsIndex >= images_Sports.length) {
    SportsIndex = 0;
  }

  document.getElementById("productImage_Sports").src =
   images_Sports[SportsIndex];
  // Toys -------------------------
  ToysIndex++;

  if (ToysIndex >= images_Toys.length) {
    ToysIndex = 0;
  }

  document.getElementById("productImage_Toys").src =
   images_Toys[ToysIndex];
  // Cameras ------------------------
 CamerasIndex++;

  if (CamerasIndex >= images_Cameras.length) {
    CamerasIndex = 0;
  }

  document.getElementById("productImage_Cameras").src =
   images_Cameras[CamerasIndex];
  // TV & Appliances ----------------------
 TVAppliancesIdnex++;

  if (TVAppliancesIdnex >= images_TVAppliances.length) {
    TVAppliancesIdnex = 0;
  }

  document.getElementById("productImage_TVAppliances").src =
   images_TVAppliances[TVAppliancesIdnex];
  // Bags & Luggage ------------------------
 BagsLuggageIndex++;

  if (BagsLuggageIndex >= images_BagsLuggage.length) {
    BagsLuggageIndex = 0;
  }

  document.getElementById("productImage_BagsLuggage").src =
   images_BagsLuggage[BagsLuggageIndex];
  // Books & Stationery -----------------------
   BooksStationery++;

  if (BooksStationery >= images_BooksStationery.length) {
    BooksStationery = 0;
  }

  document.getElementById("productImage_BooksStationery").src =
   images_BooksStationery[BooksStationery];

//    Computer Accessories -----------------------------------
     ComputerAccessories++;

  if (ComputerAccessories >= images_ComputerAccessories.length) {
    ComputerAccessories = 0;
  }

  document.getElementById("productImage_ComputerAccessories").src =
   images_ComputerAccessories[ComputerAccessories];
//    Electronics -------------------------------------
         ElectronicsIndex++;

  if (ElectronicsIndex >= images_Electronics.length) {
    ElectronicsIndex = 0;
  }

  document.getElementById("productImage_Electronics").src =
   images_Electronics[ElectronicsIndex];

// Kids & Baby  ---------------------------------------

         KidsBabyIndex++;

  if (KidsBabyIndex >= images_KidsBaby.length) {
    KidsBabyIndex = 0;
  }

  document.getElementById("productImage_KidsBaby").src =
   images_KidsBaby[KidsBabyIndex];

   // Automotive  ---------------------------------------

         AutomotiveIndex++;

  if (AutomotiveIndex >= images_Automotivey.length) {
    AutomotiveIndex = 0;
  }
  document.getElementById("productImage_Automotive").src =
   images_Automotivey[AutomotiveIndex];

   // Furniture  ---------------------------------------

         FurnitureIndex++;

  if (FurnitureIndex >= images_Furniture.length) {
    FurnitureIndex = 0;
  }
  document.getElementById("productImage_Furniture").src =
   images_Furniture[FurnitureIndex];

      // Jewellery & Accessories  ---------------------------------------

         JewelleryAccessoriesIndex++;

  if (JewelleryAccessoriesIndex >= images_JewelleryAccessories.length) {
    JewelleryAccessoriesIndex = 0;
  }
  document.getElementById("productImage_JewelleryAccessories").src =
   images_JewelleryAccessories[JewelleryAccessoriesIndex];
   
}, 800);

// shop_product Item are click this nav box ---- this smooth scroll event are Shop item  --------------------->

function ShopProduct_item() {
  document.getElementById("shopByCatagory_container")
        .scrollIntoView({
            behavior: "smooth",
            // block: "start"
        });
}
// document.getElementById("MobileContaienr-group").addEventListener("click", function(){
//     window.open(window.location.href + "?shopbox=open", "_blank");
// });

// window.addEventListener("load", function(){

//     if(window.location.search.includes("shopbox=open")){

//         document.body.innerHTML = `
//             <div class="ShopBox-ContaienrGroupPage">
//                 ${document.querySelector(".ShopBox-ContaienrGroupPage").innerHTML}
//             </div>
//         `;

//         document.querySelector(".ShopBox-ContaienrGroupPage").style.display = "block";
//     }

// });

// function loginFromPageOpen(){
//     document.getElementById("loginPopup").style.display = "flex";
// }
//D:\javaScript Advance Tutorials\E-commerce Homepage\E-commerceIndex.html

   const homeButton = document.getElementById("homeBtn");
        const pageTransition = document.getElementById("pageTransition");

        if (homeButton && pageTransition) homeButton.addEventListener("click", (event) => {
            if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
                return;
            }

            event.preventDefault();
            pageTransition.addEventListener("animationend", () => {
                window.location.assign(homeButton.href);
            }, { once: true });
            pageTransition.classList.add("is-active");
        });

        