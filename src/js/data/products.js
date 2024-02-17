const products = [
    {
        id: 1,
        name: 'G4',
        manufacturer: 'Cookie',
        category: 'Helmets',
        image: 'images/products/cookie-g4.png',
        price: 439,
    },
    {
        id: 2,
        name: 'G35',
        manufacturer: 'Cookie',
        category: 'Helmets',
        image: 'images/products/cookie-g35.png',
        price: 459,
    },
    {
        id: 3,
        name: 'T-Shirt 1',
        manufacturer: 'funshirts',
        category: 'Apparel',
        image: 'images/products/t-shirt-1.png',
        price: 17.5,
    },
    {
        id: 4,
        name: 'T-Shirt 2',
        manufacturer: 'funshirts',
        category: 'Apparel',
        image: 'images/products/t-shirt-2.png',
        price: 17.5,
    },
    {
        id: 5,
        name: 'Altitrack',
        manufacturer: 'LB Altimeters',
        category: 'Altimeters',
        image: 'images/products/altitrack.png',
        price: 169,
    },
    {
        id: 6,
        name: 'FT60',
        manufacturer: 'Viplo',
        category: 'Altimeters',
        image: 'images/products/viplo-ft60.png',
        price: 179,
    },
    {
        id: 7,
        name: 'Altimaster Galaxy',
        manufacturer: 'Alti-2',
        category: 'Altimeters',
        image: 'images/products/alti-2-altimaster-galaxy.png',
        price: 159,
    },
    {
        id: 8,
        name: 'ARES II',
        manufacturer: 'LB Altimeters',
        category: 'Altimeters',
        image: 'images/products/ares-ii.png',
        price: 349,
    },
];

function getProductById(productId) {
    return products.find((product) => product.id === productId);
}

/**
 * Get the products filtered by the given filter object.
 * @param {object} filter
 * @returns {Array} The filtered products.
 */
function getProducts(filter) {
    const { query, category, manufacturer } = filter;

    // filter the products by search query, category and manufacturer
    return products.filter((product) => {
        const matchesQuery = !query || product.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = !category || product.category === category;
        const matchesManufacturer = !manufacturer || product.manufacturer === manufacturer;

        return matchesQuery && matchesCategory && matchesManufacturer;
    });
}

/**
 * Gets all the manufacturers of the products.
 */
function getManufacturers() {
    const manufacturers = products.map((product) => product.manufacturer);
    return [...new Set(manufacturers)];
}

/**
 * Gets all the categories of the products.
 */
function getCategories() {
    const categories = products.map((product) => product.category);
    return [...new Set(categories)];
}
