function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

const cart = [];

function updateCart() {
    const cartIcon = document.querySelector('.cart');
    cartIcon.textContent = cart.length; 
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
    alert(`${productName} a été ajouté dans le panier`);
}

document.querySelectorAll('.produit1 button').forEach(button => {
    button.addEventListener('click', () => {
        addToCart('Nom du Parfum 1', 100);  
    });
});

document.querySelectorAll('.produit2 button').forEach(button => {
    button.addEventListener('click', () => {
        addToCart('Nom du Parfum 2', 70); 
    });
});

document.querySelectorAll('.produit3 button').forEach(button => {
    button.addEventListener('click', () => {
        addToCart('Nom du Parfum 3', 30);
    });
});

function calculateTotal() {
    let total = 0;
    const quantityInputs = document.querySelectorAll('input[name="quantite"]');
    const priceInputs = document.querySelectorAll('input[name="prix"]');

    quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0;
        const price = parseFloat(priceInputs[index].value) || 0;
        total += quantity * price;
    });

    
    document.querySelector('.formulaire button').textContent = `Total : ${total} €`;
}

document.querySelectorAll('input[name="quantite"], input[name="prix"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});

document.querySelector('.formulaire form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Votre commande a été envoyée avec succès !');
    this.reset();
});
