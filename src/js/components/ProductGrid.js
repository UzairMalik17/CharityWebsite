class ProductGrid extends HTMLElement {
    constructor() {
        super();

        this._products = [];
        this.render();
    }

    render() {
        if (!this.products || this.products.length === 0) {
            this.innerHTML = '<div class="no-products">No products found</div>';
            return;
        }

        this.innerHTML = `
            <div class="product-grid">
                ${this.products
                    .map(
                        (product) => `<article class="product">
                            <div class="product-image-container">
                                <img src="${product.image}" alt="${product.name}" class="product-image" />
                            </div>
                            <h2 class="product-name">${product.name}</h2>
                            <div class="product-manufacturer">${product.manufacturer}</div>
                            <div class="product-controls">
                                <span class="product-price">${formatPrice(product.price)}</span>
                                <!-- the add to cart button -->
                                <button class="icon-button add-to-cart" data-product-id="${product.id}"
                                    title="Add to cart">
                                    <span class="material-symbols">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </article>`
                    )
                    .join('')}
            </div>
        `;
    }

    set products(value) {
        this._products = value;
        this.render();
    }

    get products() {
        return this._products;
    }
}

customElements.define('product-grid', ProductGrid);
