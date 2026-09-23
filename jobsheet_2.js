// ==================================================
// BAGIAN 1 - JAVASCRIPT FUNDAMENTALS
// ==================================================

// ==============================
// LATIHAN 1.1
// Menghitung harga setelah diskon
// ==============================

function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

const result = calculateDiscountedPrice(100, 20);

console.log(result);


// ==============================
// LATIHAN 1.2
// Menerapkan diskon ke cart
// ==============================

const cart = [
    {
        title: "Laptop",
        price: 1000,
        discountPercent: 10
    },
    {
        title: "Mouse",
        price: 20,
        discountPercent: 5
    },
    {
        title: "Keyboard",
        price: 50,
        discountPercent: 0
    }
];

function applyDiscounts(cart) {
    const result = [];

    for (const item of cart) {
        const finalPrice =
            item.price - (item.price * item.discountPercent) / 100;

        result.push({
            title: item.title,
            finalPrice: finalPrice
        });
    }

    return result;
}

console.log(applyDiscounts(cart));


// ==================================================
// BAGIAN 2 - DATA REPRESENTATION
// ==================================================

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",

        tags: [
            "computer",
            "electronics",
            "office"
        ],

        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },

        reviews: [
            {
                user: "A",
                rating: 5,
                comment: "Good product"
            },
            {
                user: "B",
                rating: 4,
                comment: "Worth it"
            }
        ]
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",

        tags: [
            "mobile",
            "electronics"
        ],

        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },

        reviews: [
            {
                user: "C",
                rating: 4,
                comment: "Nice camera"
            },
            {
                user: "D",
                rating: 5,
                comment: "Fast"
            },
            {
                user: "E",
                rating: 3,
                comment: "Battery so-so"
            }
        ]
    }
];


// ==============================
// LATIHAN 2.1
// Mencari produk berdasarkan ID
// ==============================

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

console.log("Produk dengan ID 2:");
console.log(findProductById(products, 2));


// ==============================
// LATIHAN 2.2
// Mencari produk dengan stok kurang dari 10
// ==============================

const lowStockProducts = products.filter(
    product => product.stock < 10
);

console.log("Produk dengan stok rendah:");
console.log(lowStockProducts);


// ==============================
// LATIHAN 2.3
// Update stock produk
// ==============================

function updateStock(products, id, newStock) {
    return products.map(product =>
        product.id === id
            ? {
                ...product,
                stock: newStock
            }
            : product
    );
}

const updatedProducts = updateStock(products, 1, 20);

console.log("Produk setelah stock diperbarui:");
console.log(updatedProducts);


// ==================================================
// BAGIAN 3 - NESTED DATA
// ==================================================


// ==============================
// LATIHAN 3.1
// Mengambil semua tags
// ==============================

const allTags = products.map(
    product => product.tags
);

console.log("Semua tag:");
console.log(allTags);


// ==============================
// LATIHAN 3.2
// Mencari produk berdasarkan tag
// ==============================

function findProductsByTag(products, tag) {
    return products.filter(
        product => product.tags.includes(tag)
    );
}

const resultByTag = findProductsByTag(
    products,
    "electronics"
);

console.log("Produk dengan tag electronics:");
console.log(resultByTag);


// ==============================
// LATIHAN 3.3
// Menghitung jumlah review setiap produk
// ==============================

const productReviewCounts = products.map(product => {
    return {
        id: product.id,
        title: product.title,
        totalReviews: product.reviews.length
    };
});

console.log("Jumlah review setiap produk:");
console.log(productReviewCounts);


// ==============================
// LATIHAN 3.4
// Mengumpulkan review dengan rating 5
// ==============================

const fiveStarReviews = products.flatMap(product =>
    product.reviews.filter(
        review => review.rating === 5
    )
);

console.log("Review dengan rating 5:");
console.log(fiveStarReviews);


// ==============================
// LATIHAN 3.5
// Menghitung rata-rata rating review
// ==============================

const averageRatings = products.map(product => {

    const totalRating = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    const averageRating =
        totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: averageRating
    };
});

