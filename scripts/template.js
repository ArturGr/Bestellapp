const MAIN_CONTAINER_TEMPLATE = () =>`
    <div class="restaurant_content" id="restaurant_content"></div>
`;

const SECTION_RESTAURANT_NAME_TEMPLATE = () => `
    <section class="restaurant_name">
        <div>
            <img src="./assets/img/main.jpg" alt="Gemütliches Restaurant-Interieur mit Wein und Esstisch.">
            <div class="restaurant_logo">
                <img src="./assets/img/logo_res.jpg" alt='Restaurant-Logo "Daily Dose" mit organischem Blattmotiv in Erdtönen.'>
            </div>
            </div>
                <div class="restaurant_title">
                    <h1>Daily Dose</h1>
                    <p>Bewertung (4 von 5 Sternen)</p>
                    <p>Nur heute: Kostenloser Versand für Bestellungen über 20€ ! (Standardkosten: 5€)</p>
                </div>
            <div class="navigation">
            <div>
                <img src="./assets/img/nav_img.png" alt="Navigationspfeil">
            </div>
            <nav>
                <a href="#main_dishes">Hauptgerichte</a>
                <a href="#soup">Suppen</a>
                <a href="#desserts">Desserts</a>
            </nav>
        </div>
    </section>
`;

const SECTION_MAIN_MENU_TEMPLATE = () =>`
    <section class="main_menu">
        <div class="main_dishes" id="main_dishes">
            <div class="foto_main_dishes">
                <img src="./assets/img/category/Hauptgerichte.jpg" alt="Nahaufnahme von käsigem, herzhaftem Brot mit Kräutern.">
            </div>
            <div class="title_main_dishes">
                <h2>Hauptgerichte</h2>
            </div>
        </div>
        <div class="soup" id="soup">
            <div class="foto_soup">
                <img src="./assets/img/category/Suppen.jpg" alt="Draufsicht auf drei Schüsseln bunter Suppen auf Marmortisch.">
            </div>
            <div class="title_soup">
                <h2>Suppen</h2>
            </div>
        </div>
        <div class="desserts" id="desserts">
            <div class="foto_desserts">
                <img src="./assets/img/category/Desserts.jpg" alt="Teller mit eleganten weißen Desserts und Himbeersoße.">
            </div>
            <div class="title_desserts">
                <h2>Desserts</h2>
            </div>
        </div>
    </section>
`;

const MAIN_DISH_TEMPLATE = (i) =>`
    <div id="mainDish_id${i}">
        <div class="main_dishes_list">
            <div class="main_dishes_foto">
                <img src="${MAIN_DISHES[i].foto}" alt="${MAIN_DISHES[i].alt}">
                <div class="main_dishes_description">
                    <h3>${MAIN_DISHES[i].name}</h3>
                    <p>${MAIN_DISHES[i].description}</p>
                    <p class = "price_value">${MAIN_DISHES[i].price.toFixed(2)}€</p>
                </div>
            </div>

            <div class="add_icon">
                <img src="./assets/img/plus.png" alt="Hinzufügen-Ikone." onclick="addToCart('mainDishes_id${i}')">
            </div>
        </div>
    </div>
`;

const SOUP_TEMPLATE = (i) =>`
    <div id="soup_id${i}">
        <div class="soup_list">
            <div class="soup_foto">
                <img src="${SOUP[i].foto}" alt="${SOUP[i].alt}">
                <div class="soup_description">
                    <h3>${SOUP[i].name}</h3>
                    <p>${SOUP[i].description}</p>
                    <p class = "price_value">${SOUP[i].price.toFixed(2)}€</p>
                </div>
            </div>

            <div class="add_icon">
                <img src="./assets/img/plus.png" alt="Hinzufügen-Ikone." onclick="addToCart('soups_id${i}')">
            </div>
        </div>
    </div>
`;

