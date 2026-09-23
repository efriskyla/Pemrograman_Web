import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import {
    sortProducts,
    groupByCategory,
    searchProducts
} from "./algoritma.js";
import { getStatistics } from "./utils.js";
import { fetchProducts } from "./api.js";

function render() {
    const container = document.querySelector("#product-list");

    if (state.status === "loading") {
        container.innerHTML = "<p>Loading data produk...</p>";
        return;
    }

    if (state.status === "error") {
        container.innerHTML = "<p>Gagal mengambil data produk.</p>";
        return;
    }

    let filteredProducts = state.products.filter(product => {
        const matchSearch = product.title
            .toLowerCase()
            .includes(state.search.toLowerCase());

        const matchCategory =
            state.category === "all" ||
            product.category === state.category;

        return matchSearch && matchCategory;
    });

    filteredProducts = sortProducts(
        filteredProducts,
        state.sortBy
    );
    if (filteredProducts.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
}
    renderProducts(filteredProducts);
}

function updateCategoryOptions() {
    const categorySelect = document.querySelector("#category-select");

    const categories = [
        ...new Set(
            state.products.map(product => product.category)
        )
    ];

    categorySelect.innerHTML = `
        <option value="all">Semua Kategori</option>
    `;

    for (const category of categories) {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categorySelect.append(option);
    }

    categorySelect.value = state.category;
}

async function loadProducts() {
    try {
        state.status = "loading";

        render();

        console.log("Loading data produk...");

        const data = await fetchProducts();

        state.products = data;
        state.status = "success";

        updateCategoryOptions();

        console.log("Statistics Produk:");
        console.log(getStatistics(state.products));

        console.log("Analisis Kategori:");
        console.log(groupByCategory(state.products));

        console.log("Hasil Pencarian:");
        console.log(searchProducts(state.products, "phone"));

        render();

    } catch (error) {
        state.status = "error";

        render();

        console.error(
            "Gagal mengambil data produk:",
            error
        );

    } finally {
        console.log("Proses pengambilan data selesai.");
    }
}

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", event => {
    state.search = event.target.value;
    render();
});

const categorySelect = document.querySelector("#category-select");

categorySelect.addEventListener("change", event => {
    state.category = event.target.value;
    render();
});

const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", event => {
    state.sortBy = event.target.value;
    render();
});

loadProducts();