console.log("Rata-rata rating setiap produk:");
console.log(averageRatings);

const productWithMostReviews = products.reduce(
    (maxProduct, product) => {
        return product.reviews.length > maxProduct.reviews.length
            ? product
            : maxProduct;
    }
);

console.log("Produk dengan review terbanyak:");
console.log(productWithMostReviews);

const allReviewRatings = products.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log("Semua rating dari seluruh review:");
console.log(allReviewRatings);

// ==============================
// BAGIAN 4 - FLATTENING DATA
// ==============================

// ==============================
// LATIHAN 4.1
// Mengambil seluruh tags dari semua produk
// ==============================

const allProductTags = products.flatMap(
    product => product.tags
);

console.log("Semua tags dari seluruh produk:");
console.log(allProductTags);

const allReviewComments = products.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log("Semua comment dari seluruh review:");
console.log(allReviewComments);

const laptopPrices = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averageLaptopPrice =
    laptopPrices.reduce((sum, price) => sum + price, 0)
    / laptopPrices.length;

console.log("Harga produk kategori laptops:");
console.log(laptopPrices);

console.log("Rata-rata harga produk laptops:");
console.log(averageLaptopPrice);

function getStatistics(products) {

    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    const totalRating = products.reduce(
        (sum, product) => sum + product.rating,
        0
    );

    const averageRating = totalRating / totalProducts;

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

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log("Hasil Linear Search:");

console.log(linearSearch([10, 20, 30, 40, 50], 30));
console.log(linearSearch([10, 20, 30, 40, 50], 100));

function linearSearchProduct(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === targetId) {
            return products[i];
        }
    }

    return -1;
}

console.log("Hasil pencarian produk:");

console.log(linearSearchProduct(products, 1));
console.log(linearSearchProduct(products, 99));

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log("Hasil Binary Search:");

const numbers = [10, 20, 30, 40, 50];

console.log(binarySearch(numbers, 30));
console.log(binarySearch(numbers, 50));
console.log(binarySearch(numbers, 100));

const sortedProductsByPrice = [...products].sort(
    (a, b) => a.price - b.price
);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) {
            return mid;
        }

        if (sortedProducts[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log("Produk setelah diurutkan berdasarkan harga:");
console.log(sortedProductsByPrice);

console.log("Hasil Binary Search berdasarkan harga:");

console.log(
    binarySearchByPrice(sortedProductsByPrice, 800)
);

console.log(
    binarySearchByPrice(sortedProductsByPrice, 1200)
);

console.log(
    binarySearchByPrice(sortedProductsByPrice, 1000)
);

function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }

        }
    }

    return arr;
}

console.log("Hasil Bubble Sort:");

const numbersToSort = [5, 3, 8, 1, 4];

console.log("Array awal:");
console.log(numbersToSort);

console.log("Array setelah diurutkan:");
console.log(bubbleSort(numbersToSort));

console.log("Array asli setelah sorting:");
console.log(numbersToSort);

function sortProducts(products, sortBy) {
    const sortedProducts = [...products];

    if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } 
    else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } 
    else if (sortBy === "rating") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } 
    else if (sortBy === "title") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sortedProducts;
}

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;
    }, {});
}

const groupedProducts = groupByCategory(products);

console.log("Produk berdasarkan kategori:");
console.log(groupedProducts);

console.log("Jumlah produk per kategori:");

for (const category in groupedProducts) {
    console.log(
        category,
        ":",
        groupedProducts[category].length
    );
}

function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

console.log("Frequency:");
console.log(countFrequency(words));

console.log("Frequency Category:");

const categoryFrequency = countFrequency(
    products.map(product => product.category)
);

console.log(categoryFrequency);


console.log("Frequency Tags:");

const tagFrequency = countFrequency(
    products.flatMap(product => product.tags)
);

console.log(tagFrequency);


console.log("Frequency Rating:");

const ratingFrequency = countFrequency(
    products.map(product => Math.round(product.rating))
);

console.log(ratingFrequency);

const uniqueCategories = [
    ...new Set(products.map(product => product.category))
];

const uniqueTags = [
    ...new Set(products.flatMap(product => product.tags))
];

