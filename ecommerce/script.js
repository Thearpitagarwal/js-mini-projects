document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, prod_name: "Product 1", price: 29.99 },
    { id: 2, prod_name: "Product 2", price: 19.99 },
    { id: 3, prod_name: "Product 3", price: 39.99 }
  ];


  const prodlist = document.getElementById('product-list')
  const carditems = document.getElementById('cart-items')
  const emptyCartMsg = document.getElementById('empty-cart')
  const cartTotalMsg = document.getElementById('cart-total')
  const totalprice = document.getElementById("total-price")
  const checkoutbtn = document.getElementById('checkout-btn')
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  renderCart()


  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add('product')
    productDiv.innerHTML = `
    <span>${product.prod_name} - $${product.price.toFixed(2)}</span>
    <button id="${product.id}">Add to Cart</button>`;
    prodlist.appendChild(productDiv)
  })

  prodlist.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
      const productsId = parseInt(e.target.getAttribute('id'));
      const product = products.find(p => p.id === productsId)
      addtoCart(product);
    }
  })

  checkoutbtn.addEventListener('click', () => {
    cart.length = 0;
    alert("Checkout successfully");
    renderCart();
    localStorage.clear()
  })

  carditems.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = parseInt(e.target.dataset.idx, 10);
      cart.splice(index, 1)
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart()
    }
  })


  function addtoCart(product) {
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCart()
  }

  function renderCart() {
    carditems.innerText = "";
    let totalPrice = 0

    if (cart.length > 0) {
      emptyCartMsg.classList.add("hidden");
      cartTotalMsg.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.dataset.idx =  index;
        cartItem.innerHTML = `
    <span>${item.prod_name} - $${item.price.toFixed(2)}</span>
    <button id=${item.id}>X</button>`;
        carditems.appendChild(cartItem);
        totalprice.textContent = `${totalPrice.toFixed(2)}`;
      });

    }
    else {
      emptyCartMsg.classList.remove('hidden')
      cartTotalMsg.classList.add("hidden");
    }
  }

})
