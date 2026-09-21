// Toast Notification
export function showToast(msg) {
    const t = document.getElementById("toast");
    if(t) {
        t.innerText = msg; 
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 1500);
    }
}

// Update Cart Badge
export function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const badge = document.getElementById("cartBadge");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if(badge) {
        if(totalItems > 0) {
            badge.style.display = "block";
            badge.innerText = totalItems;
        } else {
            badge.style.display = "none";
        }
    }
}