console.log("Unique Categories:");
console.log(uniqueCategories);

console.log("Unique Tags:");
console.log(uniqueTags);

function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}

const productLookup = buildProductLookup(products);

console.log("Product Lookup:");
console.log(productLookup);

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

stack.push("Laptop");
stack.push("Smartphone");
stack.push("Tablet");

console.log("Isi Stack:");
console.log(stack.items);

console.log("Item paling atas:");
console.log(stack.peek());

console.log("Item yang dikeluarkan:");
console.log(stack.pop());

console.log("Isi Stack setelah pop:");
console.log(stack.items);

console.log("Apakah Stack kosong?");
console.log(stack.isEmpty());

const searchHistory = new Stack();

searchHistory.push("Laptop");
searchHistory.push("Smartphone");
searchHistory.push("Tablet");

console.log("Search History:");
console.log(searchHistory.items);

console.log("Pencarian terakhir:");
console.log(searchHistory.peek());

console.log("Menghapus pencarian terakhir:");
console.log(searchHistory.pop());

console.log("Search History setelah dihapus:");
console.log(searchHistory.items);

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue();

queue.enqueue("Request 1");
queue.enqueue("Request 2");
queue.enqueue("Request 3");

console.log("Isi Queue:");
console.log(queue.items);

console.log("Request paling depan:");
console.log(queue.peek());

console.log("Request yang diproses:");
console.log(queue.dequeue());

console.log("Isi Queue setelah dequeue:");
console.log(queue.items);

const categories = [
    {
        name: "Electronics",
        children: [
            {
                name: "Laptop",
                children: []
            },
            {
                name: "Phone",
                children: []
            }
        ]
    }
];

function printCategories(categories, depth = 0) {
    for (const category of categories) {
        console.log(" ".repeat(depth) + category.name);

        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}

printCategories(categories);

function linearSearchSteps(array, target) {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
        steps++;

        if (array[i] === target) {
            return steps;
        }
    }

    return steps;
}

function binarySearchSteps(array, target) {
    let left = 0;
    let right = array.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return steps;
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return steps;
}

const largeArray = [];

for (let i = 1; i <= 10000; i++) {
    largeArray.push(i);
}

const target = 10000;

console.log("Jumlah langkah Linear Search:");
console.log(linearSearchSteps(largeArray, target));

console.log("Jumlah langkah Binary Search:");
console.log(binarySearchSteps(largeArray, target));

const manyProducts = [];

for (let i = 1; i <= 1000; i++) {
    manyProducts.push({
        id: i,
        title: `Product ${i}`,
        category: `category${i % 10}`
    });
}

let nestedLoopSteps = 0;

for (let i = 0; i < manyProducts.length; i++) {
    for (let j = i + 1; j < manyProducts.length; j++) {
        nestedLoopSteps++;

        if (
            manyProducts[i].category ===
            manyProducts[j].category
        ) {
            // ditemukan pasangan dengan kategori sama
        }
    }
}

console.log("Jumlah pemeriksaan Nested Loop:");
console.log(nestedLoopSteps);

let mapSteps = 0;

const categoryMap = new Map();

for (const product of manyProducts) {
    mapSteps++;

    if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, []);
    }

    categoryMap.get(product.category).push(product);
}

console.log("Jumlah pemeriksaan Grouping dengan Map:");
console.log(mapSteps);

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data berhasil diambil");
    } else {
        reject("Terjadi error");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Selesai, apa pun hasilnya"));

async function loadProducts() {
    try {
        const products = await getProducts();

        state.products = products;
        state.status = "success";
    } catch (error) {
        state.status = "error";
        console.error(error);
    } finally {
        render();
    }
}

function getProducts() {
    return new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve([
                { id: 1, title: "Laptop" },
                { id: 2, title: "Smartphone" }
            ]);
        } else {
            reject("Gagal mengambil data produk");
        }
    });
}

async function loadProducts() {
    try {
        const products = await getProducts();

        console.log("Data berhasil diambil:");
        console.log(products);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Proses selesai");
    }
}

loadProducts();