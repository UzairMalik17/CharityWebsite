(function () {
    // get the filter elements
    const searchInput = document.getElementById('productSearchInput');
    const categorySelect = document.getElementById('productCategorySelect');
    const manufacturerSelect = document.getElementById('productManufacturerSelect');

    function updateProductGrid() {
        const query = searchInput.value;
        const category = categorySelect.value;
        const manufacturer = manufacturerSelect.value;

        // filter the products by search query
        const products = getProducts({ query, category, manufacturer });

        // get the products data and render the product grid
        const productGrid = document.getElementById('productGrid');
        productGrid.products = products;

        // add event listeners to the add to cart buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.dataset.productId);
                shoppingCart.addItem(productId, 1);
            });
        });
    }

    updateProductGrid();

    // set initial options of the select elements
    const categories = getCategories();
    const manufacturers = getManufacturers();

    // add category options
    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        categorySelect.appendChild(option);
    });

    // add manufacturer options
    manufacturers.forEach((manufacturer) => {
        const option = document.createElement('option');
        option.value = manufacturer;
        option.text = manufacturer;
        manufacturerSelect.appendChild(option);
    });

    // now add all event listeners so the product grid gets updated when the user changes the filter
    searchInput.addEventListener('input', updateProductGrid);
    categorySelect.addEventListener('change', updateProductGrid);
    manufacturerSelect.addEventListener('change', updateProductGrid);
})();