const DESSERTS_TEMPLATE = (i) =>`
    <div id="dessert_id${i}">
        <div class="desserts_list">
            <div class="desserts_foto">
                <img src="${DESSERTS[i].foto}" alt="${DESSERTS[i].alt}">
                <div class="desserts_description">
                    <h3>${DESSERTS[i].name}</h3>
                    <p>${DESSERTS[i].description}</p>
                    <p class = "price_value">${DESSERTS[i].price.toFixed(2)}€</p>
                </div>
            </div>

            <div class="add_icon">
                <img src="./assets/img/plus.png" alt="Hinzufügen-Ikone." onclick="addToCart('desserts_id${i}')">
            </div>
        </div>
    </div>
`;

const CART_TEMPLATE = () =>`
    <section class="cart" id="cart">
        <div class="cart_title">
            <h2>Warenkorb</h2>
        </div>
        <div class="cart_dishes_list" id = "cart_dishes_list"></div>
        <div class="cart_sum">
            <div class="price_description">
                <p>Zwischensume:</p>
                <p>Lieferkosten:</p>
                <p><b>Gesamt:</b></p>
            </div>
            <div class="price_values">
                <p id="cart_subtotal">0,00€</p>
                <p id="cart_delivery">0,00€</p>
                <p id="cart_total"><b>0,00€</b></p>
            </div>
        </div>
        <div id="button_order" class="button_order" onclick="order()">
            <span>Bestellen</span>
        </div>
    </section>
`;

const CART_ITEM_TEMPLATE = (i) =>`
    <div class="cart_item_list" id="0">
        <div class="cart_item_title">
            <p id="cart_item_title">${PRODUCT_IN_CART[i].name}</p>
        </div>
        <div class="cart_item_menu">
            <div class="cart_item_submenu">
                <img src="./assets/img/minus.png" alt="Subtrahieren-Ikone." onclick="removingDishesFromCart(${i})">
                <p id="cart_item_amount">${PRODUCT_IN_CART[i].amount}x</p>
                <img src="./assets/img/plus.png" alt="Hinzufügen-Ikone." onclick="addingDishesInCart(${i})">
            </div>
            <div>
                <p id="cart_item_price">${(PRODUCT_IN_CART[i].price * PRODUCT_IN_CART[i].amount).toFixed(2)}€</p>
            </div>
            <div>
                <img src="./assets/img/Trash.png" alt="Löschen-Ikone." onclick="deleteDishFromCart(${i})">
            </div>
        </div>
    </div>
`;

const CART_EMPTY = () =>`
    <div class="cart_item_list" id = "cart_empty">
        <div class="cart_item_title_empty">
            <p>Wähle leckere Gerichte aus der Speisekarte und bestelle Dein Menü.</p>
        </div>
        <div class="cart_item_menu_empty">
            <img src="./assets/img/Empty_shoping_cart.png" alt="Leere Einkaufswagen-Ikone.">
        </div>
    </div>        
`;

const BUTTON_UP = () =>`
    <div class="button_up tooltip">
        <a href="#">
            <img src="./assets/img/to_up.png" alt="zum Seitenanfang">
        </a>
        <span class="tooltiptext">zum Seitenanfang</span>
    </div>
`;

const BUTTON_CART = () =>`
    <div class="button_cart" id="button_cart">
        <span id = "button_cart_responsive" onclick="cartShow()">Warenkorb (0.00€)</span>
        <div class="button_up tooltip">
        <a href="#">
            <img src="./assets/img/to_up.png" alt="up">
        </a>
        <span class="tooltiptext">zum Seitenanfang</span>
        </div>
    </div>    
`;

const ORDERED_WINDOW = () =>`
    <dialog id="myDialog">
        <h2>Der Testauftrag wurde angenommen.</h2>
        <p>Vielen Dank für Ihre Testbestellung.</p> 
        <p>Keine Sorge, es wurde nicht weitergeleitet.</p>
        <div>
            <a href="#" onclick="reset()">Klicken Sie hier, um zur Startseite zurückzukehren.</a>
        </div>
    </dialog>     
`;

const BUTTON_BACK_TO_ORDERING = () =>`
    <div class="button_cart" id="button_cart_test">
        <span onclick="cartClose()">Züruck zum einkaufen</span>        
    </div>   
`;