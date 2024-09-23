let cartCount = 0;

function updateCartCount() {
    const cartButton = document.querySelector('.btn-outline-success');
    cartButton.textContent = `Carrito (${cartCount})`;
}

function addToCart() {
    cartCount++;
    updateCartCount();
}
