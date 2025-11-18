const DATA_ARRAY = [];
let myDataLocal = [];

const MAIN_DISHES = [];
const SOUP = [];
const DESSERTS = [];
const PRODUCT_IN_CART = [];
let totalPrice = 0;
let deliveryPrice = 5;
let sumOfDishesPrice = 0;
var screenWidthToggle = window.matchMedia("(max-width: 767.99px)");

function init() {
    //dataImport();
    //checkingData();
    mainContainer();
}
/*
function dataImport() {
    getFromLocalStorage();
    if (myDataLocal.length > 0) {
        for (let i = 0; i < myDataLocal.length; i++) {
            DATA_ARRAY.push(myDataLocal[i]);
        }
    } else {
        for (let i = 0; i < dishes.length; i++) {
            DATA_ARRAY.push(dishes[i]);
        }
    }
}

function checkingData() {
    if (DATA_ARRAY.length == 0) {
        return console.log("Error: data array is empty.")
    }
}
*/

function mainContainer() {
    const MAIN_CONTAINER_REF = document.getElementById("main_wrapper");
    MAIN_CONTAINER_REF.innerHTML = "";
    MAIN_CONTAINER_REF.innerHTML = MAIN_CONTAINER_TEMPLATE();
    restaurantContentGenerator();
}

function restaurantContentGenerator() {
    sectionRestaurantName();
    sectionMainMenu();
    document.getElementById("main_wrapper").innerHTML += ORDERED_WINDOW();
}

function sectionRestaurantName() {
    const CONTENT_GENERATOR_REF = document.getElementById("restaurant_content");
    CONTENT_GENERATOR_REF.innerHTML = "";
    CONTENT_GENERATOR_REF.innerHTML = SECTION_RESTAURANT_NAME_TEMPLATE();
}

function sectionMainMenu() {
    const CONTENT_GENERATOR_REF = document.getElementById("restaurant_content");
    CONTENT_GENERATOR_REF.innerHTML += SECTION_MAIN_MENU_TEMPLATE();
    dataPreparing();
    mainDishes();
    soup();
    desserts();
    cartGenerator();
    buttonUpShow();
    buttonCartShow(totalPrice.toFixed(2));
}

function dataPreparing() {
    for (let i = 0; i < dishes.length; i++) {
        switch (dishes[i].category) {
            case "Hauptgerichte":
                MAIN_DISHES.push(dishes[i]);
                break;
            case "Suppen":
                SOUP.push(dishes[i]);
                break;
            case "Desserts":
                DESSERTS.push(dishes[i]);
                break;
            default:
                break;
        }
    }
}

function mainDishes() {
    const MAIN_DISHES_GENERATOR_REF = document.getElementById("main_dishes");
    for (let i = 0; i < MAIN_DISHES.length; i++) {
        MAIN_DISHES_GENERATOR_REF.innerHTML += MAIN_DISH_TEMPLATE(i);
    }
}

function soup() {
    const SOUP_GENERATOR_REF = document.getElementById("soup");
    for (let i = 0; i < SOUP.length; i++) {
        SOUP_GENERATOR_REF.innerHTML += SOUP_TEMPLATE(i);
    }
}

function desserts() {
    const DESSERTS_GENERATOR_REF = document.getElementById("desserts");
    for (let i = 0; i < DESSERTS.length; i++) {
        DESSERTS_GENERATOR_REF.innerHTML += DESSERTS_TEMPLATE(i);
    }
}

function cartGenerator() {
    const CART_GENERATOR_REF = document.getElementById("main_wrapper");
    CART_GENERATOR_REF.innerHTML += CART_TEMPLATE();
    document.getElementById("cart").innerHTML += BUTTON_BACK_TO_ORDERING();
    cartRender();
}

function addToCart(index) {
    let dish = index;
    let id = index.match(/\d+/g);
    if (dish.includes("mainDishes")) {
        addingMainDishes(id);
    } else if (dish.includes("soup")) {
        addingSoup(id);
    } else if (dish.includes("dessert")) {
        addingDesserts(id);
    } else {
        return;
    }
}

function cartRender() {
    const CART_RENDER_REF = document.getElementById("cart_dishes_list");
    CART_RENDER_REF.innerHTML = "";
    if (PRODUCT_IN_CART.length == 0) {
        CART_RENDER_REF.innerHTML += CART_EMPTY();
        document.getElementById("cart_empty").style.alignItems = "center";
        buttonOrderShow();
    }
    else {
        for (let i = 0; i < PRODUCT_IN_CART.length; i++) {
            CART_RENDER_REF.innerHTML += CART_ITEM_TEMPLATE(i);
        }
        sumOfProductPrice();
    }
}

function cartShow() {
    document.getElementById("cart").style.display = "unset";
    document.getElementById("cart").style.position = "fixed";
    document.getElementById("cart").style.width = "100vw";
    document.getElementById("cart").style.height = "100vh";
    document.getElementById("cart").style.background = "var(--white)";
    document.getElementById("cart").style.padding = "20px"
    document.body.style.overflow = "hidden";
    document.getElementById("button_cart").style.display = "none";
}

function cartClose() {
    document.getElementById("cart").style.display = "";
    document.getElementById("cart").style.position = "sticky";
    document.getElementById("cart").style.width = "300px";
    document.getElementById("cart").style.height = "40vw";
    document.getElementById("cart").style.background = "";
    document.getElementById("cart").style.padding = ""
    document.body.style.overflow = "unset";
    document.getElementById("button_cart_resp").display = "none";
    if (screenWidthToggle.matches) {
        document.getElementById("button_cart").style.display = "flex";
    }
}

function buttonUpShow() {
    const BUTTON_UP_REF = document.getElementById("cart");
    BUTTON_UP_REF.innerHTML += BUTTON_UP();
}

