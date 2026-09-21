import { showToast, updateCartBadge } from './main.js';

// Get Cart
export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save Cart
export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

// Update Quantity (Used in Home & Cart page)
export function updateQty(id, name, price, image, change) {
    let cart = getCart();
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += change;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    } else {
        if (change > 0) {
            cart.push({ id, name, price, image, quantity: 1 });
        }
    }

    saveCart(cart);
    if(change > 0) showToast("Cart updated 🛒");
    
    return cart; // Return updated cart for UI rendering
}
