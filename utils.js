export function getStatistics(products) {
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