function buttonCartShow(value) {
    const BUTTON_CART_SHOW_REF = document.getElementById("main_wrapper");
    BUTTON_CART_SHOW_REF.parentNode.innerHTML += BUTTON_CART(value);
}

function buttonOrderShow() {
    const BUTTON_ORDER_REF = document.getElementById("button_order");
    if (PRODUCT_IN_CART.length < 1) {
        BUTTON_ORDER_REF.classList.add("hidden");
    } else {
        BUTTON_ORDER_REF.classList.remove("hidden");
    }
}

function addingMainDishes(id) {
    let newID = PRODUCT_IN_CART.findIndex((element) => { return element["name"] == MAIN_DISHES[id].name });
    if (newID > -1) {
        PRODUCT_IN_CART[newID].amount += 1;
    } else {
        PRODUCT_IN_CART.push(MAIN_DISHES[id]);
        PRODUCT_IN_CART[PRODUCT_IN_CART.length - 1].amount = 1;
    }
    cartRender();
}

function addingSoup(id) {
    let newID = PRODUCT_IN_CART.findIndex((element) => { return element["name"] == SOUP[id].name });
    if (newID > -1) {
        PRODUCT_IN_CART[newID].amount += 1;
    } else {
        PRODUCT_IN_CART.push(SOUP[id]);
        PRODUCT_IN_CART[PRODUCT_IN_CART.length - 1].amount = 1;
    }
    cartRender();
}

function addingDesserts(id) {
    let newID = PRODUCT_IN_CART.findIndex((element) => { return element["name"] == DESSERTS[id].name });
    if (newID > -1) {
        PRODUCT_IN_CART[newID].amount += 1;
    } else {
        PRODUCT_IN_CART.push(DESSERTS[id]);
        PRODUCT_IN_CART[PRODUCT_IN_CART.length - 1].amount = 1;
    }
    cartRender();
}

function sumOfProductPrice() {
    let sumOfDishesTemp = [];
    for (let i = 0; i < PRODUCT_IN_CART.length; i++) {
        sumOfDishesTemp.push(PRODUCT_IN_CART[i].amount * PRODUCT_IN_CART[i].price);
    }
    sumOfDishesPrice = 0;
    for (let j = 0; j < sumOfDishesTemp.length; j++) {
        sumOfDishesPrice += sumOfDishesTemp[j];
    }
    deliveryPriceSet();
    cleaningPriceValues();
    setNewPriceValues();
    buttonOrderShow();
}

function cleaningPriceValues() {
    document.getElementById("cart_subtotal").innerHTML = "";
    document.getElementById("cart_delivery").innerHTML = "";
    document.getElementById("cart_total").innerHTML = "";
    document.getElementById("button_cart_responsive").innerHTML = "";
}

function setNewPriceValues() {
    totalPrice = sumOfDishesPrice + deliveryPrice;
    document.getElementById("cart_subtotal").innerHTML = `${sumOfDishesPrice.toFixed(2)}€`;
    document.getElementById("cart_delivery").innerHTML = `${deliveryPrice.toFixed(2)}€`;
    document.getElementById("cart_total").innerHTML = `${totalPrice.toFixed(2)}€`;
    document.getElementById("button_cart_responsive").innerHTML = `Warenkorb (${totalPrice.toFixed(2)}€)`;
}

function deliveryPriceSet() {
    if (sumOfDishesPrice >= 20) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
}

function addingDishesInCart(index) {
    PRODUCT_IN_CART[index].amount++;
    cartRender();
}

function removingDishesFromCart(index) {
    if (PRODUCT_IN_CART[index].amount == 1) {
        deleteDishFromCart(index);
    } else {
        PRODUCT_IN_CART[index].amount--;
    }
    cartRender();
}

function deleteDishFromCart(index) {
    PRODUCT_IN_CART.splice(index, 1);
    if (PRODUCT_IN_CART.length == 0) {
        sumOfDishesPrice = 0;
        deliveryPrice = 0;
        setNewPriceValues();
    }
    cartRender();
}

function order() {
    const DIALOGREF = document.getElementById("myDialog");
    DIALOGREF.showModal();
    DIALOGREF.classList.add("opened");
}

function reset() {
    const DIALOGREF = document.getElementById("myDialog");
    PRODUCT_IN_CART.length = 0;
    totalPrice = 0;
    deliveryPrice = 0;
    sumOfDishesPrice = 0;
    setNewPriceValues();
    DIALOGREF.close();
    DIALOGREF.classList.remove("opened");
    cartClose();
    cartRender();
}

function myFunction(screenWidthToggle) {
    if (screenWidthToggle.matches) {
        document.getElementById("button_cart").style.display = "flex";
    } else {
        cartClose();
        document.getElementById("button_cart").style.display = "none";
    }
}

screenWidthToggle.addEventListener("change", function () {
    myFunction(screenWidthToggle);
});








/*
//zapisywanie tylko tego, co jest w koszyku
function saveData() {
    if (myDataLocal != null) {
        saveToLocalStorage();
    } else {
        return console.log("Data saving error");
    }
}

function saveToLocalStorage() {
    localStorage.setItem("myDataLocal", JSON.stringify(DATA_ARRAY));
    localStorage.setItem("checkboxStatus", JSON.stringify(FAVORITE_CHECKBOX_REF.checked));
}

function getFromLocalStorage() {
    let myData = JSON.parse(localStorage.getItem("myDataLocal"));
    let myCheckbox = JSON.parse(localStorage.getItem("checkboxStatus"));
    if (myData == null) {
        return;
    }
    myDataLocal = myData;
    checkboxStatus = myCheckbox;
}
*/
