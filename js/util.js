class ShoppingCart {
    constructor() {
        this.items = [];
        this.onChangeListeners = [];
    }

    /**
     * Emits the onChange event to all listeners.
     */
    emitOnChange() {
        this.onChangeListeners.forEach((listener) => listener());
    }

    /**
     * Registers a listener for the onChange event.
     */
    registerOnChangeListener(listener) {
        this.onChangeListeners.push(listener);
    }

    /**
     * Adds a product to the cart.
     * @param {number} productId
     * @param {number} quantity
     */
    addItem(productId, quantity) {
        const item = this.items.find((item) => item.productId === productId);

        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ productId, quantity });
        }

        this.emitOnChange();
    }

    /**
     * Removes a product from the cart.
     * @param {number} productId
     */
    removeItem(productId) {
        this.items = this.items.filter((item) => item.productId !== productId);
        this.emitOnChange();
    }

    /**
     * Gets the total price of all the products in the cart.
     */
    get totalPrice() {
        return this.items.reduce((total, item) => {
            const product = getProductById(item.productId);
            return total + product.price * item.quantity;
        }, 0);
    }

    /**
     * Gets the total quantity of products in the cart.
     */
    get totalQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    /**
     * Removes all the items from the cart.
     */
    clear() {
        this.items = [];
        this.emitOnChange();
    }
}

const shoppingCart = new ShoppingCart();

// formats a date string with format YYYY-MM-DD to a UK date
function formatDateString(dateString) {
    return new Date(dateString).toLocaleDateString('en-UK');
}

function formatPrice(price) {
    return `&pound;${price.toFixed(2)}`;
}

(function () {
    // load dark mode
    const body = document.querySelector('body');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    // register an onChange listener for the shopping cart and store the items in local storage
    shoppingCart.registerOnChangeListener(() => {
        localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCart.items));
    });

    // load the shopping cart items from local storage
    const shoppingCartItemsString = localStorage.getItem('shoppingCartItems');
    if (shoppingCartItemsString) {
        shoppingCart.items = JSON.parse(shoppingCartItemsString);
    }
})();

function toggleDarkMode() {
    const body = document.querySelector('body');
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
