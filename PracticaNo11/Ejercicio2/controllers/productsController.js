const getProducts = (req, res) => {
    const products = [
        { id: 1, name: 'Refrigerador', price: 500 },
        { id: 2, name: 'Lavadora', price: 300 },
    ];
    res.json(products);
};

module.exports = { getProducts };
