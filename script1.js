let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} a été ajouté au panier.`);
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    const cartTableBody = document.getElementById('cartTable').querySelector('tbody');
    
    cartTableBody.innerHTML = ''; // Clear previous items
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price} €</td>
        `;
        cartTableBody.appendChild(row);
    });

    cartModal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function openForm() {
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
}
