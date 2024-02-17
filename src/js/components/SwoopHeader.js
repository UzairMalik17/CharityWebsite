class SwoopHeader extends HTMLElement {
    constructor() {
        super();
        this.render();

        // Add scroll event listener to header
        addEventListener('scroll', () => {
            const header = document.querySelector('.header');

            // If the user has scrolled down, add the opaque class to the header.
            // Otherwise, remove it.
            if (window.scrollY > 0) {
                header.classList.add('opaque');
            } else {
                header.classList.remove('opaque');
            }
        });

        // Add click event listener to nav toggle button
        const navToggleButton = document.getElementById('navToggleButton');
        navToggleButton.addEventListener('click', () => {
            const offcanvasNav = document.getElementById('offcanvasNav');

            // If the offcanvas nav is hidden, show it.
            // Otherwise, hide it.
            if (offcanvasNav.classList.contains('show')) {
                offcanvasNav.classList.remove('show');
            } else {
                offcanvasNav.classList.add('show');
            }
        });

        const navCloseButton = document.getElementById('navCloseButton');
        navCloseButton.addEventListener('click', () => {
            const offcanvasNav = document.getElementById('offcanvasNav');
            offcanvasNav.classList.remove('show');
        });
    }

    render() {
        this.innerHTML = `
            <!-- this is the main header that's displayed on all pages -->
            <header class="header">
                <nav class="main-nav container" aria-label="main navigation">
                    <!-- this is the main nav for larger screens -->
                    <a href="/">
                        <img class="logo" src="/images/logo.svg" alt="Swoop - Logo" />
                    </a>
                    <div class="nav-item-container">
                        <button id="navToggleButton" class="nav-toggle menu-button" aria-label="toggle navigation">
                            <span class="material-symbols nav-icon">
                                menu
                            </span>
                        </button>
                        <div>
                            <ul class="nav-links">
                                <li class="nav-item"><a href="/">Home</a></li>
                                <li class="nav-item"><a href="/articles.html">Articles</a></li>
                                <li class="nav-item"><a href="/dropzones.html">Dropzones</a></li>
                                <li class="nav-item"><a href="/shop.html">Shop</a></li>
                                <li class="nav-item"><a href="/about-us.html">About Us</a></li>
                                <button class="dark-mode-button icon-button" title="Toggle Dark Mode">
                                    <span class="material-symbols nav-icon">
                                        dark_mode
                                    </span>
                                </button>
                            </ul>
                        </div>
                        <div class="nav-item">
                            <!-- the shopping cart button that opens the checkout modal -->
                            <button id="cartButton" class="icon-button" title="Shopping Cart">
                                <span class="material-symbols nav-icon">
                                    shopping_cart
                                    <span class="cart-item-count-badge">
                                        <span id="cartItemCount" class="cart-item-count">
                                            ${shoppingCart.totalQuantity}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <!-- this is the offcanvas nav for smaller screens -->
                    <div id="offcanvasNav" class="offcanvas-nav">
                        <div class="offcanvas-nav-header">
                            <button id="navCloseButton" class="offcanvas-nav-close menu-button" aria-label="close navigation">
                                <span class="material-symbols nav-icon">close</span>
                            </button>
                        </div>
                        <ul class="offcanvas-nav-links">
                            <li class="offcanvas-nav-item"><a href="/">Home</a></li>
                            <li class="offcanvas-nav-item"><a href="/articles.html">Articles</a></li>
                            <li class="offcanvas-nav-item"><a href="/dropzones.html">Dropzones</a></li>
                            <li class="offcanvas-nav-item"><a href="/shop.html">Shop</a></li>
                            <li class="offcanvas-nav-item"><a href="/about-us.html">About Us</a></li>
                            <li class="offcanvas-nav-item">
                                <button class="dark-mode-button icon-button" title="Toggle Dark Mode">
                                    <span class="material-symbols nav-icon">
                                        dark_mode
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
                <div id="checkoutModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button id="checkoutCloseButton" class="modal-close-button icon-button nav-icon" aria-label="close modal">
                                <span class="material-symbols nav-icon">close</span>
                            </button>
                            <h2>Checkout</h2>
                        </div>
                        <div id="checkoutModalBody" class="modal-body">
                        </div>
                    </div>
                </div>
        `;

        // add dark mode toggle button handler to all dark mode buttons
        const darkModeButtons = document.querySelectorAll('.dark-mode-button');
        darkModeButtons.forEach((button) => button.addEventListener('click', toggleDarkMode));

        // Get the modal
        var modal = document.getElementById('checkoutModal');

        // Get the button that opens the modal
        var btn = document.getElementById('cartButton');

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
            const scrollbarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth);

            // prevent the scrollbar shift when the modal opens by adding padding to the body
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        };

        function closeModal() {
            // remove the modal-open class and the padding from the body
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '0px';
            modal.style.display = 'none';
        }

        // close the modal when the user clicks on the close button
        const closeButton = document.getElementById('checkoutCloseButton');
        closeButton.onclick = closeModal;

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                closeModal();
            }
        };

        /**
         * Updates the modal body with the current shopping cart contents and the checkout form
         * if the cart is not empty. If it's empty, a message is shown instead.
         */
        function updateCheckoutView() {
            const checkoutBody = document.getElementById('checkoutModalBody');

            if (shoppingCart.totalQuantity > 0) {
                // if the cart is not empty, show the summary with all items listed
                // and the checkout form
                checkoutBody.innerHTML = `
                    <h3>Summary</h3>
                    <div id="checkoutSummary" class="checkout-summary">
                        ${shoppingCart.items
                            .map((item) => {
                                const product = getProductById(item.productId);

                                return `
                                <div class="checkout-item">
                                    <div class="checkout-item-image">
                                        <img src="${product.image}" alt="${product.name}" />
                                    </div>
                                    <div class="checkout-item-details">
                                        <div class="checkout-item-name">${product.name}</div>
                                        <div class="product-manufacturer muted">${product.manufacturer}</div>
                                        <div class="checkout-item-quantity muted">Quantity: ${item.quantity}</div>
                                    </div>
                                    <div class="checkout-item-right-side">
                                        <button class="icon-button remove-product-button" data-product-id="${
                                            product.id
                                        }">
                                            <span class="material-symbols">
                                                delete
                                            </span>
                                        </button>
                                        <div class="checkout-item-price">${formatPrice(product.price)}</div>
                                    </div>
                                </div>
                            `;
                            })
                            .join('')}
                        <div class="checkout-total">
                            <span>Total</span>
                            <span>${formatPrice(shoppingCart.totalPrice)}</span>
                        </div>
                    </div>
                    <h3 class="mt-2">Your address</h3>
                    <!--
                        This is the checkout form. It is hidden by default and only shown
                        when the user has items in their cart. We use the novalidate attribute
                        so we can add the is-validated class and only then apply styles with
                        the :invalid pseudo-class.
                    -->
                    <form id="checkoutForm" novalidate>
                        <div class="form-field">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" class="form-input" autocomplete="name" required />
                        </div>
                        <div class="form-field">
                            <label for="email">E-Mail</label>
                            <input type="email" id="email" name="email" class="form-input" autocomplete="email" required />
                        </div>
                        <div class="form-field">
                            <label for="address1">Address 1</label>
                            <input type="text" id="address1" name="address1" class="form-input" required />
                        </div>
                        <div class="form-field">
                            <label for="address2">Address 2 <span class="optional">(optional)</span></label>
                            <input type="text" id="address2" name="address2" class="form-input" />
                        </div>
                        <div class="form-field">
                            <label for="city">Town/City</label>
                            <input type="text" id="city" name="city" class="form-input" required />
                        </div>
                        <div class="form-field">
                            <label for="postcode">Postcode</label>
                            <input type="text" id="postcode" name="postcode" class="form-input" required />
                        </div>
                        <button type="submit" class="button">Place order</button>
                    </form>
                `;
            } else {
                // if the cart is empty, show a message and a link to the shop
                checkoutBody.innerHTML = `
                <div class="text-center">
                    <div>
                        Your cart is empty
                    </div>
                    <div class="mt-2">
                        <a href="/shop.html">Take me to the shop!</a>
                    </div>
                </div>
            `;
            }

            // add remove item from cart button handlers
            const removeProductButtons = document.querySelectorAll('.remove-product-button');
            removeProductButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const productId = parseInt(button.dataset.productId);
                    shoppingCart.removeItem(productId);
                });
            });

            // get the checkout form and add a submit event listener
            const checkoutForm = document.getElementById('checkoutForm');

            if (checkoutForm) {
                checkoutForm.addEventListener('submit', (event) => {
                    event.preventDefault();

                    // add the is-validated class to the form so we can apply styles
                    checkoutForm.classList.add('is-validated');

                    // check if the form is valid and abort if it isn't
                    if (!checkoutForm.checkValidity()) {
                        event.stopPropagation();
                        checkoutForm.reportValidity();
                        return;
                    }

                    // clear the shopping cart
                    shoppingCart.clear();

                    // replace content of checkoutModalBody with a thank you message
                    const checkoutModalBody = document.getElementById('checkoutModalBody');

                    if (checkoutModalBody) {
                        checkoutModalBody.innerHTML = `
                            <h3>Thank you for your order!</h3>
                            <p>Your order will be shipped to you soon.</p>
                        `;
                    }
                });
            }
        }

        /**
         * Updates the cart item count badge and shows/hides it depending on the quantity
         */
        function updateCartItemCount() {
            const quantity = shoppingCart.totalQuantity;

            // update the cart item count
            const cartItemCount = document.getElementById('cartItemCount');
            cartItemCount.innerText = quantity;

            // show the cart item count badge if the quantity is greater than 0
            cartItemCount.classList.toggle('show', quantity > 0);
        }

        // register an onChange listener for the shopping cart and update the checkout summary
        shoppingCart.registerOnChangeListener(() => {
            updateCartItemCount();
            updateCheckoutView();
        });

        updateCartItemCount();
        updateCheckoutView();
    }
}

customElements.define('swoop-header', SwoopHeader);
