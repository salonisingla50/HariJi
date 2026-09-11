/* ============================================================
   Hari Shringar — cart / wishlist logic (localStorage, no server)
   ============================================================ */

const Store = {
  get cart(){ return JSON.parse(localStorage.getItem("devlok_cart") || "[]"); },
  set cart(v){ localStorage.setItem("devlok_cart", JSON.stringify(v)); },
  get wishlist(){ return JSON.parse(localStorage.getItem("devlok_wishlist") || "[]"); },
  set wishlist(v){ localStorage.setItem("devlok_wishlist", JSON.stringify(v)); },
};

function addToCart(id, qty = 1){
  const cart = Store.cart;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  Store.cart = cart;
  renderCartBadge();
  renderCartDrawer();
  const p = PRODUCTS.find(p => p.id === id);
  showToast(p ? `${p.name} added to cart` : "Added to cart");
}

function removeFromCart(id){
  Store.cart = Store.cart.filter(i => i.id !== id);
  renderCartBadge();
  renderCartDrawer();
}

function changeQty(id, delta){
  const cart = Store.cart;
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){
    Store.cart = cart.filter(i => i.id !== id);
  } else {
    Store.cart = cart;
  }
  renderCartBadge();
  renderCartDrawer();
}

function toggleWishlist(id, btnEl){
  let list = Store.wishlist;
  if (list.includes(id)){
    list = list.filter(x => x !== id);
    btnEl && btnEl.classList.remove("active");
  } else {
    list.push(id);
    btnEl && btnEl.classList.add("active");
    showToast("Saved to wishlist");
  }
  Store.wishlist = list;
}

function cartCount(){
  return Store.cart.reduce((sum, i) => sum + i.qty, 0);
}
function cartSubtotal(){
  return Store.cart.reduce((sum, i) => {
    const p = PRODUCTS.find(p => p.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

function renderCartBadge(){
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

function renderCartDrawer(){
  const itemsEl = document.getElementById("cartItems");
  const footEl = document.getElementById("cartFoot");
  if (!itemsEl) return;
  const cart = Store.cart;

  if (cart.length === 0){
    itemsEl.innerHTML = `<div class="cart-empty">Your cart is empty.<br>Browse the collection and add a piece you love.</div>`;
    if (footEl) footEl.style.display = "none";
    return;
  }
  if (footEl) footEl.style.display = "block";

  itemsEl.innerHTML = cart.map(i => {
    const p = PRODUCTS.find(p => p.id === i.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <div class="thumb">${iconFor(p.cat)}</div>
        <div class="cart-item-info">
          <div class="name">${p.name}</div>
          <div class="meta">${formatINR(p.price)} · ${p.material}</div>
          <div class="qty-row">
            <button onclick="changeQty(${p.id}, -1)" aria-label="Decrease quantity">−</button>
            <span>${i.qty}</span>
            <button onclick="changeQty(${p.id}, 1)" aria-label="Increase quantity">+</button>
            <button class="remove" onclick="removeFromCart(${p.id})">Remove</button>
          </div>
        </div>
      </div>`;
  }).join("");

  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = formatINR(cartSubtotal());
}

function showToast(msg){
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}
function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

function toggleMobileNav(){
  document.querySelector(".main-nav").classList.toggle("mobile-open");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartBadge();
  renderCartDrawer();

  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  const closeBtn = document.getElementById("cartCloseBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeCart);
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.addEventListener("click", closeCart);
  const navToggle = document.getElementById("navToggle");
  if (navToggle) navToggle.addEventListener("click", toggleMobileNav);
});
