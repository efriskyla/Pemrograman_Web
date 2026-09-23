export async function fetchProducts() {
    const response = await fetch(
        "https://dummyjson.com/products?limit=30"
    );

    if (!response.ok) {
        throw new Error("Gagal mengambil data produk");
    }

    const data = await response.json();

    return data.products;
}