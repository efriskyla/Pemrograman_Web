console.log("script.js berhasil dijalankan!");
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        category: "laptops",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        category: "phones",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Tablet",
        price: 500,
        rating: 4.4,
        category: "tablets",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        title: "Headphones",
        price: 150,
        rating: 4.6,
        category: "audio",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        title: "Keyboard",
        price: 80,
        rating: 4.3,
        category: "accessories",
        thumbnail: "https://via.placeholder.com/150"
    }
];

function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {
        const card = document.createElement("div");

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "idle"
};

function render() {
    let filteredProducts = state.products.filter(product => {
        const matchSearch = product.title
            .toLowerCase()
            .includes(state.search.toLowerCase());

        const matchCategory =
            state.category === "all" ||
            product.category === state.category;

        return matchSearch && matchCategory;
    });

    if (state.sortBy === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (state.sortBy === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (state.sortBy === "rating") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (state.sortBy === "title") {
        filteredProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    renderProducts(filteredProducts);
}
render();

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});

const categorySelect = document.querySelector("#category-select");

categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});

function getStatistics(products) {
    const totalProducts = products.length;

    const totalPrice = products.reduce((sum, product) => {
        const { price } = product ?? {};
        return sum + (price ?? 0);
    }, 0);

    const averagePrice =
        totalProducts > 0 ? totalPrice / totalProducts : 0;

    const prices = products.map(product => product?.price ?? 0);

    const highestPrice =
        totalProducts > 0 ? Math.max(...prices) : 0;

    const lowestPrice =
        totalProducts > 0 ? Math.min(...prices) : 0;

    const totalStock = products.reduce((sum, product) => {
        const { stock } = product ?? {};
        return sum + (stock ?? 0);
    }, 0);

    const totalRating = products.reduce((sum, product) => {
        const { rating } = product ?? {};
        return sum + (rating ?? 0);
    }, 0);

    const averageRating =
        totalProducts > 0 ? totalRating / totalProducts : 0;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log("Statistics Produk:");
console.log(getStatistics(products));